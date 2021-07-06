<template>
  <div class="product">
    <div class="product__img text-center mb-3">
      <img
        src="http://themetechmount.net/opencart/frizty-layout4/image/cache/catalog/pro/11-270x329.jpg"
        alt="productImg"
      />
      <!-- trigger -->
      <div class="product__trigger">
        <i class="material-icons"> add </i>
        <i class="material-icons"> add </i>
        <!-- <a href="#" class="me-3 fs-2 text-primary"></a
        ><a href="#" class="me-3 fs-2"><i class="material-icons">shopping_bag</i></a> -->
      </div>
      <div class="product__badge d-flex justify-content-between w-100">
        <span class="badge" :class="`bg-${badge}`">new</span>
        <div class="text-primary" v-if="star">
          <i class="material-icons"> star </i>
          <i class="material-icons"> star </i>
          <i class="material-icons"> star </i>
          <i class="material-icons"> star_half </i>
          <i class="material-icons"> star_outline </i>
        </div>
      </div>
    </div>
    <div class="product__content text-center">
      <p class="mb-2">Funny Bunny JumpSuit</p>
      <p class="text-primary">
        <del class="text-muted">$1220</del>
        $1000
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopProduct',
  // temp
  props: {
    badge: {
      type: String,
      default: 'warning',
    },
    star: {
      type: Number,
      default: 0,
    },
  },
};
</script>
