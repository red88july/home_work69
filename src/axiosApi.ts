import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://api.tvmaze.com/search'
});

export default axiosApi;