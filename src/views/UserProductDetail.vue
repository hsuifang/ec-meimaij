<template>
  <section class="bg-light mb-6">
    <div class="container text-center py-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">鎂麥產品 / 健康 ▪︎ 寵愛</a></li>
          <li class="breadcrumb-item active" aria-current="page">detail</li>
        </ol>
      </nav>
    </div>
  </section>

  <div class="container mb-8">
    <div class="row">
      <div class="col-lg-5">
        <div class="squre-img mb-3" style="background: rgba(246, 171, 74, 0.1)">
          <img :src="productDetail.imageUrl" alt="" />
        </div>
        <div class="product-swiper">
          <swiper :slidesPerView="3" :spaceBetween="20" class="mySwiper">
            <swiper-slide v-for="(img, idx) in productDetail.imagesUrl" :key="`${idx}thumbnailImg`"
              ><img :src="img" alt="thumbnailImg" style="background: rgba(246, 171, 74, 0.1)"
            /></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="py-5 border-bottom">
          <h2 class="mb-3">{{ productDetail.title }}</h2>
          <div class="mb-4">
            <i
              class="bi bi-star-fill text-primary"
              :class="star"
              v-for="(star, idx) in 5"
              :key="`star${idx}`"
            ></i>
            | <a href="#" @click.prevent>看評價</a>
          </div>
          <h3 class="text-primary mb-4">
            {{ productDetail.price }}
            <del class="h4 text-info">${{ productDetail.origin_price }}</del>
          </h3>
          <p class="text-info mb-2" v-html="productDetail.description"></p>
          <p class="text-info mb-4" v-html="productDetail.content"></p>
          <div class="d-flex">
            <div class="d-flex align-items-center">
              <label for="input-quantity" class="me-2">數量</label>
              <input
                type="text"
                name="quantity"
                min="1"
                id="input-quantity"
                class="form-control w-auto me-2"
                v-model.number="requestQty"
              />
            </div>
            <button class="btn btn-primary me-2" type="button" @click="addToCart">
              加入購物車
            </button>
            <button class="btn btn-outline-info" type="button"><i class="bi bi-heart"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="p-8 bg-light">
      <ul class="d-flex justify-content-center mb-5">
        <li
          class="h5 me-6 pb-3 fw-bold border-primary border-4"
          :class="{ 'border-bottom': tabContnet === 'description' }"
        >
          <a href="#" class="text-info" @click.prevent="tabContnet = 'description'">產品說明</a>
        </li>
        <li
          class="h5 pb-3 fw-bold border-primary border-4"
          :class="{ 'border-bottom': tabContnet === 'productValue' }"
        >
          <a href="#" class="text-info" @click.prevent="tabContnet = 'productValue'">商品評價</a>
        </li>
      </ul>
      <div v-show="tabContnet === 'description'">
        <p class="py-3 fw-bold">說明 ---</p>
        <p>{{ productDetail.description }}</p>
        <p class="py-3 fw-bold">內容 ---</p>
        <p>{{ productDetail.content }}</p>
        <p class="py-3 fw-bold">規格 ---</p>
        <p v-html="productDetail.spec"></p>
        <!-- <ul>
          <li>loremloremloremloremlorem</li>
          <li>loremloremloremloremlorem</li>
          <li>loremloremloremloremlorem</li>
          <li>loremloremloremloremlorem</li>
          <li>loremloremloremlore</li>
          <li>loremloremloremloremlorem</li>
          <li>loremloremloremloremlorem</li>
          <li>loremloremloremloremlorem</li>
          <li>loremloremloremloremlorem</li>
          <li>loremloremlorlorem</li>
          <li>loremloremloremloremloremloremloremloremloremlorem</li>
        </ul> -->
      </div>
      <div v-show="tabContnet === 'productValue'">商品評價</div>
    </div>
  </div>

  <div class="container py-8">
    <div class="section-title text-center mb-6">
      <h2 class="mb-2">你可能有興趣</h2>
    </div>
    <ul class="row list-unstyled pt-3">
      <li class="col-md-6 col-lg-3" v-for="product in relativeProducts" :key="product.id">
        <ProductsViewCard type="grid" :content="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { apiGetSpecficProduct, apiGetProductsAll, apiAddCart } from '@/api';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper/core';
import ProductsViewCard from '@/components/ProductsViewCard.vue';

SwiperCore.use([Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductsViewCard,
  },
  inject: ['emitter'],
  data() {
    return {
      productId: '',
      requestQty: null,
      tabContnet: 'description',
      productDetail: {},
      relativeProducts: [],
      loadingItem: {
        pos: '',
        id: '',
      },
    };
  },
  methods: {
    async showProductDetail(id) {
      this.$vLoading(true);
      const res = await apiGetSpecficProduct(id);
      const { success, product } = res.data;
      if (success) {
        this.productDetail = product;
      } else {
        this.$vHttpsNotice(res, '查看產品');
      }
      this.$vLoading(false);
    },
    async setFamousProducts() {
      const res = await apiGetProductsAll();
      const { products } = res.data;
      const productAllLength = products.length;
      const getMaxLength = 4;
      const productSet = [];
      for (let i = 0; this.relativeProducts.length < getMaxLength; i += 1) {
        const idx = Math.floor(Math.random() * productAllLength);
        if (!productSet.includes(idx)) {
          productSet.push(idx);
          this.relativeProducts.push(products[idx]);
        }
      }
    },
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
    async addToCart() {
      try {
        const res = await apiAddCart({ id: this.productId, qty: this.requestQty });
        this.$vHttpsNotice(res, '加入購物車');
        this.emitter.emit('updateCart');
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.toggleLoding({ pos: '', id: '' });
      }
    },
  },
  created() {
    this.productId = this.$route.params.id;
    this.showProductDetail(this.productId);
    this.setFamousProducts();
  },
};
</script>

<style lang="scss">
.squre-img {
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.product-swiper {
  .swiper-wrapper,
  .swiper-container {
    height: auto;
  }
  .swiper-slide {
    min-height: unset;
    img {
      max-height: 100px;
      object-fit: contain;
    }
  }
}
</style>
