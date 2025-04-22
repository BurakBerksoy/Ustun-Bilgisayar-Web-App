import axios from 'axios';

// API istekleri için request interceptor
axios.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Hata ayıklama için response interceptor
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axios; 