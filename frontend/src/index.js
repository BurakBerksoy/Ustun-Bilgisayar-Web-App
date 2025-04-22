import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { API_BASE_URL } from './constants';

// Axios için global ayarları yapılandır
axios.defaults.baseURL = API_BASE_URL;

// CORS destekleyen bir axios konfigürasyonu
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Timeout süresini arttır
axios.defaults.timeout = 10000;

// Hata ayıklama için gelişmiş interceptor
axios.interceptors.response.use(
  (response) => {
    // Başarılı yanıtlar için küçük bir log
    console.log(`API Yanıt: ${response.status} - ${response.config.url}`);
    return response;
  },
  (error) => {
    // API yanıt vermezse veya bağlantı sorunları olursa
    if (!error.response) {
      console.error('API Bağlantı Hatası:', error.message);
      return Promise.reject(error);
    }
    
    // Konsola detaylı hata mesajları göster
    console.error('API Hatası:', {
      status: error.response.status,
      statusText: error.response.statusText,
      url: error.config.url,
      method: error.config.method,
      data: error.config.data,
      responseData: error.response.data
    });
    
    // 401 veya 403 hataları için özel mesaj
    if (error.response.status === 401) {
      console.warn('Yetkilendirme hatası: Token geçersiz veya eksik.');
    }
    
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 