import ApiService from '@/services/api/api';

const ProductService = {
  async getAllProducts() {
    const requestData = {
      method: 'post',
      url: '/api/select-all-products.php/',
      data: {},
      /* auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      } */
    };

    try {
      const response = await ApiService.customRequest(requestData);
      console.log('getAllProducts response (product):', response);

      return response.data;
    }
    catch (error) {
      throw new Error(error);
    }
  },

  async updateProduct(product) {
    const requestData = {
      method: 'post',
      url: '/api/update-product.php/',
      data: product,
      /* auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      } */
    };

    try {
      const response = await ApiService.customRequest(requestData);
      console.log('updateProduct response (product):', response);

      return response;
    }
    catch (error) {
      throw new Error(error);
    }
  },

  async createProduct(product) {
    const requestData = {
      method: 'post',
      url: '/api/create-product.php/',
      data: product,
      /* auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      } */
    };

    try {
      const response = await ApiService.customRequest(requestData);
      console.log('addProduct response (product):', response);

      return response;
    }
    catch (error) {
      throw new Error(error);
    }
  },

  async deleteProduct(id) {
    const requestData = {
      method: 'post',
      url: '/api/delete-product.php/',
      data: {
        id,
      },
      /* auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      } */
    };

    try {
      const response = await ApiService.customRequest(requestData);
      console.log('deleteProduct response (product):', response);

      return response;
    }
    catch (error) {
      throw new Error(error);
    }
  },
};

export default ProductService;
