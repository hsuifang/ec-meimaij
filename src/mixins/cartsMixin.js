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
  computed: {
    totalVolume() {
      return this.carts?.reduce((acc, carts) => acc + carts.qty, 0);
    },
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
          this.price.final_total = data.final_total;
          this.emitter.emit('updateCart', { volume: this.totalVolume });
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
      this.$vLoading(true);
      this.toggleLoding({ pos: 'list', id: productId });
      try {
        const res = await apiAddCart({ id: productId, qty });
        this.fetchCartList();
        this.$vHttpsNotice(res, '加入購物車');
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.toggleLoding({ pos: '', id: '' });
        this.$vLoading(false);
      }
    },
    async updateCart({ cartId, productId, qty }) {
      try {
        this.$vLoading(true);
        const res = await apiUpdateCart({ cartId, productId, qty });
        const { success } = res.data;
        if (success) {
          this.fetchCartList();
        } else {
          this.$vHttpsNotice(res, '修改購物車');
        }
      } catch (error) {
        this.$vErrorNotice();
        this.$vLoading(false);
      }
    },
    async deleteItemFromCart({ cartId }) {
      this.$vLoading(true);
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
        this.$vLoading(false);
      }
    },
    async deleteAllCart() {
      try {
        this.$vLoading(true);
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
        this.$vLoading(false);
      }
    },
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
  },
};
