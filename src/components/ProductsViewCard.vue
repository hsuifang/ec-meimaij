<template>
  <div class="product mb-5" :class="{ 'd-flex': type == 'list' }">
    <router-link :to="`/product/${product.id}`" class="d-block" :style="imgStyle">
      <div class="product__img">
        <img :src="product.imageUrl" alt="productImg" />
      </div>
      <div class="product__trigger" v-show="type == 'grid'">
        <a href="#" class="me-4" @click.prevent="addToCart({ productId: product.id, qty: 1 })"
          ><i class="bi bi-bag-plus-fill fs-2"></i></a
        ><a href="#" @click.prevent="$router.push(`/product/${product.id}`)"
          ><i class="bi bi-info-square fs-2"></i
        ></a>
      </div>
      <div class="product__badge">
        <div class="ms-auto">
          <i
            class="bi bi-star-fill text-primary"
            :class="star"
            v-for="(star, idx) in starClass"
            :key="`star${idx}`"
          ></i>
        </div>
      </div>
    </router-link>
    <div class="product__content" v-show="type == 'grid'">
      <h4 class="fs-7 mb-2">{{ product.title }}</h4>
      <div class="d-flex justify-content-between">
        <p class="text-primary">
          {{ $filters.currency(product.price) }}
          <del class="text-muted fs-9" v-if="product.price < product.origin_price">{{
            $filters.currency(product.origin_price)
          }}</del>
        </p>
        <a href="#" @click.prevent="toggleFavorite(product)">
          <i class="bi text-danger" :class="[isFavorite ? 'bi-heart-fill' : 'bi-heart']"></i>
        </a>
      </div>
    </div>
    <div class="product__listContent" :style="{ width: '70%' }" v-show="type == 'list'">
      <h4 class="mb-3">{{ product.title }}</h4>
      <p class="text-primary mb-3">
        <del class="text-muted fs-8" v-if="product.price < product.origin_price">{{
          $filters.currency(product.origin_price)
        }}</del>
        {{ $filters.currency(product.price) }}
      </p>
      <p class="mb-3">
        {{ product.content }}
      </p>
      <div>
        <button
          class="btn btn-primary me-3 text-white"
          type="button"
          @click.self="addToCart({ productId: product.id, qty: 1 })"
        >
          加入購物車
        </button>
        <button
          class="btn btn-outline-info me-3"
          type="button"
          @click.self="$router.push(`/product/${product.id}`)"
        >
          <i class="bi bi-info"></i>
        </button>
        <button class="btn btn-outline-info" type="button" @click="toggleFavorite(product)">
          <i class="bi text-danger" :class="[isFavorite ? 'bi-heart-fill' : 'bi-heart']"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import cartsMixin from '@/mixins/cartsMixin';
import favoriteMixin from '@/mixins/favoriteMixin';

export default {
  name: 'ShopProduct',
  props: {
    type: {
      type: String,
      default: 'grid',
    },
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  mixins: [cartsMixin, favoriteMixin],
  data() {
    return {
      product: {},
    };
  },
  computed: {
    imgStyle() {
      return this.type === 'list' ? { width: '30%' } : { marginBottom: '1rem' };
    },
    starClass() {
      const starArr = ['bi-star', 'bi-star', 'bi-star', 'bi-star', 'bi-star'];
      const star = this.product?.rate || 0;
      starArr.forEach((item, idx) => {
        if (star >= idx + 1) {
          starArr[idx] = 'bi-star-fill';
        } else if (Math.floor(star) === idx + 1) {
          starArr[idx] = 'bi-star-half';
        } else {
          starArr[idx] = item;
        }
      });
      return starArr;
    },
  },
  watch: {
    content(val) {
      this.product = { ...val };
    },
  },
  created() {
    this.product = { ...this.content };
    this.initFavorite(this.product.id);
  },
};
</script>
