<template>
  <Header />
  <router-view></router-view>
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
