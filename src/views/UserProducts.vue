<template>
  <!-- banner -->
  <!-- 可能可用圖片 -->
  <section class="bg-light">
    <div class="container text-center py-5">
      <h2 class="fs-6">鎂麥產品 / 健康 ▪︎ 寵愛</h2>
    </div>
  </section>
  <div class="container py-6">
    <div class="row">
      <div class="col-lg-3">
        <!-- catagory -->
        <div class="p-4">
          <h3 class="fs-6 mb-4 fw-bold">產品類型</h3>
          <ul class="ps-1">
            <li class="mb-2" v-for="type in typesList" :key="type.category">
              <a
                href="#"
                @click.prevent="typeSelected = type.category"
                :class="{ 'text-primary': typeSelected === type.category }"
                >{{ type.category }} | {{ type.count }}</a
              >
            </li>
          </ul>
        </div>
        <!-- tag -->
        <!-- <div class="p-4">
          <h3 class="fs-6 mb-4 fw-bold">產品標籤</h3>
          <div>
            <button class="btn btn-light border rounded-pill me-2 px-3" type="button">健康</button>
            <button class="btn btn-light border rounded-pill me-2 px-3" type="button">
              小型犬
            </button>
          </div>
        </div> -->
      </div>
      <div class="col-lg-9">
        <ul class="d-flex mb-4" data-discript="filterViewType">
          <li class="p-1">
            <a href="#" data-view="product-grid" @click.prevent="productView = 'grid'"
              ><i
                class="bi bi-grid fs-4 fw-bold"
                :class="{ 'text-primary': productView === 'grid' }"
              ></i
            ></a>
          </li>
          <li class="p-1">
            <a href="#" data-view="product-list" @click.prevent="productView = 'list'"
              ><i
                class="bi bi-list fs-4 fw-bold"
                :class="{ 'text-primary': productView === 'list' }"
              ></i
            ></a>
          </li>
        </ul>
        <div class="row mb-6">
          <template v-for="item in products" :key="item.id">
            <div class="col-lg-4" v-show="productView === 'grid'">
              <ProductsViewCard :type="productView" :content="item" />
            </div>
            <div class="col-12" v-show="productView === 'list'">
              <ProductsViewCard :type="productView" :content="item" />
            </div>
          </template>
          <!-- 方法二 -->
          <!-- <div
            v-for="item in products"
            :key="item.id"
            :class="[productView === 'list' ? 'col-12' : 'col-lg-4']"
          >
            <ProductsViewCard :type="productView" :content="item" />
          </div> -->
        </div>
        <div class="d-flex justify-content-center" v-if="this.typeSelected === '全部'">
          <Pagination :pageInfo="pageInfo" @changePage="changePage" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductsViewCard from '@/components/ProductsViewCard.vue';
import Pagination from '@/components/Pagination.vue';
import { apiGetCleintProducts, apiGetProductsAll } from '@/api';

export default {
  name: 'product',
  components: {
    ProductsViewCard,
    Pagination,
  },
  data() {
    return {
      productView: 'grid',
      productsAll: [],
      products: [],
      pageInfo: {
        current_page: 1,
        has_next: false,
        has_pre: false,
        total_pages: 1,
      },
      typeSelected: '全部',
    };
  },
  computed: {
    typesList() {
      const types = this.productsAll.reduce((acc, current) => {
        const idx = acc.findIndex((item) => item.category === current.category);
        if (idx === -1) {
          return [...acc, { category: current.category, count: 1 }];
        }
        acc[idx].count += 1;
        return acc;
      }, []);
      return [
        {
          category: '全部',
          count: this.products.length,
        },
        ...types,
      ];
    },
  },
  methods: {
    async fetchProductList(page = 1) {
      this.$vLoading(true);
      try {
        const res = await apiGetCleintProducts(page);
        const { success, products, pagination } = res.data;
        if (success) {
          this.productsAll = products;
          this.products = products;
          this.pageInfo = pagination;
        } else {
          this.$vHttpsNotice(res, '產品顯示');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    async filterCategoryProduct() {
      try {
        const res = await apiGetProductsAll();
        const { success, products } = res.data;
        if (success) {
          this.productsAll = products;
          this.products = products.filter((product) => product.category === this.typeSelected);
          this.pageInfo = {
            current_page: 1,
            has_next: false,
            has_pre: false,
            total_pages: 1,
          };
        } else {
          this.$vHttpsNotice(res, '產品顯示');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    changePage(page) {
      this.fetchOrders(page);
    },
  },
  watch: {
    typeSelected(val) {
      if (val === '全部') {
        this.fetchProductList();
      } else {
        this.filterCategoryProduct();
      }
    },
  },
  created() {
    this.fetchProductList();
  },
};
</script>
