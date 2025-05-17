import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="footer-shape footer-shape-1"></div>
      <div className="footer-shape footer-shape-2"></div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Üstün Bilgisayar Tamiri</h3>
            <p>Profesyonel bilgisayar tamir hizmetleri ile her zaman yanınızdayız. Teknolojik sorunlarınıza hızlı çözümler sunuyoruz.</p>
            <div className="footer-contact">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>ALEMDAĞ CADDESİ, Rüzgarlı Sk. NO:3/A, 34460 Ümraniye/İstanbul</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <a href="tel:+905326109511">0532 610 95 11</a>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:üstünbilgisayar@bilgisayartamiri.com">üstünbilgisayar@bilgisayartamiri.com</a>
              </div>
            </div>
          </div>
          
          <div className="footer-menu">
            <h3>Hızlı Menü</h3>
            <ul>
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Ana Sayfa</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>Hakkımızda</Link></li>
              <li><Link to="/products" onClick={() => window.scrollTo(0, 0)}>Ürünlerimiz</Link></li>
              <li><Link to="/sss" onClick={() => window.scrollTo(0, 0)}>En Çok Sorulan Sorular</Link></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Bizi Takip Edin</h3>
            <div className="social-icons">
              <a href="https://instagram.com/istanbultamiri" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://api.whatsapp.com/send?phone=905326109511" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="tel:+905326109511" aria-label="Telefon">
                <FaPhone />
              </a>
            </div>
            <div className="footer-hours">
              <h4>Çalışma Saatleri</h4>
              <p>Pazartesi - Cumartesi: 09:00 - 18:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} İstanbul Bilgisayar Tamiri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 