<template>
  <div class="sticky-top">
    <div class="bg-primary py-1">
      <p class="container text-dark">
        一起加油！即日起至8/21優惠碼限時輸入：<span class="fw-bold text-light">e7e7x80</span>
        全館8折優惠
      </p>
    </div>
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
        <!-- LOGO  -->
        <div class="navbar-brand me-0 me-lg-5 pointer" @click="$router.push('/')">
          <img src="images/logo.svg" alt="web-logo" class="navbar-brand-item" height="40" />
        </div>
        <!-- LAPTOP NAV START -->
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
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="productRouter('生食餐')"
                    >鎂麥生食餐</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="productRouter('鮮食')"
                    >鎂麥鮮食</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#" @click.prevent="productRouter('零食')"
                    >鎂麥零食</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- laptop NAV END -->
        <div class="d-flex align-items-center">
          <a href="#" @click.prevent="$router.push('/member')">
            <i class="bi bi-person fs-4 me-3"></i>
          </a>
          <a href="#" @click.prevent="$router.push('/member/favorite')">
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
      <!-- MOBILE NAV START -->
      <div class="mobile-collapse d-lg-none" :class="{ show: navbarToggle }">
        <ul class="navbar-nav navbar-nav-scroll p-4">
          <li class="nav-item me-3">
            <router-link to="/" class="nav-link" aria-current="page">首頁</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link to="/products" class="nav-link" role="button" aria-expanded="false"
              >鎂麥產品</router-link
            >
          </li>
        </ul>
      </div>
      <!-- MOBILE NAV END -->
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
    productRouter(typeSelected) {
      this.$router.push({
        name: 'userProducts',
        params: { typeSelected },
      });
    },
  },
  mounted() {
    this.emitter.on('updateCart', ({ volume = 0 }) => {
      this.volume = volume;
    });
    this.fetchCartList();
    this.volume = this.totalVolume;
  },
};
</script>
