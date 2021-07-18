<template>
  <div class="min-vh-100">
    <Header />
    <router-view></router-view>
  </div>
  <Footer />
  <div class="position-fixed bottom-0 end-0 translate-middle shadow rounded-circle">
    <a href="https://lin.ee/Z3ZDysc" target="_blank">
      <img src="/images/line-social.png" />
    </a>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'clientSideMainLayout',
  components: {
    Header,
    Footer,
  },
};
</script>
