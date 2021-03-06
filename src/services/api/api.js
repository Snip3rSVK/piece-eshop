import axios from 'axios';
import TokenService from '@/services/token/token';
// import authStore from '@/store/modules/auth';

const ApiService = {
  // interceptor401: null,

  init(baseURL) {
    console.log('API: setting baseURL:', baseURL);
    axios.defaults.baseURL = baseURL;
  },

  setHeader() {
    console.log('API: setting Refresh-Token header:', `${TokenService.getToken()}`);
    axios.defaults.headers.common['Refresh-Token'] = `${TokenService.getToken()}`;
  },

  removeHeader() {
    console.log('API: removing authorization header');
    axios.defaults.headers.common = {};
  },

  get(resource) {
    console.log('API: getRequestToApi:', resource);
    return axios.get(resource);
  },

  post(resource, data) {
    console.log('API: postRequestToApi:', resource, data);
    return axios.post(resource, data);
  },

  put(resource, data) {
    console.log('API: putRequestToApi:', resource, data);
    return axios.put(resource, data);
  },

  delete(resource) {
    console.log('API: deleteRequestToApi:', resource);
    return axios.delete(resource);
  },

  /**
     * Custom axios request
     * @param {Object} data
     * @param {String} data.method
     * @param {String} data.url
     * @param {String} data.data - request payload
     * @param {Object} [data.auth]
     * @param {String} [data.auth.username]
     * @param {String} [data.auth.password]
    * */
  customRequest(data) {
    console.log('API: customRequestToApi:', data);
    return axios(data);
  },

/*   mount401Interceptor() {
    this.interceptor401 = axios.interceptors.response.use(
      response => response,
      async (error) => {
        if (error.request.status == 401) {
          if (error.config.url.includes('/o/token/')) {
            // Refresh token has failed. Logout the user
            authStore.dispatch('auth/logout');
            throw error;
          }
          else {
            // Refresh the access token
            try {
              await authStore.dispatch('auth/refreshToken');
              // Retry the original request
              return this.customRequest({
                method: error.config.method,
                url: error.config.url,
                data: error.config.data,
              });
            }
            catch (e) {
              // Refresh has failed - reject the original request
              throw error;
            }
          }
        }

        // If error was not 401 just reject as is
        throw error;
      },
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this.interceptor401);
  }, */
};

export default ApiService;
