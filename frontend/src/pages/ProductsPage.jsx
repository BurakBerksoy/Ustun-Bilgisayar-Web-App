import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles/ProductsPage.css';
import '../styles/products-mobile-responsive.css';

// Kategori ve ürün verilerini burada tanımlıyoruz
const productCategories = [
  { id: 'camera', name: 'Kamera', icon: '📷', title: 'Kamera Çözümleri', description: 'Yüksek çözünürlüklü web kameraları, güvenlik kameraları ve diğer görüntüleme cihazları. Uzaktan eğitim, görüntülü görüşme ve güvenlik ihtiyaçlarınız için kaliteli çözümler.' },
  { id: 'converter', name: 'Dönüştürücüler', icon: '🔄', title: 'Dönüştürücü Çeşitleri', description: 'Analog-dijital dönüştürücüler, HDMI-VGA adapterleri ve diğer dönüştürücü çözümleri. Uyumluluk sorunlarına son vererek cihazlarınızı sorunsuz bir şekilde bağlayın.' },
  { id: 'earphones', name: 'Kulaklıklar', icon: '🎧', title: 'Kulaklık Çeşitleri', description: 'Kulak üstü, kulak içi ve kablosuz kulaklık modellerimizle ses deneyiminizi zenginleştirin. Yüksek ses kalitesi, gürültü önleme ve ergonomik tasarım.' },
  { id: 'hard_disk', name: 'Hard Disk', icon: '💾', title: 'Sabit Disk Çeşitleri', description: 'Dahili ve harici hard diskler, yüksek depolama kapasitesi ve hızlı veri transferi sağlayan güvenilir depolama çözümleri. Verilerinizi güvende tutun ve ihtiyacınız olduğunda kolaylıkla erişin.' },
  { id: 'keyboard', name: 'Klavye', icon: '⌨️', title: 'Klavye Çeşitleri', description: 'Mekanik, membran ve kablosuz klavye modellerimiz ile her kullanım türüne uygun çözümler. Uzun ömürlü ve ergonomik tasarımlarla yazma deneyiminizi iyileştirin.' },
  { id: 'monitor', name: 'Monitör', icon: '🖥️', title: 'Monitör Çeşitleri', description: 'Gaming, ofis ve grafik tasarım için yüksek kaliteli monitör seçenekleri. Yüksek yenileme hızı, HDR ve ultra geniş ekran özellikleriyle donatılmış monitörlerimiz ile görsel deneyiminizi zenginleştirin.' },
  { id: 'motherboards', name: 'Anakartlar', icon: '🔲', title: 'Anakart Çeşitleri', description: 'Intel ve AMD işlemcilere uyumlu anakart modelleri. Her bütçeye ve performans ihtiyacına uygun geniş ürün yelpazemizle bilgisayarınızı güçlendirin.' },
  { id: 'mouse', name: 'Mouse', icon: '🖱️', title: 'Mouse Çeşitleri', description: 'En son teknolojiye sahip mouse modellerimiz ile oyundan ofis kullanımına kadar her ihtiyaca uygun çözümler. Kablosuz, ergonomik ve gaming seçenekleri ile bilgisayar deneyiminizi bir üst seviyeye taşıyın.' },
  { id: 'pc', name: 'Bilgisayar', icon: '💻', title: 'Bilgisayar Sistemleri', description: 'Hazır bilgisayar sistemleri ve özel tasarlanmış bilgisayar çözümleri. Gaming, ofis ve profesyonel kullanım için optimize edilmiş sistemlerle ihtiyaçlarınıza uygun çözümler.' },
  { id: 'power_cable', name: 'Güç Kablosu', icon: '💪', title: 'Güç Kabloları', description: 'Güvenilir, yüksek kaliteli güç kabloları ve uzatma kablosu çözümleri. Cihazlarınızı güvenli bir şekilde besleyin ve koruyun.' },
  { id: 'power_supply', name: 'Güç Kaynağı', icon: '⚡', title: 'Güç Kaynağı Çeşitleri', description: 'Yüksek verimli, güvenilir güç kaynakları ve UPS çözümleri. Bilgisayarınız ve elektronik cihazlarınız için kesintisiz ve düzgün güç sağlayın.' },
  { id: 'processor', name: 'İşlemci', icon: '👾', title: 'İşlemci Çeşitleri', description: 'Intel ve AMD işlemcilerle bilgisayarınızın performansını artırın. Her bütçeye ve kullanım amacına uygun işlemci modelleriyle güçlü bir sistem oluşturun.' },
  { id: 'ram', name: 'RAM', icon: '💽', title: 'RAM Belleği', description: 'Yüksek hızlı RAM bellek modelleri ile bilgisayarınızın performansını artırın. DDR3, DDR4 ve DDR5 çözümleriyle sistem hızınızı maksimuma çıkarın.' },
  { id: 'speaker', name: 'Hoparlör', icon: '🔊', title: 'Hoparlör Sistemleri', description: 'Masaüstü hoparlörler, bluetooth hoparlörler ve ses sistemleri. Net ve yüksek kaliteli ses deneyimi için özel tasarlanmış çözümler.' },
  { id: 'ssd', name: 'SSD Disk', icon: '📡', title: 'SSD Disk Çözümleri', description: 'Yüksek hızlı SSD diskler ile bilgisayarınızın performansını artırın. Daha hızlı açılış, daha hızlı veri transferi ve daha verimli çalışma deneyimi.' }
];

