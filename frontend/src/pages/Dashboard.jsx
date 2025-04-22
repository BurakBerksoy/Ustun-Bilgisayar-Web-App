import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Bilgisayar Tamir Yönetim Sistemi</h1>
        <p>Sistem yönetim paneline hoş geldiniz.</p>
      </div>
      
      <div className="dashboard-card">
        <div className="dashboard-info">
          <h2>Sistem Özeti</h2>
          <div className="info-item">
            <span>Toplam Ürün:</span>
            <span>24</span>
          </div>
          <div className="info-item">
            <span>Aktif Tamir Talepleri:</span>
            <span>12</span>
          </div>
          <div className="info-item">
            <span>Tamamlanan Tamir:</span>
            <span>156</span>
          </div>
          <div className="info-item">
            <span>Son Güncelleme:</span>
            <span>{new Date().toLocaleDateString('tr-TR')}</span>
          </div>
        </div>
      </div>
      
      <div className="dashboard-actions">
        <button className="dashboard-button">
          Ürün Yönetimi
        </button>
        <button className="dashboard-button primary">
          Tamir Talepleri
        </button>
        <button className="dashboard-button">
          Ayarlar
        </button>
      </div>
    </div>
  );
};

export default Dashboard; 