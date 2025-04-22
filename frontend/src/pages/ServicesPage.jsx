import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaBrain, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
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
          content="Web sitesi, mobil uygulama, oyun geliştirme ve gömülü sistem hizmetlerimiz hakkında bilgi alın." 
        />
      </Helmet>
      
      
      <div className="services-content">
        <div className="container">
          <div className="services-intro">
            <h2>Teknoloji Çözümlerimiz</h2>
            <p>
              Bilgisayar Tamir olarak sadece tamir hizmetleri değil, aynı zamanda yazılım geliştirme alanında da geniş bir hizmet yelpazesi sunuyoruz. 
              Uzman ekibimiz ile modern teknolojileri kullanarak işinizi büyütmenize yardımcı oluyoruz.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map(service => (
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
          
          <div className="services-cta">
            <h2>Projeniz için Bize Ulaşın</h2>
            <p>
              Projenizin gereksinimlerini anlamak ve size en uygun çözümü sunmak için ücretsiz danışmanlık hizmeti veriyoruz.
              Fikirlerinizi hayata geçirmek için hemen iletişime geçin!
            </p>
            <button className="cta-button">Bize Ulaşın</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 