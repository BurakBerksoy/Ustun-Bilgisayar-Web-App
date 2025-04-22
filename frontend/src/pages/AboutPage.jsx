import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/AboutPage.css';
import { FaUsers, FaLaptop, FaHistory, FaBuilding, FaNetworkWired, FaGlobe, 
         FaCheckCircle, FaHandshake, FaLightbulb, FaHeadset } from 'react-icons/fa';

const AboutPage = () => {
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

  const milestones = [
    {
      year: "2000",
      title: "Şirket Kuruluşu",
      description: "İlk mağazamızı İstanbul Kadıköy'de açtık."
    },
    {
      year: "2008",
      title: "Büyüme ve Genişleme",
      description: "İkinci şubemizi Beşiktaş'ta açtık ve teknik ekibimiz iki katına çıktı."
    },
    {
      year: "2015",
      title: "Kurumsal Hizmet",
      description: "Kurumsal müşterilere özel hizmet vermeye başladık."
    },
    {
      year: "2025",
      title: "Online Platform",
      description: "Online randevu sistemi ve uzaktan destek hizmetlerimizi başlattık."
    }
  ];

  return (
    <div className="about-page">
      <Helmet>
        <title>Hakkımızda | Üstün Bilgisayar</title>
        <meta 
          name="description" 
          content="Üstün Bilgisayar olarak 25 yıldır İstanbul'da profesyonel bilgisayar ve laptop tamir hizmetleri sunuyoruz." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="animate-on-scroll">Biz Kimiz?</h1>
            <div className="about-subtitle animate-on-scroll">İstanbul'un En Güvenilir Bilgisayar Tamircisi</div>
            <div className="about-description animate-on-scroll">
              <p>25 yıldır sektörde lider konumda olan Üstün Bilgisayar, bilgisayar ve laptop tamir hizmetlerinde güvenilir çözüm ortağınızdır. Deneyimli ekibimiz ve profesyonel yaklaşımımızla teknoloji sorunlarınıza hızlı ve kalıcı çözümler sunuyoruz.</p>
            </div>
          </div>
          <div className="about-hero-image animate-on-scroll">
            <div className="about-hero-icon">
              <FaUsers size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Kuruluş Hikayemiz</h2>
          <div className="history-content animate-on-scroll">
            <div className="history-logo">
              <FaHistory size={80} />
            </div>
            <div className="history-text">
              <p>2000 yılında küçük bir dükkanda başlayan yolculuğumuz, bugün İstanbul'un farklı noktalarında hizmet veren profesyonel bir işletmeye dönüştü. Teknoloji alanındaki tutkumuz ve müşteri memnuniyetine verdiğimiz önem, bizi sektörün lider firmalarından biri haline getirdi.</p>
              <p>Misyonumuz, teknoloji kullanıcılarının sorunlarına hızlı ve ekonomik çözümler sunarak dijital hayatlarını kesintisiz sürdürmelerini sağlamaktır. Biz sadece tamir hizmeti vermiyoruz; aynı zamanda danışmanlık yaparak müşterilerimizin doğru teknoloji kararları almalarına yardımcı oluyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Kilometre Taşlarımız</h2>
          <div className="milestones-timeline" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="milestone-item animate-on-scroll"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  width: "80%",
                  maxWidth: "1200px"
                }}
              >
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-card animate-on-scroll">
              <div className="value-icon"><FaCheckCircle size={40} /></div>
              <h3>Kalite</h3>
              <p>Her tamirde en yüksek kalite standartlarını sağlamak için orijinal veya muadil yüksek kalite parçalar kullanıyoruz.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon"><FaHandshake size={40} /></div>
              <h3>Dürüstlük</h3>
              <p>Müşterilerimizle şeffaf bir iletişim kurarak, gerçek sorunları ve en uygun çözüm yollarını paylaşıyoruz.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon"><FaLightbulb size={40} /></div>
              <h3>Yenilikçilik</h3>
              <p>Sürekli kendimizi geliştirerek en son teknolojileri ve tamir yöntemlerini takip ediyoruz.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon"><FaHeadset size={40} /></div>
              <h3>Müşteri Odaklılık</h3>
              <p>Her müşterimizin ihtiyaçlarını anlamak ve en iyi hizmeti sunmak için çaba gösteriyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content animate-on-scroll">
            <h2>Bilgisayar Sorunlarınız mı Var?</h2>
            <p>25 yıllık deneyimimizle yanınızdayız. Sorunlarınızı çözmek için buradayız!</p>
            <a href="https://api.whatsapp.com/send?phone=905326109511" className="btn btn-primary">Hemen Ara</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 