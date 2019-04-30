import ApiService from '@/services/api/api';
// import TokenService from '@/services/token/token';

const OrderService = {
  async getAllOrders() {
    const requestData = {
      method: 'post',
      url: '/api/select-all-orders.php/',
      data: {},
      /* auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      } */
    };

    try {
      const response = await ApiService.customRequest(requestData);
      console.log('getAllOrders response (orders):', response);

      return response.data;
    }
    catch (error) {
      throw new Error(error);
    }
  },
};

export default OrderService;
