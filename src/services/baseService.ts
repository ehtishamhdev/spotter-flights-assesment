import axios, { AxiosInstance } from 'axios';

const apiService = (): AxiosInstance => {
  const defaultOptions = {
    baseURL:  `https://${import.meta.env.VITE_RAPID_API_HOST}/api/v1/flights`,
    headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY as string,
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST as string,
      },
  };
  const instance = axios.create(defaultOptions);


  instance.interceptors.response.use(
    (response) => response,
    (err) => {
 

      return Promise.reject(err);
    }
  );

  return instance;
};

export const baseService = apiService();

export default baseService;
