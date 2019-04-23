import Vue from 'vue';
import Vuex from 'vuex';
import shoppingCart from './modules/shoppingCart';
import products from './modules/products';
import orders from './modules/orders';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    shoppingCart,
    products,
    orders,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
});
