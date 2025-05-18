import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';

// Sayfalar
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import FaqPage from './pages/FaqPage';

// Bileşenler
import Header from './components/Header';
import Footer from './components/Footer';

// Servisler
import './services/axios.interceptor';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <title>Üstün Bilgisayar | Bilgisayar Tamiri & Teknik Servis</title>
          <meta name="description" content="Üstün Bilgisayar olarak İstanbul'da profesyonel bilgisayar tamiri ve teknik servis hizmetleri" />
          <meta name="keywords" content="bilgisayar tamiri, laptop tamiri, teknoloji servisi, teknik destek, Üstün Bilgisayar" />
        </Helmet>
        
        <Header />
        
        <main className="main-content">
          <Routes>
            {/* Genel Yollar */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sss" element={<FaqPage />} />
            
            {/* 404 Sayfası */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
