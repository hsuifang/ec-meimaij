import { apiGetCartList, apiAddCart, apiDeleteCart, apiDeleteAllCart, apiUpdateCart } from '@/api';

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
    };
  },
  inject: ['emitter'],
  methods: {
    async fetchCartList() {
      this.$vLoading(true);
      try {
        const res = await apiGetCartList();
        const { success, data } = res.data;
        if (success) {
          this.carts = data.carts;
          this.price.total = data.total;
          this.price.final_total = data.final_total;
        } else {
          this.$vHttpsNotice(res, '查看購物清單');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    async addToCart({ productId, qty }) {
      this.toggleLoding({ pos: 'list', id: productId });
      try {
        const res = await apiAddCart({ id: productId, qty });
        this.emitter.emit('updateCart');
        this.$vHttpsNotice(res, '加入購物車');
        console.log(this.emitter);
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.toggleLoding({ pos: '', id: '' });
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
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
  },
};
