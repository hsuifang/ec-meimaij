<template>
  <div
    ref="canvas"
    class="offcanvas offcanvas-end"
    data-bs-backdrop="false"
    tabindex="-1"
    aria-labelledby="createItemLabel"
  >
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title" id="createItemLabel">購物車</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body pt-0 bg-white">
      <ul>
        <li
          class="d-flex align-items-center py-4 px-3"
          :class="{ 'border-bottom': item !== 10 }"
          v-for="item in 10"
          :key="`${item}item`"
        >
          <div class="w-25">
            <div class="w-100" style="padding-bottom: 100%; background: #eee"></div>
          </div>
          <div class="w-75 ms-3">
            <h3 class="h6">product title</h3>
            <p>NT$ 1,400</p>
            <div class="d-flex justify-content-between align-items-end">
              <div class="fw-bold">
                <a href="#" class="pe-2">
                  <i class="bi bi-dash fs-6"></i>
                </a>
                <span class="fs-6">2</span>
                <a href="#" class="ps-2">
                  <i class="bi bi-plus fs-6"></i>
                </a>
              </div>
              <button class="btn btn-outline-info"><i class="bi bi-trash"></i></button>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <div class="offcanvas-footer border">
          <div class="p-3">
            <p>購買五項產品</p>
            <h4 class="py-3">總共：$10000</h4>
            <button class="btn btn-outline-primary btn-lg w-100 mb-3" type="button">購物車</button>
            <button class="btn btn-primary btn-lg w-100" type="button">直接購買</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  data() {
    return {
      bsOffcanvas: '',
    };
  },
  methods: {
    open() {
      this.bsOffcanvas.show();
    },
    close() {
      this.bsOffcanvas.hide();
    },
  },
  mounted() {
    const offCanvas = this.$refs.canvas;
    this.bsOffcanvas = new Offcanvas(offCanvas);
  },
};
</script>
<style lang="scss">
.offcanvas {
  padding-bottom: 220px;
}
.offcanvas-footer {
  background: #fff;
  position: fixed;
  width: 400px;
  right: 0;
  bottom: 0;
}
</style>
