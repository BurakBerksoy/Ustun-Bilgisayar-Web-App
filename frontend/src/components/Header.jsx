import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <span className="logo-text">Üstün Bilgisayar</span>
        </div>

        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
              >
                <span className="nav-text">Ana Sayfa</span>
                <span className={location.pathname === '/' ? 'nav-indicator active' : 'nav-indicator'}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
              >
                <span className="nav-text">Hakkımızda</span>
                <span className={location.pathname === '/about' ? 'nav-indicator active' : 'nav-indicator'}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={location.pathname === '/products' ? 'nav-link active' : 'nav-link'}
              >
                <span className="nav-text">Ürünlerimiz</span>
                <span className={location.pathname === '/products' ? 'nav-indicator active' : 'nav-indicator'}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={location.pathname === '/services' ? 'nav-link active' : 'nav-link'}
              >
                <span className="nav-text">Hizmetlerimiz</span>
                <span className={location.pathname === '/services' ? 'nav-indicator active' : 'nav-indicator'}></span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav-controls">
          <a href="https://api.whatsapp.com/send?phone=905326109511" target="_blank" rel="noopener noreferrer" className="contact-button">
            <FaWhatsapp className="phone-icon" />
            <span>Hemen Ara</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 