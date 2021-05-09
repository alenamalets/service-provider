import axios from 'axios';

const baseUrl = 'http://localhost:9000';

const service = {
  async post(route, skills) {
    try {
      const { data } = await axios.post(`${baseUrl}/${route}`, {
        skills
      });
      return data
    } catch (error) {
      return error;
    }
  },
};

export default service;
