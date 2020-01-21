import axios from 'axios';

const token = '8fdcc0e6ae7c9c09e2119b4c411df395';

const api = axios.create({
  baseURL: 'https://apiprova.newm.ga/api',
  headers: {
    common: {
      Authorization: `Bearer ${token}`,
    },
  },
});

export default api;
