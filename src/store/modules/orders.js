/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import OrderService from '@/services/order/order';

const state = {
  all: [],
};

const getters = {
  getOrders: state => state.all,
};

const actions = {
  async getAllOrders({ commit }) {
    const orders = await OrderService.getAllOrders();

    commit('setOrders', orders);
  },
};

const mutations = {
  setOrders(state, orders) {
    state.all = orders;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
