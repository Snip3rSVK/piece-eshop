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
};

export default ProductService;
