<template>
  <div
    class="modal fade text-center"
    id="questionModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="questionModal"
    data-bs-backdrop="static"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-5 py-5">
          {{ content }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary text-white px-4" @click="check">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  mixins: [modalMixin],
  emits: ['checkInfo', 'clearItem'],
  methods: {
    check() {
      this.$emit('checkInfo');
      this.closeModal();
    },
  },
};
</script>
