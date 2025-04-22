import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Sayfa Bulunamadı</h2>
        <p>Aradığınız sayfa bulunamadı veya taşınmış olabilir. Lütfen doğru URL'yi girdiğinizden emin olun.</p>
        <div className="not-found-buttons">
          <button onClick={goBack} className="not-found-button">Geri Dön</button>
          <Link to="/" className="not-found-button secondary">Ana Sayfaya Git</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 