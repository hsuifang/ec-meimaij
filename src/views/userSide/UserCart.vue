<template>
  <PageTitle>
    <template v-slot:breadcrumb>
      <h2 class="fs-6">鎂麥 / 購物車</h2>
    </template>
  </PageTitle>
  <!-- 購物車 -->
  <div class="container pt-0 pb-4 pt-lg-3 py-lg-6">
    <div class="row mt-4 mb-4">
      <div class="col-lg-12">
        <div class="py-3 p-md-5 bg-white rounded border">
          <div v-if="carts.length > 0" class="d-flex justify-content-end mb-2">
            <button
              type="button"
              class="btn btn-outline-primary py-2"
              :disabled="loadingItem.pos === 'delAll'"
              @click.prevent="deleteAllCart"
            >
              刪除全部
            </button>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="py-3 border-0 bg-light">名稱</th>
                  <th scope="col" class="py-3 border-0 bg-light">金額</th>
                  <th scope="col" class="py-3 border-0 bg-light">數量</th>
                  <th scope="col" class="py-3 border-0 bg-light">刪除</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="carts.length > 0">
                  <tr v-for="item in carts" :key="item.product_id">
                    <td>
                      <div class="p-2">
                        <img
                          :src="item.product.imageUrl"
                          alt="商品主要圖片"
                          width="120"
                          height="120"
                          class="img-fluid me-5 obj-fit-contain"
                        />
                        <div class="ml-3 d-inline-block align-middle">
                          <h5 class="fs-6 6mb-0 text-dark">{{ item.product.title }}</h5>
                          <p class="fs-8 text-muted font-weight-normal fst-italic mb-2">
                            類別: {{ item.product.category }}
                          </p>
                          <div v-if="item.coupon" class="text-muted fs-8">
                            優惠券:
                            <span class="bg-primary text-white rounded-pill py-1 px-2 fs-8">
                              {{ item.coupon.code }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <strong>{{ $filters.currency(item.product.price) }}</strong>
                    </td>
                    <td class="align-middle">
                      <input
                        type="number"
                        class="form-control"
                        v-model.number="item.qty"
                        style="width: 80px"
                        min="1"
                        @change="
                          updateCart({
                            cartId: item.id,
                            productId: item.product_id,
                            qty: item.qty,
                          })
                        "
                      />
                    </td>
                    <td class="align-middle">
                      <button
                        type="button"
                        class="btn btn-outline-info"
                        @click="deleteItemFromCart({ cartId: item.id })"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                      <div
                        v-if="loadingItem.pos === 'delItem' && loadingItem.id === item.id"
                        class="position-absolute top-50 start-50"
                      >
                        <div class="spinner-border spinner-border-sm" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
                <tr v-else>
                  <td colspan="4" class="text-center py-3">目前無購物資料</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex mb-3 mb-lg-0 mt-2">
            <input
              id="coupon"
              type="text"
              class="form-control me-2"
              style="width: 180px"
              v-model="couponCode"
            />
            <div>
              <button
                type="button"
                class="btn btn-secondary text-white"
                @click="applyCoupon"
                :disabled="!couponCode"
              >
                <i class="bi bi-gift text-white me-2"></i>優惠碼
              </button>
              <div
                v-if="loadingItem.pos === 'applyCoupon'"
                class="spinner-border spinner-border-sm position-absolute top-50 start-100"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="text-end pt-5 pb-3 border-bottom" v-if="carts.length > 0">
      <li class="mb-4">小計: {{ $filters.currency(price.total) }}</li>
      <li class="mb-4">折扣: {{ $filters.currency(price.total - price.final_total) }}</li>
      <li class="mb-4">
        總計: <span class="fw-bold">{{ $filters.currency(price.final_total) }}</span>
      </li>
    </ul>
    <p v-else class="text-secondary">
      一起加油！即日起至8/18優惠碼限時輸入：<strong>e7e7x80</strong> 全館8折優惠
    </p>
    <div class="d-flex justify-content-between py-3">
      <router-link class="btn btn-outline-secondary" to="products">繼續購物</router-link>
      <router-link v-if="carts.length !== 0" class="btn btn-primary px-4 text-white" to="checkout"
        >結帳</router-link
      >
    </div>
  </div>
</template>

<script>
import cartsMixin from '@/mixins/cartsMixin';
import { apiApplyCoupon } from '@/api';
import PageTitle from '@/layout/PageTitle.vue';

export default {
  components: {
    PageTitle,
  },
  mixins: [cartsMixin],
  data() {
    return {
      couponCode: '',
      usedCode: '',
      coupons: [],
    };
  },
  methods: {
    async applyCoupon() {
      if (!this.couponCode) {
        return;
      }
      this.toggleLoding({ pos: 'applyCoupon' });
      try {
        const res = await apiApplyCoupon(this.couponCode);
        if (res.data.success) {
          this.usedCode = this.couponCode;
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
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
  },
  created() {
    this.fetchCartList();
  },
};
</script>
