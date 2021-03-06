<template>
  <div class="container pt-4 pb-4 pt-lg-7 pb-lg-7">
    <div class="card">
      <div class="card-body">
        <!-- create Btn -->
        <div class="d-flex justify-content-md-between pr-3 mb-4">
          <h2 class="h6 text-info">訂單清單</h2>
          <div class="text-end mb-2" v-if="orders.length > 0">
            <button
              type="button"
              class="btn btn-outline-secondary py-2 px-3"
              @click="showCheckAgain({ title: '全部' })"
            >
              刪除全部
            </button>
          </div>
        </div>
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">購買時間</th>
              <th scope="col">姓名</th>
              <th scope="col">購買款項</th>
              <th scope="col">付款金額</th>
              <th scope="col">是否付款</th>
              <th scope="col">功能</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="isLoading">
              <td class="text-center text-muted" colspan="6">
                <img
                  alt="loading"
                  width="100"
                  src="https://media.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif"
                />
              </td>
            </tr>
            <template v-else>
              <tr v-for="item in orders" :key="item.id">
                <td>{{ $filters.localeDateStr(item.create_at) }}</td>
                <td>{{ item.user.name }}</td>
                <td>
                  <ul class="list-unstyled">
                    <li v-for="(product, prodcutKey) in item.products" :key="prodcutKey">
                      {{ product.product.title }}
                      <span class="text-secondary"
                        >數量：{{ product.qty }} {{ product.product.unit }}</span
                      >
                    </li>
                  </ul>
                </td>
                <td>{{ $filters.currency(item.total) }}</td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="item.is_paid"
                      @change="toggleOrderItemStatus(item)"
                    />
                  </div>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-info me-1"
                    data-action="remove"
                    @click="handleOrderItem(item)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-danger text-white"
                    data-action="remove"
                    @click="showCheckAgain({ id: item.id, title: item.title })"
                  >
                    刪除
                  </button>
                </td>
              </tr>
              <!-- no data -->
              <tr v-if="orders.length === 0" class="text-center text-muted">
                <td class="text-center text-muted" colspan="6">無商品</td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="d-flex justify-content-md-between">
          <p>
            目前有 <span>{{ orders.length }}</span> 項訂單
          </p>
          <Pagination :pageInfo="pageInfo" @changePage="changePage" />
        </div>
      </div>
    </div>
  </div>
  <OrderModal
    ref="orderModal"
    :orderInfo="currentItem"
    @updateOrder="submitOrderItem"
    @clearItem="currentItem = {}"
  />
  <QuestionModal ref="questionModal" :content="questionModalContent" @checkInfo="checkInfo" />
</template>

<script>
import { apiGetOrders, apiUpdateOrder, apiDelOrder, apiDelOrderAll } from '@/api';
import Pagination from '@/components/Pagination.vue';
import OrderModal from '@/components/OrderModal.vue';
import QuestionModal from '@/components/QuestionModal.vue';

export default {
  components: {
    Pagination,
    OrderModal,
    QuestionModal,
  },
  data() {
    return {
      currentItem: {},
      orders: [],
      pageInfo: {
        current: 1,
        total: 1,
      },
      isCreateItem: true,
      isLoading: false,
      questionModalContent: '',
      targetItemId: '',
    };
  },
  methods: {
    async fetchOrders(page = 1) {
      try {
        this.isLoading = true;
        const res = await apiGetOrders(page);
        const { orders, pagination, success } = res.data;
        if (success) {
          this.orders = orders;
          this.pageInfo = {
            current: pagination.current_page,
            total: pagination.total_pages,
          };
        } else {
          this.$vHttpNotice(res, '取得訂單資訊');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.isLoading = false;
      }
    },
    async toggleOrderItemStatus(item) {
      try {
        this.isLoading = true;
        this.currentItem = item;
        await this.submitOrderItem(this.currentItem);
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.isLoading = false;
      }
    },
    async deleteOrderItem(id) {
      this.isLoading = true;
      try {
        const res = await apiDelOrder(id);
        if (res.data.success) {
          this.fetchOrders(this.pageInfo.current_page);
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.isLoading = false;
      }
    },
    async deleteAllOrders() {
      this.$vLoading(true);
      try {
        const res = await apiDelOrderAll();
        const { success } = res.data;
        if (success) {
          this.carts = [];
          this.fetchOrders();
        } else {
          this.$vHttpsNotice(res, '刪除所有訂單');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    async submitOrderItem(content) {
      try {
        this.$vLoading(true);
        const couponId = content.id;
        const res = await apiUpdateOrder({ id: couponId, data: { data: content } });
        const { success } = res.data;
        if (success) {
          this.$refs.orderModal.closeModal();
          if (couponId) {
            const idx = this.orders.findIndex((item) => item.id === couponId);
            if (idx !== -1) {
              this.orders[idx] = content;
            }
          } else {
            this.fetchOrders();
          }
        }
        this.$vHttpsNotice(res, '修改訂單資訊');
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    showCheckAgain({ id, title }) {
      this.questionModalContent = `你確定要刪除-${title}嗎？`;
      this.targetItemId = id;
      this.$refs.questionModal.openModal();
    },
    checkInfo() {
      if (!this.targetItemId) {
        this.deleteAllOrders();
      } else {
        this.deleteOrderItem(this.targetItemId);
      }
    },
    handleOrderItem(item) {
      if (item) {
        this.currentItem = item;
        this.isCreateItem = false;
      }
      this.$refs.orderModal.openModal();
    },
    updateOrderItem(info) {
      this.submitOrderItem(info);
    },
    changePage(page) {
      this.fetchOrders(page);
    },
    init() {
      this.fetchOrders();
    },
  },
  created() {
    this.init();
  },
};
</script>
