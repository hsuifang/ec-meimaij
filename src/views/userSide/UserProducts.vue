<template>
  <PageTitle>
    <template v-slot:breadcrumb>
      <h2 class="fs-6">鎂麥產品 / 健康 ▪︎ 寵愛</h2>
    </template>
  </PageTitle>
  <div class="container pt-0 pb-4 py-lg-5">
    <div class="row gx-lg-5">
      <div class="col-lg-3">
        <h3 class="fs-7 d-none d-lg-block p-lg-3 bg-light border-start border-primary border-5">
          產品類型
        </h3>
        <ul class="ps-1 productType-select p-lg-4">
          <li
            class="mb-3"
            v-for="type in typesList"
            :key="type.category"
            @click.prevent="typeSelected = type.category"
          >
            <a
              href="#"
              class="w-100 d-block"
              :class="{ 'text-primary': typeSelected === type.category }"
              @click.prevent
              >{{ type.category }} <span class="d-none d-lg-inline">/ {{ type.count }}</span></a
            >
          </li>
        </ul>
      </div>
      <div class="col-lg-9" v-if="products.length > 0">
        <ul class="d-flex px-3 py-2 mb-4 bg-light" data-discript="filterViewType">
          <li class="me-3">
            <a href="#" data-view="product-grid" @click.prevent="productView = 'grid'"
              ><i
                class="bi bi-grid fs-4 fw-bold"
                :class="{ 'text-primary': productView === 'grid' }"
              ></i
            ></a>
          </li>
          <li>
            <a href="#" data-view="product-list" @click.prevent="productView = 'list'"
              ><i
                class="bi bi-list fs-4 fw-bold"
                :class="{ 'text-primary': productView === 'list' }"
              ></i
            ></a>
          </li>
        </ul>
        <div class="row mb-6">
          <template v-for="item in products" :key="item?.id">
            <div class="col-md-6 col-lg-4 mb-3" v-show="productView === 'grid'">
              <ProductsViewCard :type="productView" :content="item" />
            </div>
            <div class="col-12 mb-3" v-show="productView === 'list'">
              <ProductsViewCard :type="productView" :content="item" />
            </div>
          </template>
        </div>
        <div class="d-flex justify-content-center" v-if="this.typeSelected === '全部'">
          <Pagination :pageInfo="pageInfo" @changePage="changePage" />
        </div>
      </div>
      <div class="col-lg-9" v-else>
        <p>目前沒有產品</p>
      </div>
    </div>
  </div>
</template>

<script>
import { apiGetProductsAll } from '@/api';
import ProductsViewCard from '@/components/ProductsViewCard.vue';
import Pagination from '@/components/Pagination.vue';
import PageTitle from '@/layout/PageTitle.vue';

export default {
  name: 'product',
  components: {
    ProductsViewCard,
    Pagination,
    PageTitle,
  },
  data() {
    return {
      productView: 'grid',
      productsAll: [],
      pageInfo: {
        current: 1,
        total: 1,
        size: 10,
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
          count: this.productsAll.length,
        },
        ...types,
      ];
    },
    products() {
      const data = [];
      const content = this.productsAll.filter((product) => {
        if (this.typeSelected !== '全部') {
          return product.category === this.typeSelected;
        }
        return true;
      });
      const { current, total, size } = this.pageInfo;
      const maxNumber = total === current ? content.length : current * size;
      const fromNumber = (current - 1) * 10;
      for (let i = fromNumber; i < maxNumber; i += 1) {
        data.push(content[i]);
      }
      return data;
    },
    routeTypeSelected() {
      return this.$route.params.typeSelected;
    },
  },
  methods: {
    async fetchAllProduct() {
      this.$vLoading(true);
      try {
        const res = await apiGetProductsAll();
        const { success, products } = res.data;
        if (success) {
          this.productsAll = products;
          this.pageInfo.current_page = 1;
          this.pageInfo.total_pages = Math.ceil(this.productsAll.length / this.pageInfo.size);
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
      this.pageInfo.current = page;
    },
  },
  watch: {
    routeTypeSelected(val) {
      this.typeSelected = val;
      this.fetchAllProduct();
    },
    typeSelected() {
      this.fetchAllProduct();
    },
  },
  created() {
    this.fetchAllProduct();
  },
};
</script>
