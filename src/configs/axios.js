import axios from 'axios';
import { API } from 'react-native-dotenv';

const instance = axios.create({
  baseURL: API
});
instance.interceptors.response.use(res => {
  return Promise.resolve(res);
});
instance.interceptors.response.use(
  res => res,
  error => {
    return Promise.reject(error);
  }
);
export default instance;
