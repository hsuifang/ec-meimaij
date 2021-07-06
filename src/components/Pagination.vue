<template>
  <!-- <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-primary me-2" :disabled="!has_pre">&lt;</button>
    <button
      type="button"
      class="btn btn-outline-primary me-2"
      :class="{ active: num === current }"
      v-for="num in total"
      :key="`page${num}`"
    >
      {{ num }}
    </button>
    <button type="button" class="btn btn-outline-primary" :disabled="!has_next">&gt;</button>
  </div> -->
  <ul class="pagination">
    <li class="page-item me-2" :class="{ disabled: !has_pre }">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&lt;</a>
    </li>

    <li
      class="page-item me-2"
      :class="{ active: num === current }"
      v-for="num in total"
      :key="`page${num}`"
    >
      <a class="page-link" href="#">{{ num }}</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" :class="{ disabled: !has_next }">&gt;</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'pagination',
  data() {
    return {
      has_pre: false,
      has_next: true,
      current: 1,
      total: 4,
    };
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
