import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { API_BASE_URL, PRODUCT_CATEGORIES, CATEGORY_TRANSLATIONS } from '../constants';
import '../styles/ProductsPage.css';
import ProductModal from '../components/ProductModal';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaTags, FaPencilAlt, FaRegTrashAlt, FaTimes, FaImage } from 'react-icons/fa';

// Metni belirli bir uzunlukta kısaltmak için yardımcı fonksiyon
const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

const ProductsPage = () => {
  // Ürün Listesi State'i
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Modal State'leri
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  
  // Ürün Detay Modalı State'i
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  
  // Filtre State'leri
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Loading ve Error State'leri
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ürünleri Fetch Et
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/products`);
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Ürünler yüklenirken hata oluştu:", err);
      setError("Ürünler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      setLoading(false);
    }
  };

  // Sayfa Yüklendiğinde Ürünleri Getir
  useEffect(() => {
    fetchProducts();
  }, []);

  // Ürün Ekleme İşlevi
  const handleAddProduct = async (productData) => {
    try {
      setLoading(true);
      await axios.post(`${API_BASE_URL}/api/products`, productData);
      await fetchProducts(); // Yeni listeyi getir
      setShowModal(false);
      setLoading(false);
    } catch (err) {
      console.error("Ürün eklenirken hata oluştu:", err);
      setError("Ürün eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      setLoading(false);
    }
  };

  // Ürün Düzenleme İşlevi
  const handleEditProduct = async (productId, productData) => {
    try {
      setLoading(true);
      // ProductId'nin doğru olduğundan emin olalım
      if (!productId) {
        console.error("Ürün ID'si bulunamadı");
        setError("Ürün ID'si bulunamadı. Lütfen sayfayı yenileyip tekrar deneyin.");
        setLoading(false);
        return;
      }
      
      console.log("Ürün güncelleniyor, ID:", productId, "Veri:", productData);
      
      // Eğer ürün ID'si mevcut değilse, API'ye gönderilen veride ID ekleyelim
      if (!productData.id) {
        productData.id = productId;
      }
      
      await axios.put(`${API_BASE_URL}/api/products/${productId}`, productData);
      await fetchProducts(); // Güncellenmiş listeyi getir
      setShowModal(false);
      setCurrentProduct(null);
      setIsEditing(false);
      setLoading(false);
    } catch (err) {
      console.error("Ürün güncellenirken hata oluştu:", err);
      
      // Daha açıklayıcı hata mesajı
      let errorMessage = "Ürün güncellenirken bir hata oluştu.";
      
      if (err.response) {
        if (err.response.status === 404) {
          errorMessage += " Ürün bulunamadı. Sayfayı yenileyip tekrar deneyin.";
        } else {
          errorMessage += ` (Hata kodu: ${err.response.status})`;
        }
      }
      
      setError(errorMessage);
      setLoading(false);
    }
  };

  // Ürün Silme İşlevi
  const handleDeleteProduct = async (productId) => {
    if (window.confirm("Bu ürünü silmek istediğinizden emin misiniz?")) {
      try {
        setLoading(true);
        
        // ProductId'nin doğru olduğundan emin olalım
        if (!productId) {
          console.error("Ürün ID'si bulunamadı");
          setError("Ürün ID'si bulunamadı. Lütfen sayfayı yenileyip tekrar deneyin.");
          setLoading(false);
          return;
        }
        
        console.log("Ürün siliniyor, ID:", productId);
        
        await axios.delete(`${API_BASE_URL}/api/products/${productId}`);
        await fetchProducts(); // Güncellenmiş listeyi getir
        setLoading(false);
      } catch (err) {
        console.error("Ürün silinirken hata oluştu:", err);
        
        // Daha açıklayıcı hata mesajı
        let errorMessage = "Ürün silinirken bir hata oluştu.";
        
        if (err.response) {
          if (err.response.status === 404) {
            errorMessage += " Ürün bulunamadı. Sayfayı yenileyip tekrar deneyin.";
          } else {
            errorMessage += ` (Hata kodu: ${err.response.status})`;
          }
        }
        
        setError(errorMessage);
        setLoading(false);
      }
    }
  };

  // Ürün Ekleme Modalını Aç
  const openAddModal = () => {
    setCurrentProduct(null);
    setIsEditing(false);
    setShowModal(true);
  };

  // Ürün Düzenleme Modalını Aç
  const openEditModal = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setShowModal(true);
  };

  // Modalı Kapat
  const closeModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
    setIsEditing(false);
  };

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
  }, [searchTerm, selectedCategory, products]);

  const filterProducts = () => {
    let result = [...products];
    
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
          <button 
            className="edit-btn" 
            onClick={(e) => {
              e.stopPropagation();
              openEditModal(product);
            }}
          >
            <FaPencilAlt /> Düzenle
          </button>
          <button 
            className="delete-btn" 
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteProduct(product.id);
            }}
          >
            <FaRegTrashAlt /> Sil
          </button>
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
            
            <button className="add-product-btn" onClick={openAddModal}>
              <FaPlus /> Ürün Ekle
            </button>
          </div>
          
          {/* Hata Mesajı */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          {/* Yükleniyor İndikatörü */}
          {loading ? (
            <div className="loading">Yükleniyor...</div>
          ) : (
            <>
              {/* Ürün Listesi */}
              <div className="product-grid">
                {loading ? (
                  <div className="loading">Yükleniyor...</div>
                ) : error ? (
                  <div className="error-message">{error}</div>
                ) : filteredProducts.length === 0 ? (
                  <div className="no-products">
                    {searchTerm || selectedCategory ? 
                      'Aramanızla eşleşen ürün bulunamadı.' : 
                      'Henüz ürün eklenmemiş. İlk ürünü eklemek için "Yeni Ürün Ekle" butonuna tıklayın.'}
                  </div>
                ) : (
                  filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Ürün Ekleme/Düzenleme Modalı */}
      {showModal && (
        <ProductModal
          isOpen={showModal}
          onClose={closeModal}
          product={currentProduct}
          isEditing={isEditing}
          onSubmit={isEditing 
            ? (data) => handleEditProduct(currentProduct.id, data)
            : handleAddProduct
          }
        />
      )}
      
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