import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../layout/Main.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/UserProductDetail.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/UserCheckout.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/TheProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/TheOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/TheCoupons.vue'),
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
