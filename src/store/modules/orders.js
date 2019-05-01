/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import Vue from 'vue';
import OrderService from '@/services/order/order';

const state = {
  all: [],
};

const getters = {
  getOrderById: state => id => state.all.find(order => order.id === id),
  getOrders: state => state.all,
};

const actions = {
  async getAllOrders({ commit }) {
    const orders = await OrderService.getAllOrders();

    orders.forEach((order) => {
      if (order.id) {
        order.id = Number(order.id);
      }
      if (order.totalPrice) {
        order.totalPrice = Number(order.totalPrice);
      }
      if (order.status) {
        order.status = Boolean(Number(order.status));
      }
      if (order.products) {
        const numbered = [];
        order.products.forEach((product) => {
          numbered.push(Number(product));
        });

        order.products = numbered;
      }
    });

    commit('setOrders', orders);
  },

  async setOrderStatusById({ state, commit }, { status, id }) {
    const response = await OrderService.updateOrderStatus(id, status);

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
          status,
        };
        commit('setOrderStatusByIndex', payload);
      }
    }
  },
};

const mutations = {
  setOrders(state, orders) {
    state.all = orders;
  },

  setOrderStatusByIndex(state, { index, status }) {
    Vue.set(state.all[index], 'status', status);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
