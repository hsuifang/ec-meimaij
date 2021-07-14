<template>
  <swiper
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    class="home-swiper"
  >
    <swiper-slide v-for="item in covers" :key="item.id">
      <div
        class="swiper-content"
        :style="{
          backgroundImage: `url(${item.url})`,
        }"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-1">
              <div class="slider-text">
                <h2 class="mb-3">{{ item.content.title }}</h2>
                <h5 class="mb-4" v-html="item.content.text"></h5>
                <router-link to="products" class="btn btn-primary text-white px-4"
                  >前往購物</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <!-- </a> -->
      </div>
    </swiper-slide>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Navigation } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      parallaxSwiperWidth: 0,
      covers: [
        {
          id: 1,
          url: '/images/cover1.jpg',
          content: {
            title: '限時購買免運',
            text: '常溫商品滿NT$ 699<br>冷凍商品滿NT$ 1799',
          },
        },
        {
          id: 2,
          url: '/images/cover2.jpg',
          content: {
            title: '生食產品新上市',
            text: '低溫高壓滅菌<br>寶貝健康從天然食物',
          },
        },
        {
          id: 3,
          url: '/images/cover3.jpg',
          content: {
            title: '零食產品新上市',
            text: '雞胸肉原肉乾<br>頂級豬肉原肉乾',
          },
        },
      ],
    };
  },
};
</script>
