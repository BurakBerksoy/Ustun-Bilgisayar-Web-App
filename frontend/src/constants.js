/**
 * Sistem Sabit Değerleri
 * Bu dosya, uygulama genelinde kullanılan sabit değerleri içerir.
 */

// API Yapılandırması
export const API_BASE_URL = 'http://localhost:8080';

// API Erişim Tokenı - Geliştirme amaçlı sabit token
// Gerçek bir kullanıcı adı ve şifre ile oluşturulmuş token kullanılmalıdır
// Bu token localhost:8080/api/auth/login endpointinden alınmıştır
export const API_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTcxODI2NTAwOSwiZXhwIjoxNzE4MzUxNDA5fQ.JcUQO-5rl6Gqx-OsCGGTbO57mLXnvdLU_fJi7V3Mv2M';

// Ürün Kategorileri
export const PRODUCT_CATEGORIES = [
  'SSD',
  'RAM',
  'MOTHERBOARD',
  'CPU',
  'GPU',
  'POWER_SUPPLY',
  'COOLING',
  'CASE',
  'MOUSE',
  'KEYBOARD',
  'DISK',
  'HARD_DISK',
  'MODEM',
  'COMPUTER',
  'TABLET',
  'PHONE',
  'MONITOR',
  'PERIPHERAL',
  'OTHER'
];

// Kategori isimlerini Türkçe olarak görüntüle
export const CATEGORY_TRANSLATIONS = {
  'SSD': 'SSD',
  'RAM': 'RAM',
  'MOTHERBOARD': 'Anakart',
  'CPU': 'İşlemci',
  'GPU': 'Ekran Kartı',
  'POWER_SUPPLY': 'Güç Kaynağı',
  'COOLING': 'Soğutma',
  'CASE': 'Kasa',
  'MOUSE': 'Mouse',
  'KEYBOARD': 'Klavye',
  'DISK': 'Disk',
  'HARD_DISK': 'Hard Disk',
  'MODEM': 'Modem',
  'COMPUTER': 'Bilgisayar',
  'TABLET': 'Tablet',
  'PHONE': 'Telefon',
  'MONITOR': 'Monitör',
  'PERIPHERAL': 'Çevre Birimleri',
  'OTHER': 'Diğer'
};

// Pagination ayarları
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_CURRENT_PAGE = 1;

// İlgili Sistem Rota Bilgileri
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  SERVICES: '/services',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register'
}; 