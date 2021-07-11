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
          v-for="item in carts"
          :key="`${item}item`"
        >
          <div class="w-25">
            <img
              :src="item.product.imageUrl"
              alt="imageUrl"
              width="70"
              height="70"
              class="img-fluid me-3 obj-fit-contain"
            />
            <!-- <div class="w-100" style="padding-bottom: 100%; background: #eee"></div> -->
          </div>
          <div class="w-75 ms-3">
            <h3 class="h6">{{ item.product.title }}</h3>
            <p>NT$ {{ item.product.price }}</p>
            <div class="d-flex justify-content-between align-items-end">
              <div class="fw-bold">
                <a href="#" class="pe-2" @click.prevent="minusCartQty">
                  <i class="bi bi-dash fs-6"></i>
                </a>
                <span class="fs-6">{{ item.qty }}</span>
                <a href="#" class="ps-2" @click.prevent="addCartQty">
                  <i class="bi bi-plus fs-6"></i>
                </a>
              </div>
              <button class="btn btn-outline-info" @click="deleteItemFromCart({ cartId: item.id })">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <div class="offcanvas-footer border">
          <div class="p-3">
            <p>購買{{ carts.length }}項產品</p>
            <h4 class="py-3">總共：${{ price.final_total }}</h4>
            <router-link to="cart" class="btn btn-outline-primary btn-lg w-100 mb-3" type="button"
              >購物車</router-link
            >
            <router-link to="/checkout" class="btn btn-primary btn-lg w-100" type="button"
              >直接購買</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cartsMixin from '@/mixins/cartsMixin';
import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  mixins: [cartsMixin],
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
    minusCartQty() {
      console.log('minusCartQty');
    },
    addCartQty() {
      console.log('addCartQty');
    },
  },
  mounted() {
    const offCanvas = this.$refs.canvas;
    this.bsOffcanvas = new Offcanvas(offCanvas);
  },
  created() {
    this.fetchCartList();
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
