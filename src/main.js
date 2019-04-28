import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/main';
import ApiService from './services/api/api';
import TokenService from './services/token/token';

ApiService.init(process.env.VUE_APP_ROOT_API_URL);
console.log('VUE_APP_ROOT_API_URL', process.env);

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader();
}

Vue.config.productionTip = false;

Vue.filter('shorten', (value, maxChar = 14) => {
  if (!value) {
    return '';
  }
  if (value.length > maxChar) {
    return `${value.substring(0, maxChar - 3)}...`;
  }
  return value;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
