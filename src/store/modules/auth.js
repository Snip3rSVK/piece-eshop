/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { UserService, AuthenticationError } from '@/services/user/user';
import TokenService from '@/services/token/token';
import router from '@/router';

const state = {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: '',
  otherError: '',
  // refreshTokenPromise: null, // Holds the promise of the refresh token
};

const getters = {
  loggedIn: state => (Boolean(state.accessToken)),

  authenticationErrorCode: state => state.authenticationErrorCode,

  authenticationError: state => state.authenticationError,

  authenticating: state => state.authenticating,

  otherError: state => state.otherError,
};

const actions = {
  async login({ commit }, { email, password }) {
    commit('loginRequest');

    try {
      const token = await UserService.login(email, password);
      commit('loginSuccess', token);

      // Redirect the user to the page he first tried to visit or to the admin
      router.push(router.history.current.query.redirect || '/admin');

      return true;
    }
    catch (e) {
      commit('otherError', e);
      if (e instanceof AuthenticationError) {
        commit('loginError', { errorCode: e.errorCode, errorMessage: e.message });
      }

      return false;
    }
  },

  logout({ commit }) {
    UserService.logout();
    commit('logoutSuccess');
    router.push('/login');
  },

  /* refreshToken({ commit, state }) {
    // If this is the first time the refreshToken has been called, make a request
    // otherwise return the same promise to the caller
    if (!state.refreshTokenPromise) {
      const p = UserService.refreshToken();
      commit('refreshTokenPromise', p);

      // Wait for the UserService.refreshToken() to resolve.
      // On success set the token and clea/r promise
      // Clear the promise on error as well.
      p.then(
        (response) => {
          commit('refreshTokenPromise', null);
          commit('loginSuccess', response);
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          commit('refreshTokenPromise', null);
        },
      );
    }

    return state.refreshTokenPromise;
  }, */
};

const mutations = {
  loginRequest(state) {
    state.authenticating = true;
    state.authenticationError = '';
    state.authenticationErrorCode = 0;
  },

  loginSuccess(state, accessToken) {
    state.accessToken = accessToken;
    state.authenticating = false;
  },

  loginError(state, { errorCode, errorMessage }) {
    state.authenticating = false;
    state.authenticationErrorCode = errorCode;
    state.authenticationError = errorMessage;
  },

  logoutSuccess(state) {
    state.accessToken = '';
  },

  otherError(state, error) {
    state.otherError = String(error);
  },
  /* refreshTokenPromise(state, promise) {
    state.refreshTokenPromise = promise;
  }, */
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
