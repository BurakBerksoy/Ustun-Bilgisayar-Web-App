import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/AboutPage.css';
import { FaUsers, FaLaptop, FaHistory, FaBuilding, FaNetworkWired, FaGlobe, 
         FaCheckCircle, FaHandshake, FaLightbulb, FaHeadset, FaServer, 
         FaWrench, FaDatabase, FaDesktop, FaShieldAlt, FaVideo, 
         FaCloudUploadAlt, FaTools, FaLaptopCode } from 'react-icons/fa';

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
      description: "İlk mağazamızı Ümraniye Armağanevler'de açtık."
    },
    {
      year: "2017",
      title: "Taşınma ve Yenilenme",
      description: "17 yıl hizmet verdikten sonra Yamanevler Rüzgarlı Sokak'taki yeni yerimize taşındık."
    },
    {
      year: "2020",
      title: "20. Yıl Dönümü",
      description: "Teknoloji alanında 20 yıllık tecrübeye ulaştık ve hizmet ağımızı genişlettik."
    },
    {
      year: "2025",
      title: "25. Yıl",
      description: "Çeyrek asırlık tecrübemizle bölgenin en güvenilir bilgisayar servis noktası olduk."
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
            <div className="about-description animate-on-scroll">
              <p>Bilgisayar teknolojisi çağımızın en hızlı gelişen ve yenilenen teknolojik alanıdır. Üstün Bilgisayar olarak, İntel, Amd, Microsoft, Kingston, Samsung, Asus, ve daha bir çok markanın geliştirdiği en ileri teknolojileri ürettiği Bilgisayar Sistemlerinde kullanır ve sizin hizmetinize sunar.</p>
              <p>Üstün Bilgisayar, bilişim teknolojileri alanında ihtiyaç duyulan teknik servis hizmetlerini markaya bağımsız, müşteri istek ve memnuniyetini ön planda tutarak, en kısa sürede, kaliteli, ekonomik, yaygın, verimli ve planlı bir biçimde sağlamaktadır.</p>
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
              <p>Nisan 2000'de Ümraniye Armağanevler'de başlayan hizmet yolculuğumuz halen mevcut adresimizde (Yamanevler) devam etmektedir. 17 yıl Armağanevler'de, 8 yıldır ise Yamanevler Rüzgarlı Sokak'ta toplam 25 yıldır Ümraniye başta olmak üzere tüm çevre ilçelere bilgisayar satış ve teknik servis hizmetlerini en kaliteli şekilde vermeye çalıştık.</p>
              <p>Müşterilerimiz için ihtiyaç, performans, fiyat denklemini çözmek önceliğimiz olmuştur. Biz sadece teknik servis hizmeti vermiyoruz; aynı zamanda danışmanlık yaparak müşterilerimizin doğru teknoloji kararları almalarına yardımcı oluyoruz.</p>
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
              <p>Bütün dünyaya yayılmış teknoloji ve donanım üreticileri, hergün onlarca yeni ürün ve teknoloji geliştirmektedir. Bunların takip edilmesi, değerlendirilmesi ve ileri ürünlerin tedarik edilmesi önceliğimizdir.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon"><FaHandshake size={40} /></div>
              <h3>Maksimum Performans</h3>
              <p>Her bilgisayarı test etmekte ve bu testlerin sonucunda ortaya çıkan en yüksek performanslı, en stabil çalışan ürünü sizlere sunmaktayız.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon"><FaLightbulb size={40} /></div>
              <h3>Uyumluluk</h3>
              <p>Farklı üreticiler tarafından üretilen ürünlerin birbirleriyle uyumlu çalışmaları için doğru ürünleri bir araya getiriyoruz.</p>
            </div>
            <div className="value-card animate-on-scroll">
              <div className="value-icon"><FaHeadset size={40} /></div>
              <h3>Müşteri Odaklılık</h3>
              <p>Müşteri istek ve memnuniyetini ön planda tutarak, en kısa sürede, kaliteli, ekonomik, yaygın ve verimli hizmet sağlıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content animate-on-scroll">
            <h2>Bilgisayar Sorunlarınız mı Var?</h2>
            <p>25 yıllık deneyimimizle sizin için ihtiyaç, performans ve fiyat denklemini en iyi şekilde çözmek için buradayız!</p>
            <a href="https://api.whatsapp.com/send?phone=905326109511" className="btn btn-primary">Hemen Ara</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 