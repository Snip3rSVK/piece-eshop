import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import ProductDetail from './components/Eshop/ProductDetail.vue';
import ProductList from './components/Eshop/ProductList.vue';
import NotFound from './components/NotFound/NotFound.vue';
import AdminOrderList from './components/Admin/OrderList.vue';
import AdminProductList from './components/Admin/ProductList.vue';
import AdminOrderDetail from './components/Admin/OrderDetail.vue';
import AdminProductDetail from './components/Admin/ProductDetail.vue';
import Order from './components/Order/Order.vue';
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
      path: '/404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
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
          path: 'order',
          name: 'order',
          component: Order,
        },
        {
          path: 'product/:id',
          name: 'product',
          component: ProductDetail,
          props: true,
        },
        {
          path: '',
          name: 'productList',
          component: ProductList,
          props: true,
        },
        {
          path: 'category/:category',
          name: 'productListCategory',
          component: ProductList,
          props: true,
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
          component: () => import(/* webpackChunkName: "admin" */ './views/Admin/Admin.vue'),
          meta: {
            requiresAuth: true,
          },
          children: [
            {
              path: 'products',
              name: 'adminProductList',
              component: AdminProductList,
            },
            {
              path: 'orders',
              name: 'adminOrderList',
              component: AdminOrderList,
            },
            {
              path: 'product/:id',
              name: 'adminProduct',
              component: AdminProductDetail,
              props: true,
            },
            {
              path: 'order/:id',
              name: 'adminOrder',
              component: AdminOrderDetail,
              props: true,
            },
          ],
        },
      ],
    },
  ],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
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
