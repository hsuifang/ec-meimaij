<template>
  <ul class="pagination">
    <li class="page-item me-2" :class="{ disabled: !pageInfo.has_pre }">
      <a
        class="page-link"
        href="#"
        tabindex="-1"
        aria-disabled="true"
        @click.prevent="changePage(current - 1)"
        >&lt;</a
      >
    </li>

    <li
      class="page-item me-2"
      :class="{ active: num === pageInfo.current_page }"
      v-for="num in pageInfo.total_pages"
      :key="`page${num}`"
    >
      <a class="page-link" href="#" @click.prevent="changePage(num)">{{ num }}</a>
    </li>
    <li class="page-item" :class="{ disabled: !pageInfo.has_next }">
      <a class="page-link" href="#" @click.prevent="changePage(current + 1)">&gt;</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    pageInfo: {
      type: Object,
      default: () => ({
        has_pre: false,
        has_next: false,
        current: 1,
        total: 1,
      }),
    },
  },
  methods: {
    changePage(num) {
      if (num !== this.pageInfo.current_page) {
        this.$emit('changePage', num);
      }
    },
  },
};
</script>
