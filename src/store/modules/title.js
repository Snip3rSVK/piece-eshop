/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const state = {
  title: '',
  subtitle: '',
  sideView: false,
};

const getters = {
  getTitle(state) {
    return state.title;
  },

  getSubtitle(state) {
    return state.subtitle;
  },

  getSideView(state) {
    return state.sideView;
  },
};

const actions = {};

const mutations = {
  setTitle(state, title) {
    state.title = title;
  },

  setSubtitle(state, subtitle) {
    state.subtitle = subtitle;
  },

  setSideView(state) {
    state.sideView = true;
  },

  setNormalView(state) {
    state.sideView = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
