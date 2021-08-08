<template>
  <PageTitle>
    <template v-slot:breadcrumb>
      <h2 class="fs-6">鎂麥 / 結帳</h2>
    </template>
  </PageTitle>
  <div class="container py-lg-4 mb-8 mb-lg-0">
    <div class="d-lg-flex justify-content-center align-items-center mb-5">
      <p class="fs-1 me-3">
        <i class="bi bi-check-circle-fill text-success" style="top: -10px"></i>
      </p>
      <div>
        <h5 class="mb-1">感謝您！您的訂單已建立完成</h5>
        <p class="text-info">訂單編號: {{ order.id }}</p>
      </div>
    </div>
    <div class="pb-md-5">
      <p class="border-bottom-custom"></p>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="mb-6">
          <h3 class="h6 mb-2 mb-md-3 fw-bold">訂單資訊</h3>
          <ul class="list-group-flush">
            <li class="d-flex mb-2">
              <p class="w-25 me-1 me-lg-0 text-info">訂購時間</p>
              <p class="w-75">
                {{ $filters.localeDateStr(order.create_at) }}
                {{ $filters.localeTimeStr(order.create_at) }}
              </p>
            </li>
            <li class="d-flex">
              <p class="w-25 me-1 me-lg-0 text-info">處理狀態</p>
              <p class="w-75">{{ order.processStatus || '處理中' }}</p>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="h6 mb-2 mb-md-3 fw-bold">聯絡資訊</h3>
          <ul class="list-group-flush">
            <li class="d-lg-flex mb-1 mb-md-2">
              <p class="w-25 me-3 me-lg-0 text-info">姓名</p>
              <p class="w-75">{{ order.user?.name }}</p>
            </li>
            <li class="d-lg-flex mb-2">
              <p class="w-25 me-3 me-lg-0 text-info">運送地址</p>
              <p class="w-75">{{ order.user?.address }}</p>
            </li>
            <li class="d-lg-flex mb-2">
              <p class="w-25 me-3 me-lg-0 text-info">聯絡電話</p>
              <p class="w-75">{{ order.user?.tel }}</p>
            </li>
            <li class="d-lg-flex">
              <p class="w-25 me-3 me-lg-0 text-info">聯絡信箱</p>
              <p class="w-75">{{ order.user?.email }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="mb-6">
          <h3 class="h6 mb-2 mb-md-3 fw-bold">購買項目</h3>
          <ul class="list-group list-group-flush">
            <li v-for="key in Object.keys(order.products || [])" :key="key">
              <div class="d-md-flex justify-content-between mb-md-2">
                <p>{{ order.products[key].product.title }} x {{ order.products[key].qty }}</p>
                <p>{{ $filters.currency(order.products[key].total) }}</p>
              </div>
            </li>
            <li class="d-flex justify-content-between">
              <p>總計</p>
              <p class="fw-bold">{{ $filters.currency(order.total) }}</p>
            </li>
          </ul>
        </div>
        <div class="mb-2 mb-lg-4">
          <h3 class="h6 mb-2 mb-md-3 fw-bold">付款狀態</h3>
          <ul class="list-group-flush bg-light py-4">
            <li class="d-flex mb-2">
              <p class="me-2">付款方式/</p>
              <p>信用卡</p>
            </li>
            <li class="d-flex">
              <p class="me-2">付款狀態/</p>
              <p
                :class="[order.is_paid ? 'bg-success' : 'bg-danger']"
                class="rounded text-white px-2"
              >
                {{ order.is_paid ? '已付款' : '未付款' }}
              </p>
            </li>
          </ul>
        </div>
        <div class="text-end">
          <button
            v-if="!order?.is_paid"
            type="button"
            class="btn btn-primary px-6 text-white"
            @click="payForOrder"
          >
            付款
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { apiUserGetOrder, apiUserPayment } from '@/api';
import PageTitle from '@/layout/PageTitle.vue';

export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      orderId: '',
      order: {},
    };
  },
  methods: {
    async getOrderInfo(orderId) {
      this.$vLoading(true);
      try {
        const res = await apiUserGetOrder(orderId);
        const { success, order } = res.data;
        if (success) {
          this.order = order;
        } else {
          this.$vHttpsNotice(res, '訂單');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    async payForOrder() {
      this.$vLoading(true);
      try {
        const res = await apiUserPayment(this.orderId);
        const { success } = res.data;
        if (success) {
          this.$vLoading(false);
          this.order.is_paid = true;
          this.$swal({
            title: '付款完成',
            icon: 'success',
            button: '確認',
          });
        } else {
          this.$vHttpsNotice(res, '付款');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    init() {
      this.orderId = this.$route.params.id;
      if (this.orderId) {
        this.getOrderInfo(this.orderId);
      } else {
        this.$router.push('/member');
      }
    },
  },
  created() {
    this.init();
  },
};
</script>
