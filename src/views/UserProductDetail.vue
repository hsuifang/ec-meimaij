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
        <div class="squre-img">
          <img
            src="http://themetechmount.net/opencart/frizty-layout5/image/cache/catalog/pro/14-800x975.jpg"
            alt=""
          />
        </div>
        <div class="product-swiper">
          <swiper :slidesPerView="3" :spaceBetween="20" class="mySwiper">
            <swiper-slide
              ><img
                src="https://images.pexels.com/photos/89095/pexels-photo-89095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
            /></swiper-slide>
            <swiper-slide>
              <img
                src="https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </swiper-slide>
            <swiper-slide
              ><img
                src="https://images.pexels.com/photos/89095/pexels-photo-89095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
            /></swiper-slide>
            <div>
              <a
                href="https://images.pexels.com/photos/277477/pexels-photo-277477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                data-fancybox="gallery"
              >
                <div
                  class="image"
                  style="
                    background-image: url(https://images.pexels.com/photos/277477/pexels-photo-277477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
                  "
                >
                  <div class="overlay">
                    <em class="mdi mdi-magnify-plus"></em>
                  </div>
                </div>
              </a>
            </div>
          </swiper>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="py-5 border-bottom">
          <h2 class="mb-3">Adipiscing Mollitelit Ipsum</h2>
          <div class="mb-4">
            <i
              class="bi bi-star-fill text-primary"
              :class="star"
              v-for="(star, idx) in 5"
              :key="`star${idx}`"
            ></i>
            | <a href="#">3個評價</a>
          </div>
          <h3 class="text-primary mb-4">
            150
            <del class="h4 text-info">$200</del>
          </h3>
          <ul class="text-info mb-4">
            <li>lroem</li>
            <li>lroem</li>
            <li>lroem</li>
            <li>lroem</li>
          </ul>
          <div class="d-flex">
            <div class="d-flex align-items-center">
              <label for="input-quantity" class="me-2">數量</label>
              <input
                type="text"
                name="quantity"
                value="1"
                min="1"
                id="input-quantity"
                class="form-control w-auto me-2"
              />
            </div>
            <button class="btn btn-primary me-2" type="button">加入購物車</button>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur dicta
          reprehenderit velit officiis perspiciatis rerum, suscipit tempore placeat tempora quam
          totam eligendi, cumque nostrum! Delectus nulla deserunt voluptate hic!
        </p>
        <p class="py-3">內容</p>
        <ul>
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
        </ul>
      </div>
      <div v-show="tabContnet === 'productValue'">商品評價</div>
    </div>
  </div>

  <div class="container py-8">
    <div class="section-title text-center mb-6">
      <h2 class="mb-2">你可能有興趣</h2>
    </div>
    <ul class="row list-unstyled pt-3">
      <li class="col-md-6 col-lg-3" v-for="product in products" :key="product.id">
        <ProductsViewCard type="grid" :content="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

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
  data() {
    return {
      tabContnet: 'description',
      products: [
        {
          category: '主食',
          content: '針對定期購買的家長，推出96折的優惠方案，可任選口味並分三次取貨。',
          description: '針對定期購買的家長，推出96折的優惠方案，可任選口味並分三次取貨。',
          id: '-L9tH8jxVb2Ka_DYPwng',
          imageUrl:
            'http://themetechmount.net/opencart/frizty-layout4/image/cache/catalog/pro/11-270x329.jpg',
          is_enabled: 1,
          num: 1,
          origin_price: 700,
          price: 600,
          title: 'AA',
          unit: '個',
          star: 1,
          status: {
            type: 'danger',
            text: 'HOT',
          },
        },
        {
          category: '主食',
          content: '針對定期購買的家長，推出96折的優惠方案，可任選口味並分三次取貨。',
          description: '針對定期購買的家長，推出96折的優惠方案，可任選口味並分三次取貨。',
          id: '-L9tH8jxVb2Ka_DYPwng',
          imageUrl: '/images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg',
          is_enabled: 1,
          num: 1,
          origin_price: 100,
          price: 100,
          title: 'BB',
          unit: '個',
          star: 5,
          status: {
            type: 'warning',
            text: 'NEW',
          },
        },
        {
          category: '主食',
          content: '針對定期購買的家長，推出96折的優惠方案，可任選口味並分三次取貨。',
          description: '針對定期購買的家長，推出96折的優惠方案，可任選口味並分三次取貨。',
          id: '-L9tH8jxVb2Ka_DYPwng',
          imageUrl:
            'http://themetechmount.net/opencart/frizty-layout4/image/cache/catalog/pro/11-270x329.jpg',
          is_enabled: 1,
          num: 1,
          origin_price: 699,
          price: 600,
          title: 'CC',
          unit: '個',
          star: 3.5,
          status: {
            type: 'danger',
            text: 'HOT',
          },
        },
        {
          category: '主食',
          content: '針對定期購買的家長，推出96折的優惠方案，可任選口味並分三次取貨。',
          description: '針對定期購買的家長，推出96折的優惠方案，可任選口味並分三次取貨。',
          id: '-L9tH8jxVb2Ka_DYPwng',
          imageUrl: '/images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg',
          is_enabled: 1,
          num: 1,
          origin_price: 699,
          price: 600,
          title: 'DD',
          unit: '個',
          star: 4,
          status: {
            type: 'warning',
            text: 'NEW',
          },
        },
      ],
    };
  },
  created() {
    console.log(this.$route.params.id);
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
