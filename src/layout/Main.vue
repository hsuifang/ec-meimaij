<template>
  <div class="min-vh-100">
    <Header />
    <router-view></router-view>
  </div>
  <Footer />
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
  data() {
    return {};
  },
};
</script>
