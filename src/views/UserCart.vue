<template>
  <section class="bg-light">
    <div class="container text-center py-5">
      <h2 class="fs-6">鎂麥 / 購物車</h2>
    </div>
  </section>
  <!-- 購物車 -->
  <div class="pb-5">
    <div class="container">
      <div class="row mt-4 mb-4 p-5 bg-white rounded border">
        <div class="col-lg-12">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="py-3 border-0 bg-light">
                    <p>名稱</p>
                  </th>
                  <th scope="col" class="py-3 border-0 bg-light">
                    <p>金額</p>
                  </th>
                  <th scope="col" class="py-3 border-0 bg-light">
                    <p>數量</p>
                  </th>
                  <th scope="col" class="py-3 border-0 bg-light">
                    <p>刪除</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-if="carts.length > 0">
                  <tr v-for="item in carts" :key="item.product_id">
                    <th scope="row">
                      <div class="p-2">
                        <img
                          :src="item.product.imageUrl"
                          alt=""
                          width="70"
                          height="70"
                          class="img-fluid me-3"
                          style="height: 70px; object-fit: contain"
                        />
                      </div>
                    </th>
                    <td class="align-middle">
                      <strong>NT$ {{ item.product.price }}</strong>
                    </td>
                    <td class="align-middle">
                      <input
                        type="number"
                        class="form-control"
                        v-model.number="item.qty"
                        style="width: 80px"
                        min="1"
                        @change="
                          updateCart({
                            cartId: item.id,
                            productId: item.product_id,
                            qty: item.qty,
                          })
                        "
                      />
                    </td>
                    <td class="align-middle">
                      <button
                        type="button"
                        class="btn btn-outline-info"
                        @click="deleteItemFromCart({ cartId: item.id })"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                      <div
                        v-if="loadingItem.pos === 'delItem' && loadingItem.id === item.id"
                        class="position-absolute top-50 start-50"
                      >
                        <div class="spinner-border spinner-border-sm" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
                <tr v-else>
                  <td colspan="4" class="text-center">目前無購物資料</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-between mt-3">
            <div class="d-flex">
              <input
                id="coupon"
                type="text"
                class="form-control me-2"
                style="width: 200px"
                min="1"
              />
              <button type="button" class="btn btn-secondary text-white">
                <i class="bi bi-gift text-white me-2"></i>使用優惠券
              </button>
            </div>
            <div v-if="carts.length > 0">
              <button
                type="button"
                class="btn btn-secondary px-3"
                :disabled="loadingItem.pos === 'delAll'"
                @click="deleteAllCart"
              >
                刪除全部
              </button>
              <div
                v-if="loadingItem.pos === 'delAll'"
                class="spinner-border spinner-border-sm position-absolute top-50 start-100"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="text-end pt-5 pb-3 border-bottom">
        <li class="mb-4">小計: 1000</li>
        <li class="mb-4">折扣: 0</li>
        <!-- usedCode -->
        <li class="mb-4">總計: 1000</li>
      </ul>
      <div class="d-flex justify-content-between py-3">
        <button type="button" class="btn btn-outline-secondary">繼續購物</button>
        <router-link class="btn btn-primary px-4 text-white" to="checkout">結帳</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  apiGetCartList,
  apiDeleteCart,
  apiDeleteAllCart,
  apiUpdateCart,
  apiApplyCoupon,
} from '@/api';

export default {
  data() {
    return {
      carts: [],
      price: {
        total: 0,
        final_total: 0,
      },
      loadingItem: {
        pos: '',
        id: '',
      },
      couponCode: '',
      usedCode: '',
      coupons: [],
    };
  },
  methods: {
    async fetchCartList() {
      this.$vLoading(true);
      try {
        const res = await apiGetCartList();
        const { success, data } = res.data;
        if (success) {
          this.carts = data.carts;
          this.price.total = data.total;
          this.price.final = data.final_total;
        } else {
          this.$vHttpsNotice(res, '查看購物清單');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    async updateCart({ cartId, productId, qty }) {
      try {
        const res = await apiUpdateCart({ cartId, productId, qty });
        const { success } = res.data;
        if (success) {
          this.fetchCartList();
        } else {
          this.$vHttpsNotice(res, '修改購物車');
        }
      } catch (error) {
        this.$vErrorNotice();
      }
    },
    async deleteItemFromCart({ cartId }) {
      this.toggleLoding({ pos: 'delItem', id: cartId });
      try {
        const res = await apiDeleteCart(cartId);
        const { success } = res.data;
        if (success) {
          this.fetchCartList();
        } else {
          this.$vHttpsNotice(res, '刪除購物車項目');
        }
        this.toggleLoding({ pos: '', id: '' });
      } catch (error) {
        this.$vErrorNotice();
      }
    },
    async deleteAllCart() {
      try {
        const res = await apiDeleteAllCart();
        const { success } = res.data;
        if (success) {
          this.carts = [];
          this.fetchCartList();
        } else {
          this.$vHttpsNotice(res, '刪除所有購物車');
        }
      } catch (error) {
        this.$vErrorNotice();
      }
    },
    async applyCoupn() {
      this.toggleLoding({ pos: 'applyCoupon' });
      try {
        const res = await apiApplyCoupon(this.couponCode);
        if (res.data.success) {
          this.usedCode = this.couponCode;
        }
        this.couponCode = '';
        this.$vHttpsNotice(res, '使用優惠券');
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.toggleLoding({ pos: '' });
      }
    },
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
  },
  created() {
    this.fetchCartList();
  },
};
</script>
