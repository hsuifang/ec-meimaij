<template>
  <!-- Carousel -->
  <ImagesCarousel class="pb-4" />
  <!-- Annoucement  -->

  <div class="container pb-lg-8">
    <div class="row">
      <div class="col-lg-4 border-end-custom mb-4 mb-lg-0">
        <div class="text-center p-3 p-lg-5">
          <img src="images/line.svg" alt="" width="50" class="mb-3" />
          <h4>24 X 7 Free Support</h4>
          <p>Passage Of Lorem Ipsum.</p>
        </div>
      </div>
      <div class="col-lg-4 border-end-custom mb-4 mb-lg-0">
        <div class="text-center p-3 p-lg-5">
          <img src="images/lorry.svg" alt="" width="50" class="mb-3" />
          <h4>Free Shipping</h4>
          <p>Passage of Lorem Ipsum.</p>
        </div>
      </div>
      <div class="col-lg-4 mb-4 mb-lg-0">
        <div class="text-center p-3 p-lg-5">
          <img src="images/exchange.svg" alt="" width="50" class="mb-3" />
          <h4>Money Back Guarantee</h4>
          <p>Passage of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Ad -->

  <div class="container pb-4 pb-lg-8">
    <div class="row">
      <!-- left side -->
      <div class="col-lg-6">
        <div class="row g-0 mb-5">
          <div class="col-6">
            <a href="#" class="img"
              ><img height="300" src="images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg" alt="dog"
            /></a>
          </div>
          <div class="col-6 d-flex flex-column justify-content-center align-items-start ps-5 pe-3">
            <span class="badge bg-danger rounded-pill mb-3">新商品</span>
            <h3 class="mb-3">Pet Boarding & Daycare</h3>
            <p class="mb-3 text-info">Lorem ipsum dolor sit dolor sit amet, consectetur anas</p>
            <button type="button" class="btn btn-outline-primary">購鎂麥</button>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-6 d-flex flex-column justify-content-center align-items-start p-3">
            <span class="badge bg-info rounded-pill mb-3">最高7折折扣</span>
            <h3 class="mb-3">Pet Boarding & Daycare</h3>
            <p class="mb-3 text-info">Lorem ipsum dolor sit dolor sit amet, consectetur anas</p>
            <button type="button" class="btn btn-primary text-white">購鎂麥</button>
          </div>
          <div class="col-6">
            <a href="#" class="img text-end"
              ><img height="300" src="images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg" alt="dog"
            /></a>
          </div>
        </div>
      </div>
      <!-- right side -->
      <div class="col-lg-6">
        <a href="#" class="coverImg text-end"
          ><img src="images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg" alt="dog"
        /></a>
      </div>
    </div>
  </div>
  <!-- 熱銷商品  -->
  <div class="container pb-4 pb-lg-8">
    <div class="section-title text-center mb-8">
      <h2 class="mb-2">熱銷商品</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
      <div class="section-title text-center mb-8">
        <h2 class="mb-2">購買者心得</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="row pt-3">
        <div class="col-lg-4">
          <div class="pin shadow-sm p-5 bg-white">
            <p class="mb-2">lorem*3lorem*3lorem*3lorem*3</p>
            <div class="d-flex align-items-center">
              <img
                src="http://themetechmount.net/opencart/frizty-layout4/image/cache/catalog/pro/11-270x329.jpg"
                alt="avator"
                width="50"
                height="50"
                class="rounded-circle overflow-hidden me-3 border border-primary border-2"
              />
              <div>
                <h6>飼養黃金獵犬高先生</h6>
                <p class="text-info">我家挑食的小寶貝超級愛</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pin shadow-sm p-5 bg-white">
            <p class="mb-2">lorem*3lorem*3lorem*3lorem*3</p>
            <div class="d-flex align-items-center">
              <img
                src="http://themetechmount.net/opencart/frizty-layout4/image/cache/catalog/pro/11-270x329.jpg"
                alt="avator"
                width="50"
                height="50"
                class="rounded-circle overflow-hidden me-3 border border-primary border-2"
              />
              <div>
                <h6>飼養黃金獵犬高先生</h6>
                <p class="text-info">我家挑食的小寶貝超級愛</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pin shadow-sm p-5 bg-white">
            <p class="mb-2">lorem*3lorem*3lorem*3lorem*3</p>
            <div class="d-flex align-items-center">
              <img
                src="http://themetechmount.net/opencart/frizty-layout4/image/cache/catalog/pro/11-270x329.jpg"
                alt="avator"
                width="50"
                height="50"
                class="rounded-circle overflow-hidden me-3 border border-primary border-2"
              />
              <div>
                <h6>飼養黃金獵犬高先生</h6>
                <p class="text-info">我家挑食的小寶貝超級愛</p>
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

export default {
  components: {
    ImagesCarousel,
    ProductsViewCard,
  },
  data() {
    return {
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
};
</script>
