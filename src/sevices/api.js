import axios from 'axios';

const baseUrl = 'http://localhost:9000';

const service = {
  async post(route, params) {
    try {
      const response = await axios.post(`${baseUrl}/${route}`, {
        params
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default service;
