/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
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

  setProductById({ state, commit }, { product, id }) {
    let indexOfProduct = -1;

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
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  setProductByIndex(state, { product, index }) {
    state.all[index] = product;
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
