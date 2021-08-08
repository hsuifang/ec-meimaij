export default {
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    getFavoriteProducts(key) {
      return JSON.parse(localStorage.getItem(key));
    },
    setFavoriteProduct(key, value) {
      localStorage.setItem(key, value);
    },
    toggleFavorite(product) {
      const storageKey = 'meimaijlove';
      const favoriteProducts = this.getFavoriteProducts(storageKey);
      if (!favoriteProducts) {
        this.setFavoriteProduct(storageKey, JSON.stringify([product]));
        this.isFavorite = true;
      } else {
        const idx = favoriteProducts.findIndex((item) => item.id === product.id);
        if (idx === -1) {
          this.setFavoriteProduct(storageKey, JSON.stringify([...favoriteProducts, product]));
          this.isFavorite = true;
        } else {
          favoriteProducts.splice(idx, 1);
          this.setFavoriteProduct(storageKey, JSON.stringify(favoriteProducts));
          this.isFavorite = false;
        }
      }
      this.emitter.emit('notice-message', {
        style: 'success',
        title: `${this.isFavorite ? '加入' : '移除'}收藏`,
      });
    },
    initFavorite(productId) {
      const favoriteProducts = this.getFavoriteProducts('meimaijlove');
      if (favoriteProducts) {
        const idx = favoriteProducts.findIndex((item) => item.id === productId);
        if (idx !== -1) {
          this.isFavorite = true;
        }
      }
    },
  },
};
