import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import ProductItem from './components/Eshop/ProductItem.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: 'product/:id',
      name: 'product',
      component: ProductItem,
    },
    {
      path: '/eshop',
      name: 'eshop',
      // route level code-splitting
      // this generates a separate chunk (eshop.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "eshop" */ './views/Eshop/Eshop.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (admin.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin/Admin.vue'),
    },
  ],
});
