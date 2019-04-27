/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const state = {
  title: '',
  subtitle: '',
};

const getters = {
  getTitle(state) {
    return state.title;
  },

  getSubtitle(state) {
    return state.subtitle;
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
