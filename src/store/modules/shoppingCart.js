/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import fakeApi from '@/fakeApi/fakeApi';

// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null,
  opened: false,
};

const getters = {
  cartProducts: (state, getters, rootState) => state.items.map(({ id, quantity }) => {
    const product = rootState.products.all.find(product => product.id === id);
    return {
      title: product.title,
      price: product.price,
      quantity,
    };
  }),

  cartNumberOfProducts: state => state.items.length,

  // eslint-disable-next-line max-len
  cartTotalPrice: (state, getters) => getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0),

  isOpened: state => state.opened,
};

const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit('setCheckoutStatus', null);
    // empty cart
    commit('setCartItems', { items: [] });
    fakeApi.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      },
    );
  },

  addProductToCart({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id });
      }
      else {
        commit('incrementItemQuantity', cartItem);
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true });
    }
  },
};

const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },

  showCart(state) {
    state.opened = true;
  },

  hideCart(state) {
    state.opened = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
