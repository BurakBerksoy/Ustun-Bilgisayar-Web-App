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
      title: 'Telefon Tamiri',
      description: 'Akıllı telefonunuzun her türlü donanım ve yazılım sorunları için hızlı ve güvenilir çözümler sunuyoruz. Ekran değişimi, batarya değişimi ve su hasarı tamiri gibi hizmetler veriyoruz.',
      icon: <FaMobile />,
      features: [
        'Ekran değişimi',
        'Batarya değişimi',
        'Şarj soketi tamiri',
        'Hoparlör ve mikrofon tamiri',
        'Yazılım sorunları çözümü'
      ]
    },
    {
      id: 3,
      title: 'Tablet Tamiri',
      description: 'Tabletinizin kırık ekranı, batarya sorunu veya diğer donanım sorunları için profesyonel tamir hizmeti veriyoruz. Tüm tablet markalarına hizmet veriyoruz.',
      icon: <FaTabletAlt />,
      features: [
        'Ekran değişimi',
        'Batarya değişimi',
        'Ana kart tamiri',
        'Şarj soketi tamiri',
        'Yazılım güncelleme'
      ]
    },
    {
      id: 4,
      title: 'SSD Tamiri ve Veri Kurtarma',
      description: 'Arızalı SSD\'nizden veri kurtarma ve tamir hizmetleri sunuyoruz. Modern ekipmanlarımız ile veri kaybını en aza indiriyoruz.',
      icon: <FaHdd />,
      features: [
        'SSD veri kurtarma',
        'HDD veri kurtarma',
        'SSD performans iyileştirme',
        'Donanımsal arıza tamiri',
        'Veri yedekleme hizmetleri'
      ]
    },
    {
      id: 5,
      title: 'Anakart Tamiri',
      description: 'Masaüstü ve laptop anakartlarındaki arızalar için mikroskobik düzeyde lehimleme ve tamir hizmetleri sunuyoruz. Profesyonel ekipmanlarımız ile çip seviyesinde tamir yapıyoruz.',
      icon: <FaMicrochip />,
      features: [
        'Çip değişimi',
        'BGA lehimleme',
        'Kısa devre tamiri',
        'BIOS güncelleme',
        'Anakart diagnostik test'
      ]
    },
    {
      id: 6,
      title: 'Soğutma Sistemi Tamiri',
      description: 'Bilgisayarınızın aşırı ısınma sorunları için soğutma sistemi bakım ve tamir hizmetleri sunuyoruz. Fan değişimi, termal pasta yenileme ve soğutma optimizasyonu yapıyoruz.',
      icon: <FaFan />,
      features: [
        'Fan temizliği ve değişimi',
        'Termal pasta yenileme',
        'Soğutma sistemi iyileştirme',
        'Gürültü azaltma çözümleri',
        'Hava akışı optimizasyonu'
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
            <button className="cta-button">Bize Ulaşın</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 