// Ürün verileri - Kategori bazlı galeri görselleri
const categoryGalleryImages = {
  camera: [
    { id: 1, image: '/products_img/camera/WhatsApp Görsel 2025-05-08 saat 10.28.25_d2e33721.jpg', title: 'Web Kamera' },
    { id: 2, image: '/products_img/camera/WhatsApp Görsel 2025-05-08 saat 10.28.26_4c17ca67.jpg', title: 'Güvenlik Kamerası' }
  ],
  converter: [
    { id: 1, image: '/products_img/converter/WhatsApp Görsel 2025-05-08 saat 10.28.31_74ef3b3b.jpg', title: 'HDMI to VGA' },
    { id: 2, image: '/products_img/converter/WhatsApp Görsel 2025-05-08 saat 10.28.31_b899ce16.jpg', title: 'USB to Ethernet' },
    { id: 3, image: '/products_img/converter/WhatsApp Görsel 2025-05-08 saat 10.28.33_008af3cd.jpg', title: 'DisplayPort to DVI' },
    { id: 4, image: '/products_img/converter/WhatsApp Görsel 2025-05-08 saat 10.28.35_73f02fa0.jpg', title: 'DVI to HDMI' }
  ],
  earphones: [
    { id: 1, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.46_8668d28c.jpg', title: 'Kulak Üstü Kulaklık' },
    { id: 2, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.50_95fd68b0.jpg', title: 'Kulak İçi Kulaklık' },
    { id: 3, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.52_af58183f.jpg', title: 'Bluetooth Kulaklık' },
    { id: 4, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.54_da9cd50b.jpg', title: 'Kulaklık 4' },
    { id: 5, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.56_e0cf8cd8.jpg', title: 'Kulaklık 5' },
    { id: 6, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.58_d6166e33.jpg', title: 'Kulaklık 6' },
    { id: 7, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.00_6a134874.jpg', title: 'Kulaklık 7' },
    { id: 8, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.03_d42c0300.jpg', title: 'Kulaklık 8' },
    { id: 9, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.05_130ff1c7.jpg', title: 'Kulaklık 9' },
    { id: 10, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.07_32bc8ae7.jpg', title: 'Kulaklık 10' },
    { id: 11, image: '/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.08_d24e7836.jpg', title: 'Kulaklık 11' }
  ],
  hard_disk: [
    { id: 1, image: '/products_img/hard disk/WhatsApp Görsel 2025-05-08 saat 10.29.56_66474730.jpg', title: '1TB Harici Disk' }
  ],
  keyboard: [
    { id: 1, image: '/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.12_7f07a5ab.jpg', title: 'Mekanik Klavye' },
    { id: 2, image: '/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.13_efd47949.jpg', title: 'Klavye 2' },
    { id: 3, image: '/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.14_12e17bd3.jpg', title: 'Gaming Klavye' },
    { id: 4, image: '/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.14_1a816f93.jpg', title: 'Klavye 4' },
    { id: 5, image: '/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.15_a46b138a.jpg', title: 'Kablosuz Klavye' },
    { id: 6, image: '/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.16_0ba474cf.jpg', title: 'Klavye 6' },
    { id: 7, image: '/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.18_6fbbc045.jpg', title: 'Klavye 7' }
  ],
  monitor: [
    { id: 1, image: '/products_img/Monitör/WhatsApp Görsel 2025-05-08 saat 10.28.22_a5591b79.jpg', title: 'Gaming Monitör' }
  ],
  motherboards: [
    { id: 1, image: '/products_img/motherboards/WhatsApp Görsel 2025-05-08 saat 10.29.51_0bfb5927.jpg', title: 'Intel Anakart' },
    { id: 2, image: '/products_img/motherboards/WhatsApp Görsel 2025-05-08 saat 10.29.53_a627a80c.jpg', title: 'AMD Anakart' }
  ],
  mouse: [
    { id: 1, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.17_9ec30f2a.jpg', title: 'Mouse 1' },
    { id: 2, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.18_029d2785.jpg', title: 'Mouse 2' },
    { id: 3, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.20_4e3464c4.jpg', title: 'Mouse 3' },
    { id: 4, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.21_e8560183.jpg', title: 'Oyun Mouse' },
    { id: 5, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.24_52860e8a.jpg', title: 'Mouse 5' },
    { id: 6, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.26_6c069eaf.jpg', title: 'Mouse 6' },
    { id: 7, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.29_17f449bf.jpg', title: 'Mouse 7' },
    { id: 8, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.34_a4e8e091.jpg', title: 'Ergonomik Mouse' },
    { id: 9, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.37_5aef06f9.jpg', title: 'Kablosuz Mouse' },
    { id: 10, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.41_eafa5626.jpg', title: 'Mouse 10' },
    { id: 11, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.42_0893e03f.jpg', title: 'Mouse 11' },
    { id: 12, image: '/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.44_115fe9d5.jpg', title: 'Mouse 12' }
  ],
  pc: [
    { id: 1, image: '/products_img/pc/WhatsApp Görsel 2025-05-08 saat 10.28.23_908833a1.jpg', title: 'Gaming PC' }
  ],
  power_cable: [
    { id: 1, image: '/products_img/power cable/WhatsApp Görsel 2025-05-08 saat 10.28.27_b80272e9.jpg', title: 'Güç Kablosu' }
  ],
  power_supply: [
    { id: 1, image: '/products_img/power_supply/WhatsApp Görsel 2025-05-08 saat 10.29.52_2b16e4da.jpg', title: '650W Güç Kaynağı' }
  ],
  processor: [
    { id: 1, image: '/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.44_b05cb502.jpg', title: 'İşlemci 1' },
    { id: 2, image: '/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.46_e955db34.jpg', title: 'Intel Core i7' },
    { id: 3, image: '/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.47_36dfc61a.jpg', title: 'İşlemci 3' },
    { id: 4, image: '/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.47_cfcf85b3.jpg', title: 'Intel Core i9' },
    { id: 5, image: '/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.49_affc8c17.jpg', title: 'AMD Ryzen 7' },
    { id: 6, image: '/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.51_82ee7d53.jpg', title: 'İşlemci 6' }
  ],
  ram: [
    { id: 1, image: '/products_img/ram/WhatsApp Görsel 2025-05-08 saat 10.29.55_acf8a1d7.jpg', title: '16GB DDR4 RAM' },
    { id: 2, image: '/products_img/ram/WhatsApp Görsel 2025-05-08 saat 10.29.56_49b287a9.jpg', title: '32GB DDR4 RAM' },
    { id: 3, image: '/products_img/ram/WhatsApp Görsel 2025-05-08 saat 10.29.57_407ccc0d.jpg', title: '48GB DDR4 RAM' },
    { id: 4, image: '/products_img/ram/WhatsApp Görsel 2025-05-08 saat 10.30.00_2a9af15c.jpg', title: '64GB DDR5 RAM' }
  ],
  speaker: [
    { id: 1, image: '/products_img/speaker/WhatsApp Görsel 2025-05-08 saat 10.28.37_5ad3382b.jpg', title: 'Bluetooth Hoparlör' },
    { id: 2, image: '/products_img/speaker/WhatsApp Görsel 2025-05-08 saat 10.28.38_dcffdd73.jpg', title: 'Hoparlör 2' },
    { id: 3, image: '/products_img/speaker/WhatsApp Görsel 2025-05-08 saat 10.28.42_3a06fd33.jpg', title: 'Masaüstü Hoparlör' },
    { id: 4, image: '/products_img/speaker/WhatsApp Görsel 2025-05-08 saat 10.28.43_a4e26d64.jpg', title: 'Hoparlör 4' },
    { id: 5, image: '/products_img/speaker/WhatsApp Görsel 2025-05-08 saat 10.28.45_9a99753c.jpg', title: 'Gaming Hoparlör' }
  ],
  ssd: [
    { id: 1, image: '/products_img/ssd/WhatsApp Görsel 2025-05-08 saat 10.29.58_401ea77f.jpg', title: '500GB SSD' }
  ]
};



const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('camera');
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const [showContactForm, setShowContactForm] = useState(false);

  // Sayfa yüklendiğinde ilk kategoriyi seç ve animasyon efektlerini başlat
  useEffect(() => {
    const currentCategory = productCategories.find(cat => cat.id === selectedCategory);
    setCategoryInfo(currentCategory);
    setCurrentImage(0);
  }, [selectedCategory]);



  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCategoryInfo(productCategories.find(cat => cat.id === categoryId));
    setCurrentImage(0);
  };

  const handlePrevImage = () => {
    if (!selectedCategory) return;
    const images = categoryGalleryImages[selectedCategory];
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };
  
  const handleNextImage = () => {
    if (!selectedCategory) return;
    const images = categoryGalleryImages[selectedCategory];
    setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };



  return (
    <div className="products-page">
      <Helmet>
        <title>Ürünlerimiz | Üstün Bilgisayar</title>
        <meta name="description" content="Üstün Bilgisayar'ın geniş ürün yelpazesi: mouse, klavye, monitör ve daha fazlası. En kaliteli bilgisayar parçaları ve aksesuarları." />
        <meta name="keywords" content="bilgisayar ürünleri, mouse, klavye, monitör, laptop, masaüstü bilgisayar, bilgisayar parçaları, aksesuarlar, ümraniye bilgisayar servisi, bilgisayar tamiri, mouse tamiri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>

      <div className="hero-section-small">
        <div className="hero-overlay"></div>
        <div className="header-content-small">
          <h1 className="page-title-small">ÜRÜNLERİMİZ</h1>
          
          <div className="category-buttons-scroll">
            <div className="category-buttons-container-small">
              {productCategories.map((category) => (
                <button 
                  key={category.id}
                  className={`category-button-small ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <span className="category-icon-small">{category.icon}</span>
                  <span className="category-name-small">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {selectedCategory && categoryInfo && (
        <div className="category-content-container">
          <div className="category-info-section">
            <h2 className="category-title">{categoryInfo.title}</h2>
            <p className="category-description">{categoryInfo.description}</p>
            
            <div className="category-features">
              <h3 className="features-title">Öne Çıkan Özellikler</h3>
              <ul className="features-list">
                <li><i className="fas fa-check-circle"></i> Yüksek kalite standartları</li>
                <li><i className="fas fa-check-circle"></i> 2 yıl garanti</li>
                <li><i className="fas fa-check-circle"></i> Ücretsiz teknik destek</li>
                <li><i className="fas fa-check-circle"></i> Hızlı kargo</li>
              </ul>
            </div>
          </div>

          <div className="category-gallery-section">
            {categoryGalleryImages[selectedCategory].length > 0 ? (
              <div className="gallery-preview-container">
                <div className="gallery-image-preview">
                  <img 
                    src={categoryGalleryImages[selectedCategory][currentImage].image} 
                    alt={categoryGalleryImages[selectedCategory][currentImage].title} 
                    className="gallery-preview-image" 
                    loading="lazy"
                  />
                </div>

                <div className="gallery-thumbnails-wrapper">
                  <div className="gallery-thumbnails">
                    {categoryGalleryImages[selectedCategory].map((image, index) => (
                      <div 
                        key={image.id}
                        className={`gallery-thumbnail ${currentImage === index ? 'active' : ''}`}
                        onClick={() => setCurrentImage(index)}
                      >
                        <img src={image.image} alt={image.title} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="gallery-navigation">
                  <button className="gallery-nav-button prev" onClick={handlePrevImage} aria-label="Önceki resim">
                    <FaArrowLeft />
                  </button>
                  <button className="gallery-nav-button next" onClick={handleNextImage} aria-label="Sonraki resim">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ) : (
              <div className="no-gallery-images">
                <p>Bu kategoride henüz görsel bulunmamaktadır.</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductsPage;
