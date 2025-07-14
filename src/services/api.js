import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_HOST,
  withCredentials: true,
});

export default api;
