<template>
  <div class="product mb-5" :class="{ 'd-flex': type == 'list' }">
    <!-- mb-3 -->
    <div :style="imgStyle">
      <div class="product__img">
        <img :src="product.imageUrl" alt="productImg" />
      </div>
      <div class="product__trigger" v-show="type == 'grid'">
        <a href="#" class="me-4" @click.prevent="addCart"
          ><i class="bi bi-bag-plus-fill fs-2"></i></a
        ><a href="#" @click.prevent="viewDetail(product.id)"
          ><i class="bi bi-info-square fs-2"></i
        ></a>
      </div>
      <div class="product__badge">
        <span class="badge" :class="`bg-${product.status?.type}`">{{ product.status?.text }}</span>
        <div>
          <i
            class="bi bi-star-fill text-primary"
            :class="star"
            v-for="(star, idx) in starClass"
            :key="`star${idx}`"
          ></i>
        </div>
      </div>
    </div>
    <div class="product__content" v-show="type == 'grid'">
      <p class="mb-2 text-center">{{ product.title }}</p>
      <p class="text-primary text-center">
        ${{ product.price }}
        <del class="text-muted" v-if="product.price < product.origin_price"
          >${{ product.origin_price }}</del
        >
      </p>
    </div>
    <div class="product__listContent" :style="{ width: '70%' }" v-show="type == 'list'">
      <h4 class="mb-3">
        <a href="#">{{ product.title }}</a>
      </h4>
      <p class="text-primary mb-3">
        <del class="text-muted" v-if="product.price < product.origin_price"
          >${{ product.origin_price }}</del
        >
        ${{ product.price }}
      </p>
      <p class="mb-3">
        {{ product.content }}
      </p>
      <div>
        <button class="btn btn-primary me-3" type="button">加入購物車</button>
        <button class="btn btn-outline-info me-3" type="button"><i class="bi bi-plus"></i></button>
        <button class="btn btn-outline-info" type="button"><i class="bi bi-heart"></i></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopProduct',
  // temp
  props: {
    type: {
      type: String,
      default: 'grid',
    },
    content: {
      type: Object,
      default: () => ({}),
    },
    star: {
      type: Number,
      default: 0,
    },
  },
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
      const star = this.product?.star || 0;
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
  methods: {
    addCart() {},
    viewDetail(id) {
      this.$router.push(`/product/${id}`);
    },
  },

  watch: {
    content(val) {
      this.product = { ...val };
    },
  },
  created() {
    this.product = { ...this.content };
  },
};
</script>
