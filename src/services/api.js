import axios from 'axios';
import Cookies from 'js-cookie'
import { getRefresh } from './login';
import { clearCookies } from '../utils/clearCookies';

const backApi = axios.create({
  baseURL: import.meta.env.REACT_APP_HOST,
});

// Catch permissions denied and stop propagation
backApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.response?.data?.detail === "COULD_NOT_VALIDATE_CREDENTIALS" && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
          const new_credentials = await getRefresh();
    
          const access_token = new_credentials?.data?.access_token;
          const refresh_token = new_credentials?.data?.refresh_token;
    
          Cookies.set('access_token', access_token, { path: '' })
          Cookies.set('refresh_token', refresh_token, { path: '' })
    
          originalRequest.headers = {
            ...originalRequest.headers,
            'Authorization': `Bearer ${access_token}`
          }
    
          return backApi(originalRequest);
      } catch (error) {
        console.log('Um erro ocorreu ao atualizar o token de acesso:', error?.response?.statusText)
        clearCookies()
      }
    }
    return Promise.reject(error);
  }
);

export const config = (params = {}, isRefresh = false) => {
  const cookies = Cookies.get();
  const { access_token, refresh_token } = cookies;

  return {
    headers: {
      'Authorization': `Bearer ${isRefresh ? refresh_token : access_token}`,
      "Content-Type": "application/json"
    },
    params: {
      ...params
    }
  }
}

export {
  backApi,
};