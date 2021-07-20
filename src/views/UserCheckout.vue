<template>
  <PageTitle>
    <template v-slot:breadcrumb>
      <h2 class="fs-6">鎂麥 / 購買</h2>
    </template>
  </PageTitle>
  <div class="container pt-0 pb-4 pt-lg-3 py-lg-6">
    <a
      href="#"
      class="text-dark bg-light border-top border-3 border-secondary d-block p-3"
      @click.prevent="toggleCollapse"
    >
      是否優惠碼 ? <span class="text-danger">請輸入優惠碼</span>
    </a>
    <div class="collapse" ref="collapse">
      <div class="py-4 d-flex">
        <input
          id="coupon"
          type="text"
          class="form-control me-2"
          style="width: 200px"
          v-model="couponCode"
        />
        <button type="button" class="btn btn-secondary text-white" @click="applyCoupon">
          <i class="bi bi-gift text-white me-2"></i>使用優惠券
        </button>
      </div>
    </div>
    <div class="pb-5">
      <v-form ref="form" v-slot="{ errors }" @submit="requestOrder">
        <div class="row gx-lg-5">
          <div class="col-lg-6">
            <h3 class="h5 mb-4 py-3 fw-bold">購買者資訊</h3>
            <div class="mb-3 mb-lg-4">
              <label for="name" class="form-label">姓名</label>
              <v-field
                id="name"
                name="姓名"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="email" class="form-label">Email</label>
              <v-field
                id="email"
                name="Email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['Email'] }"
                placeholder="請輸入Email"
                rules="email|required"
                v-model="form.user.email"
              ></v-field>
              <error-message name="Email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="tel" class="form-label">電話</label>
              <v-field
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="min:8|max:10|required"
                v-model="form.user.tel"
              ></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="address" class="form-label">地址</label>
              <v-field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></v-field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="message" class="form-label">留言或備註</label>
              <textarea
                id="message"
                cols="30"
                rows="2"
                class="form-control"
                v-model="form.message"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="h5 mb-4 py-3 fw-bold">購買項目</h3>
            <ul class="bg-light list-group list-group-flush p-2 p-lg-5 mb-3 mb-lg-4">
              <li class="list-group-item d-flex justify-content-between">
                <p class="fw-bold">名稱</p>
                <p class="fw-bold">金額</p>
              </li>
              <li class="list-group-item" v-for="cart in carts" :key="cart.id">
                <div class="d-flex justify-content-between mb-2">
                  <p>{{ cart.product.title }} x {{ cart.qty }}</p>
                  <p>{{ $filters.currency(cart.product.price) }}</p>
                </div>
                <div v-if="cart.coupon" class="text-muted fs-8">
                  優惠券:
                  <span class="bg-primary text-white rounded-pill py-1 px-2 fs-8">
                    {{ cart.coupon.code }}
                  </span>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <p class="fw-bold">小計</p>
                <p class="fw-bold">{{ $filters.currency(price.total) }}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <p class="fw-bold">折扣</p>
                <p class="fw-bold">{{ $filters.currency(price.total - price.final_total) }}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <p class="fw-bold">總計</p>
                <p class="fw-bold">{{ $filters.currency(price.final_total) }}</p>
              </li>
            </ul>
            <div class="text-end">
              <button
                type="submit"
                class="btn btn-primary px-4 text-white"
                :disabled="loadingItem.pos === 'requestOrder'"
              >
                購買確認
              </button>
              <div
                v-if="loadingItem.pos === 'requestOrder'"
                class="position-absolute top-50 start-100"
                style="transform: translateX(-10px)"
              >
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>
import { apiGenerateOrder, apiApplyCoupon } from '@/api';
import Collapse from 'bootstrap/js/dist/collapse';
import cartsMixin from '@/mixins/cartsMixin';
import PageTitle from '@/layout/PageTitle.vue';

export default {
  name: 'checkout',
  components: {
    PageTitle,
  },
  data() {
    return {
      loadingItem: {
        pos: '',
        id: '',
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      collapse: '',
      couponCode: '',
    };
  },
  mixins: [cartsMixin],
  inject: ['emitter'],
  methods: {
    async applyCoupon() {
      if (!this.couponCode) return;
      this.toggleLoding({ pos: 'applyCoupon' });
      try {
        const res = await apiApplyCoupon(this.couponCode);
        if (res.data.success) {
          this.fetchCartList();
        }
        this.couponCode = '';
        this.$vHttpsNotice(res, '使用優惠券');
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.toggleLoding({ pos: '' });
      }
    },
    async requestOrder() {
      this.toggleLoding({ pos: 'requestOrder' });
      try {
        const res = await apiGenerateOrder({
          user: this.form.user,
          message: this.form.message,
        });
        const { success } = res.data;
        if (success) {
          this.$vHttpsNotice(res, '送出訂單');
          this.emitter.emit('updateCart', { volume: 0 });
          this.$router.push('/');
        } else {
          this.$vHttpsNotice(res, '送出訂單');
        }
      } catch (error) {
        console.log(error);
        this.$vErrorNotice();
      } finally {
        this.toggleLoding({ pos: '' });
      }
    },
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
    toggleCollapse() {
      this.collapse.toggle();
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse);
    this.fetchCartList();
  },
};
</script>
