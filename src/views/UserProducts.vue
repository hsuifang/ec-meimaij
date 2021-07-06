<template>
  <!-- banner -->
  <!-- 可能可用圖片 -->
  <section class="bg-light">
    <div class="container text-center py-5">
      <h2 class="fs-6">鎂麥產品 / 健康 ▪︎ 寵愛</h2>
    </div>
  </section>
  <div class="container py-6">
    <div class="row">
      <div class="col-lg-3">
        <!-- catagory -->
        <div class="p-4">
          <h3 class="fs-6 mb-4 fw-bold">產品類型</h3>
          <ul class="ps-1">
            <li class="mb-2"><a href="#" class="text-primary">全部</a></li>
            <li class="mb-2"><a href="#">生肉餐 | 3</a></li>
            <li class="mb-2"><a href="#">鮮食 | 2</a></li>
            <li class="mb-2"><a href="#">零食 | 3</a></li>
            <li class="mb-2"><a href="#">乾糧 | 2</a></li>
            <li class="mb-2"><a href="#">超值組合 | 2</a></li>
          </ul>
        </div>
        <!-- tag -->
        <div class="p-4">
          <h3 class="fs-6 mb-4 fw-bold">產品標籤</h3>
          <div>
            <button class="btn btn-light border rounded-pill me-2 px-3" type="button">健康</button>
            <button class="btn btn-light border rounded-pill me-2 px-3" type="button">
              小型犬
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <ul class="d-flex mb-4">
          <li class="p-1">
            <a href="#" data-view="product-grid" @click.prevent="productView = 'grid'"
              ><i
                class="bi bi-grid fs-4 fw-bold"
                :class="{ 'text-primary': productView === 'grid' }"
              ></i
            ></a>
          </li>
          <li class="p-1">
            <a href="#" data-view="product-list" @click.prevent="productView = 'list'"
              ><i
                class="bi bi-list fs-4 fw-bold"
                :class="{ 'text-primary': productView === 'list' }"
              ></i
            ></a>
          </li>
        </ul>
        <div class="row mb-6">
          <template v-for="item in products" :key="item.id">
            <div class="col-lg-4" v-show="productView === 'grid'">
              <ProductsViewCard :type="productView" :content="item" />
            </div>
            <div class="col-12" v-show="productView === 'list'">
              <ProductsViewCard :type="productView" :content="item" />
            </div>
          </template>
          <!-- 方法二 -->
          <!-- <div
            v-for="item in products"
            :key="item.id"
            :class="[productView === 'list' ? 'col-12' : 'col-lg-4']"
          >
            <ProductsViewCard :type="productView" :content="item" />
          </div> -->
        </div>
        <div class="d-flex justify-content-center">
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductsViewCard from '@/components/ProductsViewCard.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'product',
  components: {
    ProductsViewCard,
    Pagination,
  },
  data() {
    return {
      productView: 'grid',
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
  computed: {
    productViewColClass() {
      return this.productView === 'grid' ? 'col-lg-4' : 'col-12';
    },
  },
};
</script>
