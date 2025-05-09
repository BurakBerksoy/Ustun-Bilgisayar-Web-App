import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaBrain, FaDatabase, FaShieldAlt, FaLaptop, FaMobile, FaTabletAlt, FaHdd, FaMicrochip, FaFan } from 'react-icons/fa';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Aktif servis kategorisini takip et
  const [activeCategory, setActiveCategory] = useState('repair');

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
      title: 'Mouse Tamiri',
      description: 'Her marka mouse için tamir ve bakım hizmetleri sunuyoruz. Tıklama sorunları, sensor arızaları ve kablo problemlerini profesyonel olarak çözüyoruz.',
      icon: <FaMobileAlt />,
      features: [
        'Switch değişimi',
        'Sensor tamiri',
        'Kablo değişimi',
        'Scroll tekerlek tamiri',
        'Performans iyileştirme'
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
      description: 'Bilgisayar hoparlörleri, kulaklıklar ve mikrofonlarınız için tamir hizmetleri sunuyoruz. Ses kalitesi sorunları, bağlantı problemleri ve fiziksel hasarları gideriyoruz.',
      icon: <FaFan />,
      features: [
        'Hoparlör değişimi',
        'Kablo tamiri',
        'Mikrofon membranı değişimi',
        'Kulaklık tamiri',
        'Ses kalitesi optimizasyonu'
      ]
    },
    {
      id: 9,
      title: 'Network Donanımları Tamiri',
      description: 'Router, modem, switch ve diğer ağ cihazlarınız için profesyonel tamir hizmetleri sunuyoruz. Bağlantı sorunları, yapılandırma ve donanım arızalarını gideriyoruz.',
      icon: <FaDatabase />,
      features: [
        'Router/Modem tamiri',
        'Anten değişimi',
        'Switch port tamiri',
        'Firmware güncelleme',
        'Ağ performans optimizasyonu'
      ]
    }
  ];

  const extraServices = [
    {
      id: 1,
      title: 'Web Sitesi Geliştirme',
      description: 'Modern ve responsive web siteleri geliştiriyoruz. React, Angular ve Vue.js gibi popüler frontend teknolojilerini kullanarak müşterilerimize özel çözümler sunuyoruz.',
      icon: <FaLaptopCode />,
      features: [
        'Responsive tasarım',
        'SEO uyumlu kodlama',
        'Yüksek performanslı web siteleri',
        'E-ticaret çözümleri',
        'İçerik yönetim sistemleri'
      ]
    },
    {
      id: 2,
      title: 'Mobil Uygulama Geliştirme',
      description: 'Android ve iOS platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz. React Native ve Flutter kullanarak her iki platform için tek kod tabanında çalışan uygulamalar sunuyoruz.',
      icon: <FaMobileAlt />,
      features: [
        'Native iOS ve Android uygulamalar',
        'Cross-platform çözümler',
        'Kullanıcı dostu arayüzler',
        'API entegrasyonları',
        'Push bildirim sistemleri'
      ]
    },
    {
      id: 3,
      title: 'Masaüstü Uygulama Geliştirme',
      description: 'Windows, macOS ve Linux platformları için profesyonel masaüstü uygulamaları geliştiriyoruz. Electron, JavaFX ve .NET teknolojileri ile şirketinize özel yazılım çözümleri sunuyoruz.',
      icon: <FaDesktop />,
      features: [
        'Çapraz platform masaüstü uygulamaları',
        'Özel işletme yazılımları',
        'Veritabanı entegrasyonları',
        'Yüksek performanslı Native uygulamalar',
        'Modern kullanıcı arayüzleri'
      ]
    },
    {
      id: 4,
      title: 'Yapay Zeka Çözümleri',
      description: 'Yapay zeka ve makine öğrenmesi kullanarak iş süreçlerinizi otomatikleştiren ve veri analizinizi güçlendiren çözümler geliştiriyoruz. İşletmenizi bir sonraki seviyeye taşıyacak akıllı yazılım sistemleri sunuyoruz.',
      icon: <FaBrain />,
      features: [
        'Doğal dil işleme sistemleri',
        'Veri analizi ve tahmin modelleri',
        'Görüntü tanıma ve işleme',
        'Chatbot ve sanal asistanlar',
        'İş zekası çözümleri'
      ]
    },
    {
      id: 5,
      title: 'Veritabanı Yönetimi ve Optimizasyon',
      description: 'SQL ve NoSQL veritabanları için tasarım, kurulum, bakım ve optimizasyon hizmetleri sunuyoruz. Veritabanı performansını artırmak için özel çözümler geliştiriyoruz.',
      icon: <FaDatabase />,
      features: [
        'Veritabanı tasarımı ve kurulumu',
        'Performans optimizasyonu',
        'Veri göç işlemleri',
        'Yedekleme ve kurtarma çözümleri',
        'Büyük veri yönetimi'
      ]
    },
    {
      id: 6,
      title: 'Siber Güvenlik Çözümleri',
      description: 'Uygulamalarınız ve sistemleriniz için güvenlik değerlendirmesi, penetrasyon testleri ve güvenlik çözümleri sunuyoruz. Güvenlik açıklarını belirleyip, çözüm önerileri sunuyoruz.',
      icon: <FaShieldAlt />,
      features: [
        'Güvenlik açığı taraması',
        'Penetrasyon testleri',
        'Güvenlik duvarı konfigürasyonu',
        'Güvenlik politikaları oluşturma',
        'Güvenlik eğitimleri'
      ]
    }
  ];

  return (
    <div className="services-page">
      <Helmet>
        <title>Hizmetlerimiz | Bilgisayar Tamir</title>
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