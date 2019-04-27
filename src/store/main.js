import Vue from 'vue';
import Vuex from 'vuex';
import shoppingCart from './modules/shoppingCart';
import products from './modules/products';
import orders from './modules/orders';
import auth from './modules/auth';
import title from './modules/title';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    shoppingCart,
    products,
    orders,
    auth,
    title,
  },
  state: {},
  mutations: {},
  actions: {},
});
