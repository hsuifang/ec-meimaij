<template>
  <PageTitle>
    <template v-slot:breadcrumb>
      <h2 class="fs-6">鎂麥 / 我的最愛</h2>
    </template>
  </PageTitle>
  <div class="container">
    <div class="row mb-6" v-if="favoriteProducts.length > 0">
      <template v-for="item in favoriteProducts" :key="item?.id">
        <div class="col-6 col-md-3 mb-3" v-show="productView === 'grid'">
          <ProductsViewCard :type="productView" :content="item" />
        </div>
        <div class="col-12 mb-3" v-show="productView === 'list'">
          <ProductsViewCard :type="productView" :content="item" />
        </div>
      </template>
    </div>
    <div v-else>
      <p>目前沒有產品</p>
      <router-link to="/products" type="button" class="btn btn-outline-primary px-5">
        逛逛鎂麥產品
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductsViewCard from '@/components/ProductsViewCard.vue';
import PageTitle from '@/layout/PageTitle.vue';

export default {
  name: 'UserFavorite',
  components: {
    ProductsViewCard,
    PageTitle,
  },
  data() {
    return {
      productView: 'grid',
      favoriteProducts: [],
    };
  },
  methods: {
    getFavaorite() {
      const products = JSON.parse(localStorage.getItem('meimaijlove'));
      if (products) {
        this.favoriteProducts = products;
      }
    },
  },
  created() {
    this.getFavaorite();
  },
};

/**
 * product id / type /
 *
 *
 */
</script>
