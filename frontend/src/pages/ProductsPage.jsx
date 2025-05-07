import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { PRODUCT_CATEGORIES, CATEGORY_TRANSLATIONS } from '../constants';
import '../styles/ProductsPage.css';

import { FaSearch, FaTags, FaTimes, FaImage } from 'react-icons/fa';

// Metni belirli bir uzunlukta kısaltmak için yardımcı fonksiyon
const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

const ProductsPage = () => {
  // Statik ürün listesi (geçici olarak sadece RAM ürünleri, diğer ürünler için fotoğraflar eklenince güncellenecek)
  const staticProducts = [
    {
      id: 1,
      name: 'Swissbit 2yGB PC2-5300U',
      description: 'Masaüstü bilgisayarlar için 2GB DDR2 RAM, 667MHz, PC2-5300U. Tüm masaüstü sistemlerle uyumludur ve performans artışı sağlar.',
      category: 'RAM',
      img1: '/src/products_img/Swissbit_2GB_PC2-5300U-555.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    // Diğer kategorilerin ürünleri fotoğraflar eklendikçe buraya eklenecek
  ];

  // Ürün Listesi State'i (statik veri kullanıyoruz)
  const [filteredProducts, setFilteredProducts] = useState(staticProducts);
  
  // Ürün Detay Modalı State'i
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  
  // Filtre State'leri
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Loading State'i - her zaman false çünkü ürünler statik
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sayfa yüklendiğinde filtre uygula
  useEffect(() => {
    filterProducts();
  }, []);













  // Ürün Detay Modalını Aç
  const openDetailModal = (product) => {
    setDetailProduct(product);
    setShowDetailModal(true);
  };
  
  // Ürün Detay Modalını Kapat
  const closeDetailModal = () => {
    setShowDetailModal(false);
    setDetailProduct(null);
  };

  // Arama Filtresi
  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory]);

  const filterProducts = () => {
    let result = [...staticProducts];
    
    // Arama terimini uygula
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Kategori filtresini uygula
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    setFilteredProducts(result);
  };

  // Ürün Detay Modalı Göster
  const showProductDetail = (product) => {
    setDetailProduct(product);
    setShowDetailModal(true);
  };
  
  // Ürün Kartı Bileşeni
  const ProductCard = ({ product }) => {
    // Ürünün resmini belirle - ilk geçerli resmi göster (img1-img6)
    const productImage = product.img1 || product.img2 || product.img3 || 
                         product.img4 || product.img5 || product.img6 || 
                         '/placeholder-image.jpg';
    
    // Ürünün kaç resmi olduğunu hesapla
    const imageCount = [product.img1, product.img2, product.img3, 
                      product.img4, product.img5, product.img6]
                      .filter(img => img).length;
    
    return (
      <div className="product-card" onClick={() => showProductDetail(product)}>
        <div className="product-image-container">
          <img src={productImage} alt={product.name} className="product-image" />
          {imageCount > 1 && (
            <div className="image-count-badge">+{imageCount - 1}</div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{truncateText(product.description, 80)}</p>
          <div className="product-category">{CATEGORY_TRANSLATIONS[product.category] || product.category}</div>
        </div>
        <div className="product-actions">


        </div>
      </div>
    );
  };

  // Detay Modalı
  const DetailModal = ({ product, onClose }) => {
    // Geçerli resimleri bir diziye aktar
    const images = [
      product.img1, 
      product.img2, 
      product.img3, 
      product.img4, 
      product.img5, 
      product.img6
    ].filter(img => img);
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
    
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>×</span>
          </button>
          
          {images.length > 0 ? (
            <div className="product-detail-images">
              <div className="main-image-container">
                <img 
                  src={images[currentImageIndex]} 
                  alt={product.name} 
                  className="detail-main-image" 
                />
                
                {images.length > 1 && (
                  <>
                    <button className="image-nav prev" onClick={prevImage}>
                      &lt;
                    </button>
                    <button className="image-nav next" onClick={nextImage}>
                      &gt;
                    </button>
                  </>
                )}
              </div>
              
              {images.length > 1 && (
                <div className="image-thumbnails">
                  {images.map((img, index) => (
                    <img 
                      key={index}
                      src={img}
                      alt={`${product.name} - ${index + 1}`}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="no-image">
              <FaImage /> Resim Yok
            </div>
          )}
          
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <div className="detail-category">
              <FaTags /> {CATEGORY_TRANSLATIONS[product.category] || product.category}
            </div>
            <p className="detail-description" style={{ whiteSpace: 'pre-wrap', fontSize: '1rem', color: '#4a5568' }}>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="products-page">
      <Helmet>
        <title>Ürünlerimiz | Bilgisayar Tamir</title>
        <meta 
          name="description" 
          content="Bilgisayar tamiri ve teknoloji ürünleri. Kaliteli ürünler ve uygun fiyatlarla hizmetinizdeyiz." 
        />
        <meta name="keywords" content="bilgisayar parçaları, bilgisayar donanım, RAM, SSD, mouse, disk, modem"/>
      </Helmet>
      
      <div className="products-content">
        <div className="container">
          {/* Arama ve Filtre Bölümü */}
          <div className="products-actions">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Ürün ara..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="category-filter">
              <FaTags className="filter-icon" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Tüm Kategoriler</option>
                {PRODUCT_CATEGORIES.map(category => (
                  <option key={category} value={category}>
                    {CATEGORY_TRANSLATIONS[category]}
                  </option>
                ))}
              </select>
            </div>
            

          </div>
          
          {/* Hata Mesajı */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
                  {/* Ürün Listesi */}
          <div className="product-grid">
            {filteredProducts.length === 0 ? (
              <div className="no-products">
                {searchTerm || selectedCategory ? 
                  'Aramanızla eşleşen ürün bulunamadı.' : 
                  'Henüz ürün eklenmemiş.'}
              </div>
            ) : (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
      

      
      {/* Detay Modalı */}
      {showDetailModal && detailProduct && (
        <DetailModal 
          product={detailProduct} 
          onClose={() => setShowDetailModal(false)} 
        />
      )}
    </div>
  );
};

export default ProductsPage; 