<template>
  <router-view />
  <Loading
    v-model:active="isLoading"
    :is-full-page="fullPage"
    loader="bars"
    color="#7e4c4f"
    :opacity="0.8"
  />
  <ToastMessage />
</template>

<script>
import emitter from '@/services/emitter';
import Loading from 'vue-loading-overlay';
import ToastMessage from '@/components/ToastMessage.vue';

export default {
  components: {
    Loading,
    ToastMessage,
  },
  provide() {
    return {
      emitter,
    };
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    handleLoading(status) {
      this.isLoading = status;
    },
  },
  mounted() {
    emitter.on('v-loading', ({ isLoading }) => this.handleLoading(isLoading));
  },
  unmounted() {
    emitter.off('v-loading', ({ isLoading }) => this.handleLoading(isLoading));
  },
};
</script>

<style lang="scss">
@import './assets/all';
</style>
