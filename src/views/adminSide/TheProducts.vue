<template>
  <div class="container pt-4 pb-4 pt-lg-7 pb-lg-7">
    <div class="card">
      <div class="card-body">
        <!-- create Btn -->
        <div class="d-flex justify-content-md-between pr-3 mb-4">
          <h2 class="h6 text-info">產品清單</h2>
          <button
            class="btn btn-outline-primary shadow-sm py-2"
            type="button"
            aria-controls="modifyProductItem"
            @click="handleProductItem(null)"
          >
            建立新的產品
          </button>
        </div>
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">產品名稱</th>
              <th scope="col">類別</th>
              <th scope="col">評價</th>
              <th class="text-end" scope="col">原價</th>
              <th class="text-end" scope="col">售價</th>
              <th scope="col">是否啟用</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.rate || '-' }}</td>
              <td class="text-end">{{ $filters.currency(item.origin_price) }}</td>
              <td class="text-end">{{ $filters.currency(item.price) }}</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :checked="item.is_enabled"
                    @change="toggleProductItemStatus(item)"
                  />
                </div>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-info me-1"
                  data-action="remove"
                  @click="handleProductItem(item)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-danger text-white"
                  data-action="remove"
                  @click="checkInfo({ id: item.id, title: item.title })"
                >
                  刪除
                </button>
              </td>
            </tr>
            <!-- no data -->
            <tr v-if="products.length === 0" class="text-center text-muted">
              <td class="text-center text-muted" colspan="7">無商品</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-md-between">
          <p>
            目前有 <span>{{ products.length }}</span> 項產品
          </p>
          <Pagination :pageInfo="pageInfo" @changePage="changePage"></Pagination>
        </div>
      </div>
    </div>

    <ProductModal
      ref="productModal"
      :productItem="currentProductItem"
      @submitProductItem="updateProductItem"
      @clearItem="initGenerateForm"
    />
    <QuestionModal
      ref="questionModal"
      :content="questionModalContent"
      @checkInfo="deleteProductItem(targetItemId)"
    />
  </div>
</template>
<script>
import {
  apiGetAdminProducts,
  apiDeleteProductItem,
  apiCreateProduct,
  apiUpdateProduct,
} from '@/api';
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';
import QuestionModal from '@/components/QuestionModal.vue';

export default {
  components: {
    Pagination,
    ProductModal,
    QuestionModal,
  },
  data() {
    return {
      currentProductItem: null,
      products: [],
      productCount: 0,
      pageInfo: {
        current: 1,
        total: 1,
      },
      isCreateItem: true,
      questionModalContent: '',
      targetItemId: '',
    };
  },
  methods: {
    generateItemForm() {
      return {
        title: '',
        category: '',
        origin_price: null,
        price: null,
        unit: '',
        description: '',
        content: '',
        is_enabled: true,
        imageUrl: '',
        rate: 5,
        imagesUrl: ['', '', '', '', ''],
      };
    },
    async fetchProductData(page = 1) {
      try {
        this.$vLoading(true);
        const res = await apiGetAdminProducts(page);
        const { products, pagination, success } = res.data;
        if (success) {
          this.products = products.map((item) => ({
            ...item,
            is_enabled: Boolean(item.is_enabled),
          }));
          this.pageInfo = {
            current: pagination.current_page,
            total: pagination.total_pages,
          };
        } else {
          this.$vHttpsNotice(res, '產品資料');
        }
      } catch (error) {
        this.$vLoading(false);
      } finally {
        this.$vLoading(false);
      }
    },
    async toggleProductItemStatus(item) {
      this.currentProductItem = item;
      this.currentProductItem.is_enabled = !this.currentProductItem.is_enabled;
      await this.submitProductItem({ isNew: false, content: this.currentProductItem });
    },
    async deleteProductItem(id) {
      this.$vLoading(true);
      try {
        const res = await apiDeleteProductItem(id);
        if (res.data.success) {
          this.fetchProductData();
        }
      } catch (error) {
        this.$vLoading(false);
      }
    },
    async submitProductItem({ isNew, content }) {
      try {
        this.$vLoading(true);
        const productId = content.id;
        const res = isNew
          ? await apiCreateProduct({ data: content })
          : await apiUpdateProduct({ id: productId, data: { data: content } });
        const { success } = res.data;
        if (success) {
          this.$refs.productModal.closeModal();
          if (productId) {
            const idx = this.products.findIndex((item) => item.id === productId);
            if (idx !== -1) {
              this.products[idx] = content;
            }
          } else {
            this.fetchProductData();
          }
        }
        this.$vHttpsNotice(res, '產品調整');
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    checkInfo({ id, title }) {
      this.questionModalContent = `你確定要刪除-${title}嗎？`;
      this.targetItemId = id;
      this.$refs.questionModal.openModal();
    },
    handleProductItem(item) {
      if (item) {
        this.currentProductItem = item;
        this.isCreateItem = false;
      } else {
        this.currentProductItem = this.generateItemForm();
        this.isCreateItem = true;
      }
      this.$refs.productModal.openModal();
    },
    updateProductItem(info) {
      this.submitProductItem(info);
    },
    changePage(page) {
      this.fetchProductData(page);
    },
    initGenerateForm() {
      this.currentProductItem = this.generateItemForm();
    },
    init() {
      this.initGenerateForm();
      this.fetchProductData();
    },
  },
  created() {
    this.init();
  },
};
</script>
