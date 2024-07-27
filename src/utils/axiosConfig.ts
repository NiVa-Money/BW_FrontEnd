import { logoutUser } from '@/redux/actions/authActions';
import store from '@/redux/configureStore';
import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  // baseURL_prod: 'http://13.235.189.116:8000',
  baseURL: 'http://13.71.119.166:8000/',
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    config.headers = {
      ...config.headers,
      Accept: 'application/json',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseErrorInterceptor = (error:any) => {
  if (error.response && error.response.status === 401) {
    store.dispatch(logoutUser());
    window.location.href = '/home';
  }
  return Promise.reject(error);
};

const responseInterceptor = (response:any) => {
  return response;
};

axiosInstance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);

export default axiosInstance;
