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

  async updateOrderStatus(id, status) {
    const requestData = {
      method: 'post',
      url: '/api/update-order-status.php/',
      data: {
        id,
        status,
      },
      /* auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      } */
    };

    try {
      const response = await ApiService.customRequest(requestData);
      console.log('updateOrderStatus response (order):', response);

      return response;
    }
    catch (error) {
      throw new Error(error);
    }
  },

  async sendOrder(orderPayload) {
    const requestData = {
      method: 'post',
      url: '/api/post-order.php/',
      data: orderPayload,
      /* auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      } */
    };

    try {
      const response = await ApiService.customRequest(requestData);
      console.log('sendOrder response (order):', response);

      return response;
    }
    catch (error) {
      throw new Error(error);
    }
  },
};

export default OrderService;
