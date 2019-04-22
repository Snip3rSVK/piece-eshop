import Vue from 'vue';
import Vuex from 'vuex';
import shoppingCart from './modules/shoppingCart';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    shoppingCart,
    products,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
});
