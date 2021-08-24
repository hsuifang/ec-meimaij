<template>
  <!-- Carousel -->
  <ImagesCarousel />
  <!-- Annoucement  -->
  <div class="container py-4 pb-lg-8">
    <ul class="row">
      <li class="col-lg-4 border-end-custom mb-4 mb-lg-0">
        <div class="text-center p-3 p-lg-5">
          <img src="images/line-color.svg" alt="service-line" width="50" class="mb-3" />
          <h4 class="mb-2">LINE 服務</h4>
          <p>10:00 - 21:00 LINE專人線上諮詢</p>
        </div>
      </li>
      <li class="col-lg-4 border-end-custom mb-4 mb-lg-0">
        <div class="text-center p-3 p-lg-5">
          <img src="images/truck.svg" alt="service-freeDeliverfee" width="50" class="mb-3" />
          <h4 class="mb-2">滿額免運</h4>
          <p>常溫商品滿NT$ 699免運</p>
          <p>冷凍商品滿NT$ 1799免運</p>
        </div>
      </li>
      <li class="col-lg-4 mb-4 mb-lg-0">
        <div class="text-center p-3 p-lg-5">
          <img src="images/box-color.svg" alt="service-fase" width="50" class="mb-3" />
          <h4 class="mb-2">快速配送</h4>
          <p>工作日12:00前訂單，當日出貨</p>
          <p>台灣本島最快隔日送達</p>
        </div>
      </li>
    </ul>
  </div>
  <!-- Ad -->
  <div class="container pb-4 pb-lg-8">
    <div class="row">
      <!-- left side -->
      <div class="col-lg-6">
        <div class="row g-0 mb-5">
          <div class="col-md-6">
            <router-link to="products" class="home-img">
              <img
                height="300"
                class="obj-fit-contain"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1628179002992.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Di%2BtdZjeglAi5FmUqALCRjE6YppsKyowDYLc2JtF1ZUDqnx9NPtmbknASdZVk7s0gdCb%2B6xBo7ZmMTJ2I2VVmwc%2Fk48cUk5JMe%2ByjfE2NOJtK7iwPyrp5l4e8RDJC485ZfduibzDJ%2BmgFiqBGKEdzzWQ2%2BY5AukMqi9cuuXRUQgQbR6eZfe3q39LDTlBUduWHsCTOc2VBiCy8DUXpC47D7YO9K0Bb%2FXR5dVSYvPBDkKC5%2BYzJNxyP6Tj5uvAnTazltJM9lZSfdEXUiUR3IltdyMW0%2Fb0nrpPe6hyFjGe2QX1S1nsIuUDfb67GWWeenEPz%2F8Swz9rxNo8diDEuS%2BJTg%3D%3D"
                alt="favorite-first"
              />
            </router-link>
          </div>
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-start p-3">
            <span class="badge bg-danger rounded-pill mb-3 py-2">新商品</span>
            <h3 class="mb-3">雞肉/牛肉餐盒</h3>
            <p class="mb-3 text-info">
              特選上等牛、雞的新鮮材料，並保有精華烹調而成，風味極佳，讓寵物吃得營養均衡！
            </p>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="$router.push('/products')"
            >
              購鎂麥
            </button>
          </div>
        </div>
        <div class="row g-0">
          <div
            class="
              col-md-6
              order-2 order-md-1
              d-flex
              flex-column
              justify-content-center
              align-items-start
              p-3
            "
          >
            <span class="badge bg-info rounded-pill mb-3 py-2">最高7折折扣</span>
            <h3 class="mb-3">雞肉大麥乾糧</h3>
            <p class="mb-3 text-info">強化肌肉所需的優質蛋白質/天然纖維助於腸道消化健康</p>
            <button
              type="button"
              class="btn btn-primary text-white"
              @click="$router.push('/products')"
            >
              購鎂麥
            </button>
          </div>
          <div class="col-md-6 order-1 order-md-2">
            <router-link to="products" class="home-img">
              <img
                height="300"
                class="obj-fit-contain"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1628178999582.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=q90hXyluSlw%2FkhhHW0I4mbej39wDF2wH9dOL6bt5YJ8Evm64cCpRkiWyJkYbJHMucCXJGkYcm4OC28dVAi1Ga6iJD5xAYbN77I8sO0uxqIk82kWIPiPdiygKUj%2BoPsfwBL%2BAy3fdKmzYhN7g0qWnxnBGiSuX0vOiBEcfaEdOKINNZZJ5rGQI6V78G58EupKKTQ4VXAqnNxIpASsoYE9TmBJzd93oFR%2FQJJyaY8Y5GCeBurakP2kT3m%2FDiJB%2BPl%2FKDOF4W3sVXgqqm2wg0N%2B19xDUO1AfSlnXnwY%2BmiJnlbMjTZ2ddaCxcXhZmDgY2DiGzgHb%2BjGzG62ttT1j9p7jPw%3D%3D"
                alt="favorite-second"
              />
            </router-link>
          </div>
        </div>
      </div>
      <!-- right side -->
      <div class="col-lg-6">
        <router-link to="products" class="home-coverImg">
          <img
            height="300"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/hsuifangfangfang/1628178875634.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HnnSrmmC8A2InAdKJzuWE4ogBBJ08UOkuXa94Wb9i%2FbZPLPvJ19ZIYHh5cT0b66RpA8uFXa2l6IWbSXGNcCI%2FaUCSKHHYqB0hZtlagEJ5SuMEds67tiv2Ib4vQHc%2BYHf%2FhBoip6JwTXfCn%2BhGSsg3dYKiRsyfMuQJOsynNBnxKgobrqpslMkku9IhTWk4iYmZPqz%2Bb8duW6pH2ST8QE0p6Y0houYgOhDq4DyFKqKfIFcXhJRGv2w9K6K%2Bpy%2F6OLk3Qb8YPMpycCOzeJoSuNhjCVB17v2zbXVk4B9dTnOw8nklYOtT%2BcmavdhvqaGSROaAN%2F5OwrSCfpK%2FXoLfr15Sw%3D%3D"
            alt="favorite-ad"
          />
        </router-link>
      </div>
    </div>
  </div>
  <!-- 熱銷商品  -->
  <div class="container pb-4 pb-lg-8">
    <div class="section-title text-center mb-8">
      <h2 class="mb-2">熱銷商品</h2>
      <p>看看大家的寵物寶貝都愛吃些什麼 ?</p>
    </div>

    <ul class="row list-unstyled pt-3">
      <li class="col-md-6 col-lg-3" v-for="product in products" :key="product.id">
        <ProductsViewCard type="grid" :content="product" />
      </li>
    </ul>
  </div>
  <!-- 用戶說 -->
  <section class="bg-light">
    <div class="container py-4 py-lg-8">
      <div class="section-title text-center mb-5 mb-lg-8">
        <h2 class="mb-2">購買者心得</h2>
      </div>
      <div class="row pt-3">
        <div class="col-lg-4 mb-5 mb-lg-0" v-for="item in clientFeedBack" :key="item.id">
          <div class="pin shadow-sm p-5 bg-white">
            <p class="mb-4 fw-bold text-secondary">購買{{ item.product }} --</p>
            <div class="d-flex align-items-center">
              <img
                :src="item.avator"
                alt="avator"
                width="50"
                height="50"
                class="overflow-hidden me-3 border border-secondary border-2"
              />
              <div>
                <h6 class="mb-1">飼養{{ item.pet }}{{ item.name }}</h6>
                <p class="text-info">{{ item.feedback }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImagesCarousel from '@/components/ImagesCarousel.vue';
import ProductsViewCard from '@/components/ProductsViewCard.vue';
import { apiGetProductsAll } from '@/api';

export default {
  components: {
    ImagesCarousel,
    ProductsViewCard,
  },
  data() {
    return {
      products: [],
      randomProducts: [],
      clientFeedBack: [
        {
          id: 1,
          avator: 'images/logo.svg',
          name: '陳先生',
          pet: '黃金獵犬',
          product: '雞肉乾糧',
          feedback: '我家挑食的小寶貝超級愛',
        },
        {
          id: 2,
          avator: 'images/logo.svg',
          name: '許花',
          pet: '博美',
          product: '潔牙骨',
          feedback: '一邊玩樂一邊清潔，嘴巴香香',
        },
        {
          id: 3,
          avator: 'images/logo.svg',
          name: '台北yoyo',
          pet: '米克斯',
          product: '生食',
          feedback: '看他吃得很開心，我就很開心',
        },
      ],
    };
  },
  methods: {
    async setFamousProducts() {
      try {
        const res = await apiGetProductsAll();
        const { products, success } = res.data;
        if (success) {
          const productAllLength = products.length;
          const getMaxLength = 4;
          const productSet = [];
          for (let i = 0; this.products.length < getMaxLength; i += 1) {
            const idx = Math.floor(Math.random() * productAllLength);
            if (!productSet.includes(idx)) {
              productSet.push(idx);
              this.products.push(products[idx]);
            }
          }
        }
      } catch (error) {
        this.$vErrorNotice();
      }
    },
  },
  created() {
    this.setFamousProducts();
  },
};
</script>
