import axios from 'axios';

const request = axios.create({
  baseURL: `${location.protocol}//${location.hostname}:3000/`
});

request.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

request.interceptors.request.use(function(config) {
  (config.headers as any).Authorization = localStorage.getItem("token");
  return config;
})


export default request;