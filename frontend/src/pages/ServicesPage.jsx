import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaLaptopCode, FaMobileAlt, FaDesktop, FaBrain, FaDatabase, 
  FaShieldAlt, FaLaptop, FaMobile, FaTabletAlt, FaHdd, 
  FaMicrochip, FaFan, FaNetworkWired, FaServer, FaWrench, 
  FaVideo, FaTools, FaCloudUploadAlt, FaGlobe, FaShoppingCart
} from 'react-icons/fa';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Aktif servis kategorisini takip et
  const [activeCategory, setActiveCategory] = useState('repair');

  // Kurumsal Hizmetler
  const corporateServices = [
    {
      id: 1,
      title: 'Donanım Arızaları',
      description: 'Bilgisayar ve sunucu donanım sorunlarının tanımlanması ve hızlı çözümüyle işletmenizin kesintisiz çalışmasını sağlarız.',
      icon: <FaWrench />,
      features: [
        'Sunucu donanım sorunları tespiti',
        'Hızlı yerinde müdahale',
        'Kritik parça değişimi',
        'Proaktif arıza tespiti',
        'Yüksek öncelikli teknik destek'
      ]
    },
    {
      id: 2,
      title: 'Ağ Yapılandırma',
      description: 'Kurumsal ağ altyapınızı optimize eder, güvenli ve hızlı bir ağ yapısı kurarak iş süreçlerinizi hızlandırırız.',
      icon: <FaNetworkWired />,
      features: [
        'Router ve switch konfigurasyonu',
        'VLAN ve subnet yapılandırması',
        'Firewall ve güvenlik ayarları',
        'Kablosuz ağ optimizasyonu',
        'Ağ trafiği yönetimi'
      ]
    },
    {
      id: 3,
      title: 'Yazılım Sorunları',
      description: 'İşletim sistemi ve uygulama yazılımlarında karşılaşılan sorunları çözerek sistemlerinizin sorunsuz çalışmasını sağlarız.',
      icon: <FaLaptopCode />,
      features: [
        'İşletim sistemi hata giderme',
        'Uygulama çakışma sorunları çözümü',
        'Lisans yönetimi ve güncelleme',
        'Antivirüs ve güvenlik yazılımları',
        'Veritabanı hata giderme'
      ]
    },
    {
      id: 4,
      title: 'Performans Yükseltme',
      description: 'Mevcut donanımınızı analiz ederek optimum performans için gerekli yükseltme ve iyileştirmeleri gerçekleştiririz.',
      icon: <FaDesktop />,
      features: [
        'Sistem performans analizi',
        'Donanım yükseltme planları',
        'Bellek ve CPU optimizasyonu',
        'Depolama çözümleri güncelleme',
        'Güç verimliliği iyileştirme'
      ]
    },
    {
      id: 5,
      title: 'Veri Kurtarma',
      description: 'Disk arızaları ve veri kayıplarında profesyonel ekipmanlarla kritik şirket verilerinizi kurtarırız.',
      icon: <FaDatabase />,
      features: [
        'Fiziksel disk hasarı kurtarma',
        'Dosya sistemi onarımı',
        'Silinen dosya kurtarma',
        'RAID sistem veri kurtarma',
        'Adli bilişim destekli kurtarma'
      ]
    },
    {
      id: 6,
      title: 'Güvenlik Kamerası Kurma',
      description: 'İşletmenizin güvenliğini sağlamak için modern kamera sistemleri kurulumu ve yapılandırması gerçekleştiririz.',
      icon: <FaVideo />,
      features: [
        'IP kamera sistemi kurulumu',
        'NVR/DVR yapılandırması',
        'Uzaktan izleme çözümleri',
        'Görüntü saklama ve arşivleme',
        'Hareket algılama sistemleri'
      ]
    },
    {
      id: 7,
      title: 'Sistem Bakımı',
      description: 'Düzenli bakım ve kontrol hizmetleriyle bilgisayar sistemlerinizin uzun ömürlü ve sorunsuz çalışmasını sağlarız.',
      icon: <FaTools />,
      features: [
        'Periyodik donanım bakımı',
        'Yazılım güncelleme ve yamalar',
        'Sistem temizliği ve optimizasyon',
        'Arıza öngörü testleri',
        'Bakım raporlaması ve planlama'
      ]
    },
    {
      id: 8,
      title: 'Bulut Çözümleri',
      description: 'İşletmeniz için ölçeklenebilir, güvenli ve ekonomik bulut depolama ve yedekleme çözümleri sunarız.',
      icon: <FaCloudUploadAlt />,
      features: [
        'Hibrit bulut mimarisi kurulumu',
        'Veri yedekleme ve felaket kurtarma',
        'Bulut sunucu yapılandırması',
        'Bulut depolama optimizasyonu',
        'Güvenli veri senkronizasyonu'
      ]
    },
    {
      id: 9,
      title: 'Uzaktan Destek',
      description: 'Zaman kaybetmeden uzaktan bağlantı ile teknik destek sağlayarak işletmenizin sorunlarını hızlıca çözeriz.',
      icon: <FaServer />,
      features: [
        'Güvenli uzak bağlantı desteği',
        '7/24 acil durum müdahalesi',
        'Kullanıcı sorunları çözümü',
        'Uzaktan sistem izleme',
        'Proaktif sorun tespiti'
      ]
    }
  ];

  // Tamir Hizmetleri
  const repairServices = [
    {
      id: 1,
      title: 'Laptop Tamiri',
      description: 'Her marka laptop için profesyonel tamir hizmetleri sunuyoruz. Donanım sorunları, ekran değişimi, klavye tamiri ve daha fazlası için bize ulaşın.',
      icon: <FaLaptop />,
      features: [
        'Anakart tamiri',
        'Ekran değişimi',
        'Klavye ve touchpad tamiri',
        'Şarj soket tamiri',
        'Termal pasta yenileme'
      ]
    },
    {
      id: 2,
      title: 'Kasa Tamiri',
      description: 'Masaüstü bilgisayar kasalarınızdaki her türlü donanımsal sorunu profesyonel ekibimizle çözüyoruz. Güç kaynağı, fan, kasa ön panel sorunları için hizmet sunuyoruz.',
      icon: <FaDesktop />,
      features: [
        'Güç kaynağı değişimi',
        'Kasa fanı tamiri',
        'Ön panel bağlantı sorunları',
        'Soğutma sistemi optimizasyonu',
        'Kasa iyileştirme ve bakım'
      ]
    },
    {
      id: 3,
      title: 'Monitör Tamiri',
      description: 'Her marka ve model monitör için profesyonel tamir hizmetleri sunuyoruz. Ekran sorunları, bağlantı arızaları ve güç problemleri için çözümler üretiyoruz.',
      icon: <FaDesktop />,
      features: [
        'Panel değişimi',
        'Güç devresi tamiri',
        'HDMI/DisplayPort/VGA portu tamiri',
        'Monitör ekran kalibrasyonu',
        'Monitör güç kaynağı değişimi'
      ]
    },
    {
      id: 4,
      title: 'Güvenlik Kamerası Tamiri',
      description: 'Güvenlik kamera sistemlerinizin bakım, onarım ve kurulumunu gerçekleştiriyoruz. Her marka için profesyonel teknik destek sağlıyoruz.',
      icon: <FaShieldAlt />,
      features: [
        'Kamera lens değişimi',
        'DVR/NVR cihaz tamiri',
        'Bağlantı sorunları çözümü',
        'Görüntü kalitesi iyileştirme',
        'Güvenlik sistemi bakımı'
      ]
    },
    {
      id: 5,
      title: 'Klavye Tamiri',
      description: 'Her türlü mekanik, membran ve kablosuz klavye tamiri için profesyonel hizmet sunuyoruz. Sıvı teması, tuş sorunları ve bağlantı problemlerini çözüyoruz.',
      icon: <FaLaptopCode />,
      features: [
        'Tuş değişimi',
        'Sıvı hasarı temizliği',
        'Bağlantı kablosu tamiri',
        'Membran değişimi',
        'Switch değişimi ve bakımı'
      ]
    },
    {
      id: 6,
      title: 'Bilgisayar Yedek Parçaları',
      description: 'Bilgisayarınız için ihtiyaç duyduğunuz tüm donanım parçalarını temin ediyoruz. Orijinal ve uyumlu parçalar ile bilgisayarınızın performansını en üst seviyeye çıkarabilirsiniz.',
      icon: <FaMicrochip />,
      features: [
        'Anakart, işlemci ve ekran kartı',
        'RAM, SSD ve HDD ürünleri',
        'Güç kaynağı ve soğutma sistemleri',
        'Klavye, mouse ve diğer çevre birimleri',
        'Orijinal yedek parça garantisi'
      ]
    },
    {
      id: 7,
      title: 'Yazıcı Tamiri',
      description: 'Lazer, mürekkep püskürtmeli ve matris yazıcılarınız için tamir ve bakım hizmetleri sunuyoruz. Baskı kalitesi sorunları, kağıt sıkışması ve bağlantı problemlerini çözüyoruz.',
      icon: <FaMicrochip />,
      features: [
        'Bakım kiti değişimi',
        'Kartuş yuvası tamiri',
        'Sensör temizliği ve değişimi',
        'Silindir takımı yenileme',
        'Yazılım güncellemeleri'
      ]
    },
    {
      id: 8,
      title: 'Hoparlör ve Mikrofon Tamiri',
      description: 'Her türlü hoparlör, kulaklık ve mikrofon sistemlerinin tamir işlemlerini gerçekleştiriyoruz. Ses kesintisi, cızırtı ve bağlantı sorunları için çözümler üretiyoruz.',
      icon: <FaHdd />,
      features: [
        'Hoparlör diyafram değişimi',
        'Hoparlör kablo tamiri',
        'Mikrofon hassasiyet ayarı',
        'Kulaklık bağlantı tamiri',
        'Ses sistemi optimizasyonu'
      ]
    },
    {
      id: 9,
      title: 'Ağ Cihazları Tamiri',
      description: 'Router, modem, switch ve diğer ağ cihazlarının tamir ve bakımı için profesyonel hizmet sunuyoruz. Bağlantı sorunları, donanım arızaları ve firmware sorunlarını çözüyoruz.',
      icon: <FaNetworkWired />,
      features: [
        'Router ve modem tamiri',
        'Ağ cihazı firmware güncelleme',
        'Bağlantı sorunları tespiti',
        'Anakart ve güç devresi tamiri',
        'Ağ performans optimizasyonu'
      ]
    }
  ];

  // Extra Hizmetler
  const extraServices = [
    {
      id: 1,
      title: 'Web Tasarım',
      description: 'Modern ve responsive web siteleri tasarlıyoruz. SEO uyumlu, hızlı ve kullanıcı dostu web sayfaları ile işletmenizin online görünürlüğünü artırıyoruz.',
      icon: <FaGlobe />,
      features: [
        'Responsive tasarım',
        'SEO optimizasyonu',
        'WordPress geliştirme',
        'E-ticaret çözümleri',
        'Web bakım ve güncelleme'
      ]
    },
    {
      id: 2,
      title: 'Mobil Uygulama Geliştirme',
      description: 'İşletmeniz için iOS ve Android platformlarında çalışan özel mobil uygulamalar geliştiriyoruz. Kullanıcı dostu arayüzler ve hızlı uygulamalar tasarlıyoruz.',
      icon: <FaMobile />,
      features: [
        'iOS uygulama geliştirme',
        'Android uygulama geliştirme',
        'Uygulama bakımı ve güncelleme',
        'API entegrasyonu',
        'Uygulama mağaza yönetimi'
      ]
    },
    {
      id: 3,
      title: 'Sosyal Medya Yönetimi',
      description: 'İşletmenizin sosyal medya hesaplarının profesyonel yönetimi için hizmet sunuyoruz. İçerik üretimi, etkileşim artırma ve reklam kampanyaları düzenliyoruz.',
      icon: <FaTabletAlt />,
      features: [
        'İçerik üretimi ve planlama',
        'Sosyal medya reklam yönetimi',
        'Topluluk yönetimi',
        'Analiz ve raporlama',
        'Rakip analizi'
      ]
    },
    {
      id: 4,
      title: 'SEO Danışmanlığı',
      description: 'Web sitenizin arama motorlarında üst sıralarda yer alması için profesyonel SEO danışmanlığı sunuyoruz. Organik trafiğinizi ve dönüşüm oranlarınızı artırıyoruz.',
      icon: <FaBrain />,
      features: [
        'Anahtar kelime analizi',
        'On-page SEO optimizasyonu',
        'Off-page SEO stratejileri',
        'Teknik SEO iyileştirmeleri',
        'Lokal SEO çalışmaları'
      ]
    },
    {
      id: 5,
      title: 'Veri Yedekleme ve Kurtarma',
      description: 'Önemli verilerinizin güvenli bir şekilde yedeklenmesi ve gerektiğinde kurtarılması için profesyonel çözümler sunuyoruz. Veri kaybı riskini minimuma indiriyoruz.',
      icon: <FaDatabase />,
      features: [
        'Otomatik yedekleme sistemleri',
        'Bulut tabanlı yedekleme',
        'Felaket kurtarma planlaması',
        'Veri kurtarma hizmetleri',
        'Yedekleme stratejisi danışmanlığı'
      ]
    },
    {
      id: 6,
      title: 'Siber Güvenlik Çözümleri',
      description: 'İşletmenizin dijital varlıklarını korumak için kapsamlı siber güvenlik çözümleri sunuyoruz. Güvenlik açıklarını tespit ediyor ve koruma sağlıyoruz.',
      icon: <FaShieldAlt />,
      features: [
        'Güvenlik duvarı yapılandırması',
        'Penetrasyon testi',
        'Güvenlik açığı taraması',
        'Çalışan güvenlik eğitimi',
        'Güvenlik politikaları oluşturma'
      ]
    },
    {
      id: 7,
      title: 'Ağ Altyapısı Kurulumu',
      description: 'İşletmeniz için güvenli, hızlı ve verimli ağ altyapısı kuruyoruz. Kablolu ve kablosuz ağ çözümleriyle kesintisiz iletişim sağlıyoruz.',
      icon: <FaNetworkWired />,
      features: [
        'Kablolu ve kablosuz ağ kurulumu',
        'Ağ cihazları konfigürasyonu',
        'VPN çözümleri',
        'Ağ güvenliği yapılandırması',
        'Ağ performans optimizasyonu'
      ]
    },
    {
      id: 8,
      title: 'Donanım Danışmanlığı',
      description: 'İşletmenizin ihtiyaçlarına uygun donanım seçimi için profesyonel danışmanlık hizmeti sunuyoruz. Optimum performans ve maliyet dengesi sağlıyoruz.',
      icon: <FaFan />,
      features: [
        'Donanım ihtiyaç analizi',
        'Bütçe optimizasyonu',
        'Donanım karşılaştırma',
        'Kullanım ömrü tahmini',
        'Performans/maliyet analizi'
      ]
    },
    {
      id: 9,
      title: 'E-Ticaret Çözümleri',
      description: 'İşletmeniz için özel ve kullanışlı e-ticaret platformları kuruyoruz. Ödeme sistemleri, envanter yönetimi ve müşteri deneyimi optimize ediyoruz.',
      icon: <FaShoppingCart />,
      features: [
        'E-ticaret sitesi kurulumu',
        'Ödeme sistemi entegrasyonu',
        'Stok ve envanter yönetimi',
        'Müşteri deneyimi optimizasyonu',
        'Mobil uyumlu tasarım'
      ]
    }
  ];

  return (
    <div className="services-page">
      <Helmet>
        <title>Hizmetlerimiz | Üstün Bilgisayar</title>
        <meta 
          name="description" 
          content="Bilgisayar tamiri, yazılım geliştirme ve teknoloji çözümleri hakkında bilgi alın." 
        />
      </Helmet>
      
      <div className="services-content">
        <div className="container">
          <div className="services-tabs">
            <button 
              className={`tab-button ${activeCategory === 'repair' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('repair')}
            >
              Hizmetlerimiz
            </button>
            <button 
              className={`tab-button ${activeCategory === 'extra' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('extra')}
            >
              Extra Hizmetlerimiz
            </button>
            <button 
              className={`tab-button ${activeCategory === 'corporate' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('corporate')}
            >
              Kurumsal Hizmetlerimiz
            </button>
          </div>

          {activeCategory === 'repair' && (
            <>
              <div className="services-intro">
                <h2>Bilgisayar ve Elektronik Tamir Hizmetlerimiz</h2>
                <p>
                  Bilgisayar Tamir olarak tüm elektronik cihazlarınızın bakım ve onarımı için profesyonel hizmet sunuyoruz. 
                  Uzman teknisyenlerimiz, en son teknoloji ve orijinal parçalar kullanarak cihazlarınızı hızlı ve güvenilir şekilde tamir ediyoruz.
                </p>
              </div>
              
              <div className="services-grid">
                {repairServices.map(service => (
                  <div key={service.id} className="service-card">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeCategory === 'extra' && (
            <>
              <div className="services-intro">
                <h2>Yazılım ve Teknoloji Çözümlerimiz</h2>
                <p>
                  Bilgisayar Tamir olarak sadece tamir hizmetleri değil, aynı zamanda yazılım geliştirme alanında da geniş bir hizmet yelpazesi sunuyoruz. 
                  Uzman ekibimiz ile modern teknolojileri kullanarak işinizi büyütmenize yardımcı oluyoruz.
                </p>
              </div>
              
              <div className="services-grid">
                {extraServices.map(service => (
                  <div key={service.id} className="service-card">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeCategory === 'corporate' && (
            <>
              <div className="services-intro">
                <h2>Kurumsal Hizmetlerimiz</h2>
                <p>
                  Üstün Bilgisayar olarak işletmeler için özel olarak tasarlanmış kapsamlı BT çözümleri sunuyoruz.
                  Profesyonel ekibimiz ve yılların deneyimiyle kurumsal müşterilerimizin ihtiyaçlarını hızlı ve güvenilir şekilde karşılıyoruz.
                </p>
              </div>
              
              <div className="services-grid">
                {corporateServices.map(service => (
                  <div key={service.id} className="service-card">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
          
          <div className="services-cta">
            <h2>Projeniz için Bize Ulaşın</h2>
            <p>
              Elektronik cihaz tamiri veya yazılım projeniz için ücretsiz danışmanlık hizmeti veriyoruz.
              Sorunlarınızı çözmek ve fikirlerinizi hayata geçirmek için hemen iletişime geçin!
            </p>
            <button 
              className="cta-button" 
              onClick={() => {
                // Mobil cihazlarda çalışacak telefon araması fonksiyonu
                const phoneNumber = "05326109511";
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

                if (isMobile) {
                  // Mobil cihazlarda telefon araması yap
                  window.location.href = `tel:${phoneNumber}`;
                } else {
                  // Telefon özelliği olmayan cihazlarda WhatsApp web'e yönlendir
                  const whatsappNumber = phoneNumber.replace(/^0/, '90'); // Başındaki 0'ı 90 ile değiştir
                  window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}`, '_blank');
                }
              }}
            >
              Bize Ulaşın
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
