import Vue from 'vue';
import Pagination from 'bootstrap-vue/es/components/pagination';
import Table from 'bootstrap-vue/es/components/table';
import FormInput from 'bootstrap-vue/es/components/form-input';
import FormGroup from 'bootstrap-vue/es/components/form-group';
import FormSelect from 'bootstrap-vue/es/components/form-select';
import Form from 'bootstrap-vue/es/components/form';
import Button from 'bootstrap-vue/es/components/button';
import FormCheckbox from 'bootstrap-vue/es/components/form-checkbox';
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

Vue.use(Pagination);
Vue.use(Table);
Vue.use(FormInput);
Vue.use(FormGroup);
Vue.use(FormSelect);
Vue.use(Form);
Vue.use(Button);
Vue.use(FormCheckbox);

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
