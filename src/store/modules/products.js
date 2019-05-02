/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import Vue from 'vue';
import ProductService from '@/services/product/product';

// initial state
const state = {
  all: [],
};

// getters
const getters = {
  getProductById: state => id => state.all.find(product => product.id === id),
  // eslint-disable-next-line arrow-body-style
  getProductsByCategory: (state) => {
    return category => state.all.filter(product => product.category === category);
  },
  getProducts: state => state.all,
};

// actions
const actions = {
  async getAllProducts({ commit }) {
    const products = await ProductService.getAllProducts();

    products.forEach((product) => {
      if (product.id) {
        product.id = Number(product.id);
      }
      if (product.stock) {
        product.stock = Number(product.stock);
      }
      if (product.price) {
        product.price = Number(product.price);
      }
    });

    commit('setProducts', products);
  },

  async setProductById({ state, commit }, { product, id }) {
    const response = await ProductService.updateProduct(product);

    let indexOfProduct = -1;

    if (response) {
      for (let i = 0; i < state.all.length; ++i) {
        if (state.all[i].id === id) {
          indexOfProduct = i;
          break;
        }
      }

      if (indexOfProduct >= 0) {
        const payload = {
          index: indexOfProduct,
          product,
        };
        commit('setProductByIndex', payload);
      }
    }
  },

  async createProduct({ state, commit }, product) {
    const response = await ProductService.createProduct(product);

    if (response) {
      product.id = Number(state.all[state.all.length - 1].id) + 1;
      commit('pushProduct', product);
    }
  },

  async deleteProduct({ state, commit }, id) {
    const response = await ProductService.deleteProduct(id);

    let indexOfProduct = -1;

    if (response) {
      for (let i = 0; i < state.all.length; ++i) {
        if (state.all[i].id === Number(id)) {
          indexOfProduct = i;
          break;
        }
      }

      if (indexOfProduct >= 0) {
        commit('deleteProductByIndex', indexOfProduct);
      }
    }
  },
};

// mutations
const mutations = {
  pushProduct(state, product) {
    state.all.push(product);
  },

  setProducts(state, products) {
    state.all = products;
  },

  setProductByIndex(state, { product, index }) {
    // state.all[index] = product; <-- do not use because it will not be reactive
    Vue.set(state.all, index, product);
  },

  deleteProductByIndex(state, index) {
    // state.all[index] = product; <-- do not use because it will not be reactive
    state.all.splice(index, 1);
  },

  decrementProductStock(state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.stock--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
