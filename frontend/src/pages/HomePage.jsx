import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { FaLaptop, FaTools, FaServer, FaDatabase, FaShieldAlt, FaUserCheck, 
         FaClock, FaHeadset, FaStar, FaCheck, FaDesktop, FaMicrochip, 
         FaNetworkWired, FaLightbulb, FaCogs, FaBrain } from 'react-icons/fa';
import '../styles/HomePage.css';

const HomePage = () => {
  const [activeService, setActiveService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Otomatik servis değiştirme
    const serviceInterval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 5000);

    // Otomatik testimonial değiştirme
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    // Ekran kaydırma animasyonu için IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 }); // Elemanın %15'i görünür olduğunda animasyonu başlat

    // Animate-section sınıfına sahip tüm elementleri gözlemle
    document.querySelectorAll('.animate-section, .animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    setIsVisible(true);
    
    // Paralaks efekti için scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      
      if (heroContent) {
        heroContent.style.transform = `perspective(1000px) rotateX(${scrollPosition * 0.005}deg) translateY(-${scrollPosition * 0.02}px)`;
      }
      
      // Şekiller için paralaks
      const shapes = document.querySelectorAll('.hero-shape');
      shapes.forEach((shape, index) => {
        const speed = 0.05 + (index * 0.01);
        const yPos = scrollPosition * speed;
        shape.style.transform = `translateY(${yPos}px) rotate(${scrollPosition * 0.02}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(serviceInterval);
      clearInterval(testimonialInterval);
      // Observer'ı temizle
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page" style={{ width: '100vw', maxWidth: '100vw', overflow: 'hidden' }}>
      <Helmet>
        <title>Ana Sayfa | İBT Bilgisayar Tamiri</title>
        <meta 
          name="description" 
          content="İstanbul'un en güvenilir ve profesyonel bilgisayar, laptop tamir ve bakım hizmetleri. Yerinde servis ve uygun fiyatlarla hizmetinizdeyiz." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section animate-section visible" id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Bilgisayar Problemlerinize <span>Profesyonel Çözümler</span></h1>
              <p>Uzman ekibimizle tüm bilgisayar ve laptop sorunlarınıza hızlı, uygun fiyatlı ve kalıcı çözümler sunuyoruz.</p>
              <div className="hero-buttons">
                <a href="tel:+905326109511" className="btn btn-primary">Hemen Ara: 0532 610 95 11</a>
                <a href="https://api.whatsapp.com/send?phone=905326109511" className="btn btn-outline">WhatsApp İletişim</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section className="services-section animate-section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">HİZMETLERİMİZ</span>
            <h2 className="section-title">Uzman Çözümler</h2>
            <p className="section-description">Bilgisayarınızla ilgili her türlü sorun için profesyonel hizmetler sunuyoruz.</p>
          </div>
          
          <div className="services-tabs">
            <div className="service-tabs-nav">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`service-tab-item ${activeService === index ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="tab-icon">{service.icon}</div>
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
            
            <div className="service-tabs-content">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`service-tab-content ${activeService === index ? 'active' : ''}`}
                >
                  <div className="service-tab-content-inner">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      {service.items.map((item, i) => (
                        <li key={i}>
                          <FaCheck className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/hizmetler" className="btn btn-primary">Detaylı Bilgi</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="benefits-section animate-section" id="benefits">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">NEDEN BİZ?</span>
            <h2 className="section-title">Farkımız</h2>
            <p className="section-description">Müşteri memnuniyeti ve kaliteli hizmet için çalışıyoruz.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card animate-on-scroll" key={index}>
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nasıl Çalışıyoruz Section */}
      <section className="process-section animate-section" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">ÇALIŞMA SÜRECİMİZ</span>
            <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
            <p className="section-description">Basit ve etkili süreçle sorununuzu çözüyoruz</p>
          </div>
          <div className="process-steps">
            <div className="process-step animate-on-scroll">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Arıza Bildirimi</h3>
                <p>Telefon, e-posta veya randevu formu ile arızanızı bize bildirin.</p>
              </div>
            </div>
            <div className="process-step animate-on-scroll">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Ücretsiz Arıza Tespiti</h3>
                <p>Uzman teknisyenlerimiz arızanın kaynağını tespit eder.</p>
              </div>
            </div>
            <div className="process-step animate-on-scroll">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Fiyat Teklifi</h3>
                <p>Arıza tespitinin ardından net ve şeffaf bir fiyat teklifi sunulur.</p>
              </div>
            </div>
            <div className="process-step animate-on-scroll">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Hızlı Onarım</h3>
                <p>Onayınızın ardından deneyimli ekibimiz hızlıca tamiratı gerçekleştirir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
      <section className="testimonials-section animate-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">MÜŞTERİ YORUMLARI</span>
            <h2 className="section-title">Bizimle Çalışanlar Ne Diyor?</h2>
            <p className="section-description">Müşterilerimizin bizimle ilgili deneyimleri</p>
          </div>
          <div className="testimonials-slider">
            <div className="testimonials-wrapper" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`star ${i < testimonial.rating ? 'active' : ''}`} />
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-profession">{testimonial.profession}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern tasarım */}
      <section className="cta-section animate-section" id="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Hızlı ve Güvenilir Bilgisayar Tamiri</h2>
            <p>Bilgisayarınızla ilgili tüm sorunlarda yanınızdayız. Hemen bizi arayın, sorununuzu çözelim!</p>
            <div className="cta-buttons">
              <a href="tel:+902121234567" className="btn btn-light">Bizi Arayın</a>
              <a href="https://api.whatsapp.com/send?phone=905326109511" className="btn btn-outline-light">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96228.67434380088!2d28.825527642968756!3d41.043442699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbb8dab9c259%3A0x1601b5ff29f5e72c!2sBilgisayar%20Teknik%20Servis!5e0!3m2!1str!2str!4v1655116035236!5m2!1str!2str"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Bilgisayar Teknik Servis Konumu"
        ></iframe>
      </div>
    </div>
  );
};

// Servisler
const services = [
  {
    title: "Bilgisayar Tamiri",
    icon: <FaLaptop />,
    description: "Masaüstü ve dizüstü bilgisayarlarınızın donanımsal ve yazılımsal tüm sorunlarını çözüyoruz.",
    items: [
      "Anakart, işlemci, RAM ve ekran kartı arızaları",
      "Ekran, klavye ve batarya değişimi",
      "Disk arızaları ve veri kurtarma",
      "Yazılım hataları ve sistem güncellemeleri",
      "Aşırı ısınma sorunları",
      "Performans optimizasyonu"
    ]
  },
  {
    title: "Teknik Destek",
    icon: <FaTools />,
    description: "İşletmeniz veya ev kullanımınız için profesyonel ve hızlı teknik destek hizmetleri sunuyoruz.",
    items: [
      "7/24 uzaktan teknik destek imkanı",
      "İşletim sistemi kurulumu ve yapılandırma",
      "Driver ve yazılım güncellemeleri",
      "Virüs ve malware temizliği",
      "Yazıcı ve çevre birimleri kurulumu",
      "Uzaktan masaüstü desteği"
    ]
  },
  {
    title: "Ağ Hizmetleri",
    icon: <FaNetworkWired />,
    description: "Ev ve küçük işletmeler için ağ kurulum, güvenlik ve bakım hizmetleri sağlıyoruz.",
    items: [
      "Kablosuz ağ kurulumu ve optimizasyonu",
      "Router, modem ve ağ donanım kurulumu",
      "Ağ güvenliği ve güvenlik duvarı yapılandırma",
      "İnternet bağlantı sorunları çözümü",
      "VPN kurulumu ve yapılandırma",
      "Ofis ağ altyapısı tasarımı"
    ]
  },
  {
    title: "Veri Kurtarma",
    icon: <FaDatabase />,
    description: "Kayıp verilerinizi kurtarıyor, veri güvenliği ve yedekleme çözümleri sunuyoruz.",
    items: [
      "Arızalı disklerden veri kurtarma",
      "Silinen dosyaların geri getirilmesi",
      "Biçimlendirilmiş disklerden veri kurtarma",
      "Dosya sistemi hataları onarımı",
      "Bulut yedekleme çözümleri",
      "Veri güvenliği danışmanlığı"
    ]
  }
];

// Avantajlar
const benefits = [
  {
    title: "Uzman Ekip",
    description: "Yılların tecrübesine sahip sertifikalı teknisyenlerimizle sorunlarınızı hızlıca çözüyoruz.",
    icon: <FaUserCheck />
  },
  {
    title: "Garantili Hizmet",
    description: "Tüm onarım ve bakım hizmetlerimiz için 3 ay garanti sunuyoruz.",
    icon: <FaShieldAlt />
  },
  {
    title: "Hızlı Çözüm",
    description: "Acil durumlarınız için öncelikli servis ve aynı gün çözüm imkanı sağlıyoruz.",
    icon: <FaClock />
  },
  {
    title: "Şeffaf Fiyatlandırma",
    description: "Onarım öncesinde detaylı arıza tespiti ve net fiyat teklifi sunuyoruz.",
    icon: <FaLightbulb />
  },
  {
    title: "Modern Ekipmanlar",
    description: "En son teknoloji cihaz ve yazılımlarla sorunları teşhis edip çözümlüyoruz.",
    icon: <FaCogs />
  },
  {
    title: "Profesyonel Danışmanlık",
    description: "Bilgisayarınızla ilgili uzman tavsiyeleri ve kullanım önerileri sunuyoruz.",
    icon: <FaBrain />
  }
];

// Müşteri yorumları
const testimonials = [
  {
    name: "Mehmet Yılmaz",
    profession: "Grafik Tasarımcı",
    text: "Dizüstü bilgisayarımın ekranı çalışmayı durdurmuştu. Çok hızlı bir şekilde sorunu teşhis edip tamir ettiler. Fiyat da gayet uygundu. Kesinlikle tavsiye ederim!",
    rating: 5
  },
  {
    name: "Ayşe Kaya",
    profession: "Muhasebeci",
    text: "Ofisimizdeki bilgisayarların bakımını düzenli olarak yapıyorlar. İşlerinde çok titizler ve her zaman zamanında geliyorlar. Çalışmalarından çok memnunuz.",
    rating: 5
  },
  {
    name: "Can Demir",
    profession: "Yazılım Geliştirici",
    text: "Hard diskim bozulmuştu ve içindeki veriler çok önemliydi. Verilerin neredeyse tamamını kurtarmayı başardılar. Profesyonel yaklaşımları için teşekkür ederim.",
    rating: 4
  },
  {
    name: "Zeynep Şahin",
    profession: "Öğretmen",
    text: "Bilgisayarım çok yavaşlamıştı. Temizlik ve bakım sonrası adeta yeni gibi oldu. Fiyatları da oldukça uygun. İlgili ve nazik personelleri için ayrıca teşekkürler.",
    rating: 5
  }
];

export default HomePage; 