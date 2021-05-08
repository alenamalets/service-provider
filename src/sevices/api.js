import axios from 'axios';

const baseUrl = 'http://localhost:9000';

const service = {
  async post(route, params) {
    try {
      const { data } = await axios.post(`${baseUrl}/${route}`, {
        params
      });
      return data
    } catch (error) {
      return error;
    }
  },
};

export default service;
