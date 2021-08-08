import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../layout/Main.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'products',
        name: 'userProducts',
        component: () => import('../views/userSide/UserProducts.vue'),
      },
      {
        path: 'product/:id',
        name: 'userProductDetail',
        component: () => import('../views/userSide/UserProductDetail.vue'),
      },
      {
        path: 'cart',
        name: 'userCart',
        component: () => import('../views/userSide/UserCart.vue'),
      },
      {
        path: 'checkout',
        name: 'userCheckout',
        component: () => import('../views/userSide/UserCheckout.vue'),
      },
      {
        path: 'order/:id',
        name: 'userOrder',
        component: () => import('../views/userSide/UserOrder.vue'),
      },
      {
        path: 'member',
        name: 'userCenter',
        component: () => import('../views/userSide/UserCenter.vue'),
        children: [
          {
            path: '',
            name: 'orderHistory',
            component: () => import('../views/userSide/UserOrderHistory.vue'),
          },
          {
            path: 'favorite',
            name: 'userFavorite',
            component: () => import('../views/userSide/UserFavorite.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/adminSide/Admin.vue'),
    children: [
      {
        path: '',
        name: 'adminProduct',
        component: () => import('../views/adminSide/TheProducts.vue'),
      },
      {
        path: 'orders',
        name: 'adminOrders',
        component: () => import('../views/adminSide/TheOrders.vue'),
      },
      {
        path: 'coupons',
        name: 'adminCoupons',
        component: () => import('../views/adminSide/TheCoupons.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
