/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import fakeApi from '@/fakeApi/fakeApi';

// initial state
const state = {
  all: [],
};

// getters
const getters = {
  getProductById: state => id => state.all.find(product => product.id === id),
};

// actions
const actions = {
  getAllProducts({ commit }) {
    fakeApi.getProducts((products) => {
      commit('setProducts', products);
    });
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.inventory--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
