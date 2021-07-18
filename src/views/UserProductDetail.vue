<template>
  <PageTitle>
    <template v-slot:breadcrumb>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">鎂麥產品 / 健康 ▪︎ 寵愛</li>
        <li class="breadcrumb-item active" aria-current="page">detail</li>
      </ol>
    </template>
  </PageTitle>
  <div class="container pt-0 pb-4 py-lg-6">
    <div class="row mb-4 mb-lg-8">
      <div class="col-lg-5">
        <div class="w-100" @click="showCoverImage(mainImage.id)">
          <div class="squre-img mb-3 text-primary-10">
            <img :src="mainImage.src" alt="mainImage" />
          </div>
          <div class="position-absolute bottom-0 end-0">
            <i class="bi bi-search fs-2"></i>
          </div>
        </div>
        <div class="d-flex">
          <img
            v-for="(img, idx) in imgs"
            :key="`${idx}thumbnailImg`"
            :src="img.src"
            alt="thumbnailImg"
            width="80"
            height="80"
            class="me-2 obj-fit-contain text-primary-10"
            @click="mainImageIdx = img.id"
          />
        </div>
      </div>
      <div class="col-lg-7">
        <div class="py-5 border-bottom">
          <h2 class="mb-3">{{ productDetail.title }}</h2>
          <div class="mb-4">
            <i
              class="bi bi-star-fill text-primary"
              :class="star"
              v-for="(star, idx) in starClass"
              :key="`star${idx}`"
            ></i>
          </div>
          <h3 class="text-primary mb-3 mb-lg-4">
            {{ $filters.currency(productDetail.price) }}
            <del class="fs-5 text-info">{{ $filters.currency(productDetail.origin_price) }}</del>
          </h3>
          <p class="text-info mb-2" v-html="productDetail.description"></p>
          <p class="text-info mb-4" v-html="productDetail.content"></p>
          <div class="d-lg-flex">
            <div class="d-flex align-items-center mb-3 mb-lg-0">
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
            <button
              class="btn btn-outline-info"
              type="button"
              @click="toggleFavorite(productDetail)"
            >
              <i class="bi" :class="[isFavorite ? 'bi-heart-fill' : 'bi-heart']"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-3 p-4 pt-lg-6 p-lg-8 bg-light">
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
      </div>
      <div v-show="tabContnet === 'productValue'">
        <ul>
          <li class="py-4">
            <div class="d-flex justify-content-between mb-2">
              <p class="fw-bold">台中陳小姐</p>
              <p class="text-info">2021/03/06</p>
            </div>
            <p class="mb-1">過往沒有使用過該產品，想說試試看，沒想到我家的臭寶貝超喜歡！</p>
            <div>
              <i
                class="bi bi-star-fill text-primary"
                :class="star"
                v-for="(star, idx) in 5"
                :key="`star${idx}`"
              ></i>
            </div>
          </li>
          <li class="py-4">
            <div class="d-flex justify-content-between mb-2">
              <p class="fw-bold">台中王小姐</p>
              <p class="text-info">2021/05/06</p>
            </div>
            <p class="mb-1">推薦給想購買的了，我家寶貝是見證者 :)</p>
            <div>
              <i
                class="bi bi-star-fill text-primary"
                :class="star"
                v-for="(star, idx) in 5"
                :key="`star${idx}`"
              ></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container p-4 p-lg-8">
    <div class="section-title text-center mb-6">
      <h2 class="mb-2">你可能有興趣</h2>
    </div>
    <ul class="row list-unstyled pt-3">
      <li class="col-md-6 col-lg-3" v-for="product in relativeProducts" :key="product.id">
        <ProductsViewCard type="grid" :content="product" />
      </li>
    </ul>
  </div>

  <div class="p-3">
    <VueEasyLightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="imageIdx"
      @hide="handleHide"
    >
      <template v-slot:prev-btn="{ prev }">
        <button class="btn btn-light" @click="prev" style="top: 50vh">&lt;</button>
      </template>

      <template v-slot:next-btn="{ next }">
        <button
          class="btn btn-light text-end position-absolute end-0"
          @click="next"
          style="top: 50vh"
        >
          &gt;
        </button>
      </template>
    </VueEasyLightbox>
  </div>
</template>

<script>
import { apiGetSpecficProduct, apiGetProductsAll } from '@/api';
import cartsMixin from '@/mixins/cartsMixin';
import favoriteMixin from '@/mixins/favoriteMixin';
import VueEasyLightbox from 'vue-easy-lightbox';
import ProductsViewCard from '@/components/ProductsViewCard.vue';
import PageTitle from '@/layout/PageTitle.vue';

export default {
  components: {
    ProductsViewCard,
    VueEasyLightbox,
    PageTitle,
  },
  inject: ['emitter'],
  mixins: [cartsMixin, favoriteMixin],
  data() {
    return {
      visible: false,
      imageIdx: 0,
      mainImageIdx: 0,
      productId: '',
      requestQty: 1,
      tabContnet: 'description',
      productDetail: {},
      relativeProducts: [],
      loadingItem: {
        pos: '',
        id: '',
      },
    };
  },
  computed: {
    imgs() {
      const { imageUrl, imagesUrl = [] } = this.productDetail;
      const tempImages = imagesUrl.map((img, idx) => ({ id: idx + 1, src: img }));
      return [{ id: 0, src: imageUrl }, ...tempImages];
    },
    mainImage() {
      return this.imgs.find((img) => img.id === this.mainImageIdx) || '';
    },
    starClass() {
      const starArr = ['bi-star', 'bi-star', 'bi-star', 'bi-star', 'bi-star'];
      const star = this.productDetail?.rate || 0;
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
    async addToCart() {
      if (this.requestQty < 1) {
        this.emitter.emit('notice-message', {
          style: 'danger',
          title: '數量需大於1',
        });
        this.requestQty = 1;
      } else {
        this.addToCart({ productId: this.productId, qty: this.requestQty });
      }
    },
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
    init() {
      this.productId = this.$route.params.id;
      if (this.productId) {
        this.showProductDetail(this.productId);
        this.setFamousProducts();
      } else {
        this.$router.push('/products');
      }
    },
    showCoverImage(idx) {
      this.imageIdx = idx;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  watch: {
    '$route.params.id'() {
      this.init();
    },
  },
  mounted() {
    this.initFavorite(this.productId);
  },
  created() {
    this.init();
  },
};
// @todo: 看評價
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
.vel-toolbar,
.vel-toolbar .toolbar-btn {
  background: #fff;
}
</style>
