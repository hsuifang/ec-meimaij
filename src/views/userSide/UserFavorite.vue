<template>
  <div v-if="favoriteProducts.length > 0">
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
    <ul class="row mb-6">
      <template v-for="item in favoriteProducts" :key="item?.id">
        <li class="col-6 col-md-4 mb-3" v-show="productView === 'grid'">
          <ProductsViewCard :type="productView" :content="item" />
        </li>
        <li class="col-12 mb-3" v-show="productView === 'list'">
          <ProductsViewCard :type="productView" :content="item" />
        </li>
      </template>
    </ul>
  </div>
  <div v-else class="text-center">
    <h4 class="text-info mb-4">目前沒有收藏產品</h4>
    <router-link to="/products" type="button" class="btn btn-outline-primary px-5">
      逛逛鎂麥產品
    </router-link>
  </div>
</template>

<script>
import ProductsViewCard from '@/components/ProductsViewCard.vue';

export default {
  name: 'UserFavorite',
  components: {
    ProductsViewCard,
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
</script>
