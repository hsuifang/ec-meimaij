<template>
  <swiper
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    class="swiper-container"
  >
    <swiper-slide v-for="img in images" :key="img.id">
      <div
        class="swiper-content"
        :style="{
          backgroundImage: `url(${img.url})`,
        }"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-1">
              <div class="slider-text">
                <h3>Your Pets Deserve The Best</h3>
                <h1>Shop All Pet Products</h1>
                <p class="mb-4">
                  Lorem ipsum dolor sit amet,adipiscing elits eiusmod tempor lorem ipsum xercitat
                  the quis nostrud exercitation ullamco
                </p>
                <a href="#" class="btn btn-primary text-white" tabindex="0">前往購物</a>
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
      images: [
        { id: 1, url: '/images/alvan-nee-T-0EW-SEbsE-unsplash.jpg' },
        { id: 2, url: '/images/michael-oxendine-t7wwffh6x8E-unsplash.jpg' },
        { id: 3, url: '/images/jamie-street-0nk6XZp7_1E-unsplash.jpg' },
      ],
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>
<style lang="scss">
.swiper-container {
  width: 100%;
  height: 60vh;
}
.swiper-content {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  display: flex;
  align-items: center;
}
.swiper-slide {
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-text {
  padding: 1.25rem;
  color: #ccc;
  background: rgba(#333, 0.3);
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
