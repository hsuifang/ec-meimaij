<template>
  <div class="sticky-top">
    <nav
      class="navbar navbar-expand-lg bg-white navbar-light border-bottom border-primary shadow-sm"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="navbarToggle = !navbarToggle"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- logo -->
        <div class="navbar-brand me-5 pointer" @click="$router.push('/')">
          <img src="/images/logo.svg" alt="logo" class="navbar-brand-item" height="40" />
        </div>
        <!-- laptop nav -->
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav navbar-nav-scroll">
            <li class="nav-item me-3">
              <router-link to="/" class="nav-link" aria-current="page">首頁</router-link>
            </li>
            <li v-dropdown class="nav-item me-3 dropdown">
              <router-link
                to="/products"
                class="nav-link dropdown-toggle"
                role="button"
                aria-expanded="false"
                >鎂麥產品</router-link
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="javascript:void(0)">鎂麥生肉餐</a></li>
                <li><a class="dropdown-item" href="javascript:void(0)">鎂麥鮮食</a></li>
                <li><a class="dropdown-item" href="javascript:void(0)">鎂麥零食</a></li>
              </ul>
            </li>
            <!-- v-dropdown -->
            <!-- <li v-dropdown class="nav-item me-3 dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="javascript:void(0)"
                role="button"
                aria-expanded="false"
              >
                常見問題
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><router-link class="dropdown-item" to="/cart">生食</router-link></li>
                <li><a class="dropdown-item" href="#">訂購與寄送</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">專欄</router-link>
            </li> -->
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <router-link to="/login"><i class="bi bi-person fs-4 me-3"></i></router-link>
          <a href="#">
            <i class="bi bi-bookmark-heart fs-5 me-3"></i>
          </a>
          <a href="#" @click.prevent="checkCart">
            <i class="bi-bag-fill fs-5"></i>
            <p
              class="
                position-absolute
                left-50
                bg-primary
                px-1
                py-0
                text-white
                rounded-circle
                navbar-cart
              "
            >
              {{ volume }}
            </p>
          </a>
        </div>
      </div>
      <!-- mobile nav -->
      <div class="mobile-collapse" :class="{ show: navbarToggle }">
        <ul class="navbar-nav navbar-nav-scroll p-4">
          <li class="nav-item me-3">
            <router-link to="/" class="nav-link" aria-current="page">首頁</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link to="/products" class="nav-link" role="button" aria-expanded="false"
              >鎂麥產品</router-link
            >
          </li>
          <!-- v-dropdown -->
          <!-- <li class="nav-item me-3">
            <a class="nav-link" href="javascript:void(0)" role="button" aria-expanded="false">
              常見問題
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">專欄</router-link>
          </li> -->
        </ul>
      </div>
    </nav>
    <CartOffcanvas ref="canvas" />
  </div>
</template>
<script>
import CartOffcanvas from '@/components/CartOffcanvas.vue';
import cartsMixin from '@/mixins/cartsMixin';

export default {
  components: {
    CartOffcanvas,
  },
  inject: ['emitter'],
  mixins: [cartsMixin],
  data() {
    return {
      navbarToggle: false,
      volume: '',
    };
  },
  methods: {
    checkCart() {
      this.$refs.canvas.open();
    },
  },
  mounted() {
    this.emitter.on('updateCart', ({ volume }) => {
      this.volume = volume;
    });
  },
  created() {
    this.fetchCartList();
    this.volume = this.totalVolume;
  },
};
</script>
