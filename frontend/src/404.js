// SPA yönlendirme işleyicisi
export default function redirectToApp() {
  const currentPath = window.location.pathname;
  
  // Eğer direkt /products, /about gibi bir yola gidiliyorsa,
  // bunlar geçerli rotalar olduğundan ana sayfaya yönlendirilip oradan
  // React Router'ın bunları işlemesine izin verir
  const validRoutes = ['/products', '/about', '/dashboard'];
  
  if (validRoutes.includes(currentPath)) {
    // Geçerli bir rota, uygulamada zaten işlenecek
    // Ana URL'ye yönlendir ve hash kullanarak yönlendirmeyi sağla
    window.location.replace('/#' + currentPath);
    return;
  }
  
  // Varsayılan olarak ana sayfaya yönlendir
  window.location.replace('/');
}

// Sayfa yüklendiğinde çalıştır
if (typeof window !== 'undefined') {
  redirectToApp();
}
