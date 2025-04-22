import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

// Görseller
import heroImage from '../assets/hero-image.jpg';
import pcRepairIcon from '../assets/services/pc-repair.png';
import laptopRepairIcon from '../assets/services/laptop-repair.png';
import networkIcon from '../assets/services/network.png';
import dataRecoveryIcon from '../assets/services/data-recovery.png';
import trustIcon1 from '../assets/trust/certified.png';
import trustIcon2 from '../assets/trust/experience.png';
import trustIcon3 from '../assets/trust/quality.png';
import trustIcon4 from '../assets/trust/support.png';

const HomePage = () => {
  useEffect(() => {
    // Sayfa kaydırma animasyonları için
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;
        
        if (elementPosition < screenPosition) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yüklemede görünür elementleri kontrol et
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Bilgisayar Tamir ve Servis Çözümleri</h1>
            <p>Uzman ekibimiz ile bilgisayar ve laptop problemlerinize hızlı, uygun fiyatlı ve kalıcı çözümler sunuyoruz.</p>
            <div className="hero-buttons">
              <Link to="/randevu" className="btn btn-primary">Randevu Al</Link>
              <Link to="/hizmetler" className="btn btn-outline">Hizmetlerimiz</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Bilgisayar Tamir Servisi" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Hizmetlerimiz</h2>
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <img src={pcRepairIcon} alt="Masaüstü Bilgisayar Tamiri" />
              </div>
              <h3>Masaüstü Bilgisayar Tamiri</h3>
              <p>Masaüstü bilgisayarınızın donanım ve yazılım sorunlarını çözüyoruz. Performans optimizasyonu ve parça yükseltmelerinde uzmanız.</p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <img src={laptopRepairIcon} alt="Laptop Tamiri" />
              </div>
              <h3>Laptop Tamiri</h3>
              <p>Tüm marka ve model laptopların ekran, klavye, batarya değişimi, anakart tamiri ve donanım sorunlarını çözüyoruz.</p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <img src={networkIcon} alt="Ağ Kurulumu ve Bakımı" />
              </div>
              <h3>Ağ Kurulumu ve Bakımı</h3>
              <p>Ev veya işyeri ağlarının kurulumu, güvenlik yapılandırması ve düzenli bakımı ile kesintisiz bağlantı sağlıyoruz.</p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <img src={dataRecoveryIcon} alt="Veri Kurtarma" />
              </div>
              <h3>Veri Kurtarma</h3>
              <p>Hasar görmüş disklerden, silinen dosyalardan ve bozulmuş sistemlerden verilerinizi kurtarma konusunda uzmanız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Neden Bizi Seçmelisiniz?</h2>
          <div className="why-us-grid">
            <div className="why-us-card animate-on-scroll">
              <div className="why-us-icon">
                <img src={trustIcon1} alt="Sertifikalı Teknisyenler" />
              </div>
              <h3>Sertifikalı Teknisyenler</h3>
              <p>Tüm ekibimiz endüstri standartlarında sertifikalandırılmış ve sürekli eğitimlerle güncel kalmaktadır.</p>
            </div>
            <div className="why-us-card animate-on-scroll">
              <div className="why-us-icon">
                <img src={trustIcon2} alt="Yılların Deneyimi" />
              </div>
              <h3>Yılların Deneyimi</h3>
              <p>10 yılı aşkın sektör deneyimi ile farklı donanım, yazılım ve ağ sorunlarını başarıyla çözüyoruz.</p>
            </div>
            <div className="why-us-card animate-on-scroll">
              <div className="why-us-icon">
                <img src={trustIcon3} alt="Kaliteli Parçalar" />
              </div>
              <h3>Kaliteli Parçalar</h3>
              <p>Yalnızca orijinal ve yüksek kaliteli yedek parçalar kullanarak cihazınızın ömrünü uzatıyoruz.</p>
            </div>
            <div className="why-us-card animate-on-scroll">
              <div className="why-us-icon">
                <img src={trustIcon4} alt="Hızlı Destek" />
              </div>
              <h3>Hızlı Destek</h3>
              <p>Acil durumlarda hızlı müdahale ve sorunlarınızı çözmek için aynı gün servis hizmeti sunuyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Bilgisayar Sorunlarınızı Çözelim!</h2>
            <p>Bilgisayarınızla ilgili tüm sorunlar için profesyonel destek almak bir tık uzağınızda.</p>
            <Link to="/iletisim" className="btn btn-light">Hemen İletişime Geçin</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 