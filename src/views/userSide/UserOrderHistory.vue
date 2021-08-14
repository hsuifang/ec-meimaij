<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="table-responsive py-lg-3 mb-2 p-md-5 bg-white rounded border">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="py-3 border-0 bg-light">名稱</th>
              <th scope="col" class="py-3 border-0 bg-light">數量</th>
              <th scope="col" class="py-3 border-0 bg-light">訂購日期</th>
              <th scope="col" class="py-3 border-0 bg-light">付款</th>
              <th scope="col" class="py-3 border-0 bg-light">明細</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="list.length > 0">
              <tr v-for="item in list" :key="item.id">
                <td class="align-middle">
                  <p class="fs-7 text-dark" v-for="order in item.products" :key="order.id">
                    {{ order.product.title }}
                  </p>
                  <p class="fs-8 text-secondary mt-1">{{ $filters.currency(item.total) }}</p>
                </td>
                <td class="align-middle fs-8">{{ item.num }}</td>
                <td class="align-middle fs-8">
                  {{ $filters.localeDateStr(item.create_at) }}
                </td>
                <td class="align-middle">
                  <p
                    :class="[item.is_paid ? 'bg-success' : 'bg-danger']"
                    class="rounded text-white px-2 d-inline-block mb-1 fs-8"
                  >
                    {{ item.is_paid ? '已付款' : '未付款' }}
                  </p>
                  <p v-if="item.paid_date" class="fs-9">
                    {{ $filters.localeDateStr(item.paid_date) }}
                    {{ $filters.localeTimeStr(item.paid_date) }}
                  </p>
                </td>
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    @click="$router.push(`/order/${item.id}`)"
                  >
                    <i class="bi bi-eyeglasses"></i>
                  </button>
                </td>
              </tr>
            </template>
            <tr v-else>
              <td colspan="6" class="text-center">目前無購物資料</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-md-between">
    <p>
      目前有 <span>{{ list.length }}</span> 項訂購
    </p>
    <Pagination :pageInfo="pageInfo" @changePage="changePage" />
  </div>
</template>

<script>
import { apiUserQueryOrders } from '@/api';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      list: [],
      pageInfo: {
        current: 1,
        total: 1,
      },
    };
  },
  methods: {
    async queryOrderList(page = 1) {
      this.$vLoading(true);
      try {
        const res = await apiUserQueryOrders(page);
        const { success, orders, pagination } = res.data;
        if (success) {
          this.list = orders;
          this.pageInfo = {
            current: pagination.current_page,
            total: pagination.total_pages,
          };
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    changePage(page) {
      this.queryOrderList(page);
    },
  },
  created() {
    this.queryOrderList();
  },
};
</script>
