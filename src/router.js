import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import ProductItem from './components/Eshop/ProductItem.vue';
import ProductList from './components/Eshop/ProductList.vue';
import ShoppingCart from './components/Eshop/ShoppingCart.vue';
import TokenService from './services/token/token';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/eshop',
      // name: 'eshop',
      // route level code-splitting
      // this generates a separate chunk (eshop.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "eshop" */ './views/Eshop/Eshop.vue'),
      children: [
        {
          path: 'product/:id',
          name: 'product',
          component: ProductItem,
          props: true,
        },
        {
          path: '',
          name: 'productList',
          component: ProductList,
          props: true,
        },
        {
          path: 'cart',
          name: 'cart',
          component: ShoppingCart,
          props: true,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login/Login.vue'),
      meta: {
        redirectIfAuth: true,
      },
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (admin.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin/Admin.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const redirectIfAuth = to.matched.some(record => record.meta.redirectIfAuth);
  const loggedIn = Boolean(TokenService.getToken());

  if (requiresAuth && !loggedIn) {
    return next({
      path: '/login',
      query: {
        // Store the full path to redirect the user to after login
        redirect: to.fullPath,
      },
    });
  }

  // Redirect user to administration if he is already logged in
  if (redirectIfAuth && loggedIn) {
    // const redirectQuery = to.query.redirect || '/admin';
    // return next(redirectQuery);
    return next('/');
  }

  next();
});

export default router;
