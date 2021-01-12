import axios from 'axios';
import { API } from 'react-native-dotenv';

const instance = axios.create({
  baseURL: API
});
instance.interceptors.response.use(res => {
  return Promise.resolve(res.data);
});
instance.interceptors.response.use(
  res => res,
  error => {
    return Promise.reject(error.response.data);
  }
);
export default instance;
