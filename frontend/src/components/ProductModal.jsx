import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiUpload, FiImage, FiTrash2 } from 'react-icons/fi';
import '../styles/ProductModal.css';
import { PRODUCT_CATEGORIES, CATEGORY_TRANSLATIONS } from '../constants';

const ProductModal = ({ isOpen, onClose, onSubmit, product, isEditMode }) => {
  // Form durumu
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    category: '',
    images: [] // Tüm resimler burada tutulacak
  });

  // Hata durumu
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    category: '',
    images: ''
  });

  // Dosya sürükleme durumu
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Düzenleme modunda ürün verilerini yükle
  useEffect(() => {
    if (isEditMode && product) {
      // Backend'den gelen tüm resim URL'lerini dizi haline getiriyoruz
      const productImages = [];
      
      // Mevcut resimleri kontrol et ve diziye ekle
      if (product.img1) productImages.push({ url: product.img1, preview: product.img1 });
      if (product.img2) productImages.push({ url: product.img2, preview: product.img2 });
      if (product.img3) productImages.push({ url: product.img3, preview: product.img3 });
      if (product.img4) productImages.push({ url: product.img4, preview: product.img4 });
      if (product.img5) productImages.push({ url: product.img5, preview: product.img5 });
      if (product.img6) productImages.push({ url: product.img6, preview: product.img6 });
      
      setFormState({
        name: product.name || '',
        description: product.description || '',
        category: product.category || '',
        images: productImages
      });
    } else {
      // Yeni ürün ekleme durumunda formu sıfırla
      setFormState({
        name: '',
        description: '',
        category: '',
        images: []
      });
    }
  }, [isEditMode, product]);

  // Form alanı değişiklikleri
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Hata mesajını temizle
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  // Dosya sürükleme olayları
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    
    if (files.length > 0) {
      handleFiles(Array.from(files));
    }
  };

  // Dosya seçme olayı
  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFiles(Array.from(files));
    }
  };

  // Dosya işleme - Çoklu resim desteği
  const handleFiles = (files) => {
    // Toplam resim sayısını kontrol et - maksimum 6 resim
    if (formState.images.length + files.length > 6) {
      setErrors(prevState => ({
        ...prevState,
        images: 'En fazla 6 resim yükleyebilirsiniz!'
      }));
      return;
    }

    let newImages = [...formState.images];
    let hasError = false;

    files.forEach(file => {
      // Dosya tipini kontrol et
      if (!file.type.match('image.*')) {
        setErrors(prevState => ({
          ...prevState,
          images: 'Sadece resim dosyaları yükleyebilirsiniz!'
        }));
        hasError = true;
        return;
      }

      // Dosya boyutunu kontrol et (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prevState => ({
          ...prevState,
          images: 'Resim dosyası 5MB\'dan küçük olmalıdır!'
        }));
        hasError = true;
        return;
      }

      // Dosyayı işle ve URL'ini oluştur
      const imageUrl = URL.createObjectURL(file);
      
      newImages.push({
        preview: imageUrl, // Önizleme için
        file: file, // Gerçek dosya - daha sonra base64'e çevrilecek
        name: file.name // Dosya adı
      });
    });

    if (!hasError) {
      setFormState(prevState => ({
        ...prevState,
        images: newImages
      }));
      
      // Hata mesajını temizle
      if (errors.images) {
        setErrors(prevState => ({
          ...prevState,
          images: ''
        }));
      }
    }
  };

  // Bir resmi kaldır
  const removeImage = (index) => {
    const newImages = [...formState.images];
    
    // Eğer önizleme URL'ine sahipse, temizle
    if (newImages[index].preview && newImages[index].file) {
      URL.revokeObjectURL(newImages[index].preview);
    }
    
    newImages.splice(index, 1);
    
    setFormState(prevState => ({
      ...prevState,
      images: newImages
    }));
  };

  // Tüm resimleri temizle
  const clearAllImages = () => {
    // Önizleme URL'lerini temizle
    formState.images.forEach(image => {
      if (image.preview && image.file) {
        URL.revokeObjectURL(image.preview);
      }
    });
    
    setFormState(prevState => ({
      ...prevState,
      images: []
    }));
  };

  // Dosyayı base64'e çevir - Promise
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Form gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Temel form doğrulama
    let newErrors = {};
    let hasError = false;

    if (!formState.name.trim()) {
      newErrors.name = 'Ürün adı gereklidir';
      hasError = true;
    }

    if (!formState.description.trim()) {
      newErrors.description = 'Ürün açıklaması gereklidir';
      hasError = true;
    }

    if (!formState.category) {
      newErrors.category = 'Kategori seçimi gereklidir';
      hasError = true;
    }

    if (formState.images.length === 0) {
      newErrors.images = 'En az bir resim ekleyin';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Form verilerini hazırla
    const productData = {
      name: formState.name,
      description: formState.description,
      category: formState.category,
      // Resim alanlarını varsayılan olarak null olarak ayarla
      img1: null,
      img2: null,
      img3: null,
      img4: null,
      img5: null,
      img6: null
    };

    try {
      // Yüklenen her resim için
      for (let i = 0; i < formState.images.length && i < 6; i++) {
        const image = formState.images[i];
        let imageUrl;
        
        // Eğer bu yeni bir dosya ise, base64'e çevir
        if (image.file) {
          imageUrl = await convertFileToBase64(image.file);
        } else {
          // Mevcut bir URL ise, doğrudan kullan
          imageUrl = image.url;
        }
        
        // Resmi ilgili alana ekle (img1, img2, ...)
        productData[`img${i+1}`] = imageUrl;
      }

      // Verileri gönder
      onSubmit(productData);
      
      // Önizleme URL'lerini temizle
      formState.images.forEach(image => {
        if (image.preview && image.file) {
          URL.revokeObjectURL(image.preview);
        }
      });
    } catch (error) {
      console.error('Resim dönüştürme hatası:', error);
      setErrors({
        ...newErrors,
        images: 'Resim yüklenirken bir hata oluştu. Lütfen tekrar deneyin.'
      });
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-backdrop">
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{isEditMode ? 'Ürün Düzenle' : 'Yeni Ürün Ekle'}</h2>
              <button className="close-button" onClick={onClose}>
                <FiX />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Ürün Adı */}
              <div className="form-group">
                <label htmlFor="name">Ürün Adı</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Ürün adını girin"
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              
              {/* Ürün Açıklaması */}
              <div className="form-group">
                <label htmlFor="description">Açıklama</label>
                <textarea
                  id="description"
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  className={errors.description ? 'error' : ''}
                  placeholder="Ürün açıklamasını girin"
                  rows="4"
                />
                {errors.description && <div className="error-message">{errors.description}</div>}
              </div>
              
              {/* Kategori */}
              <div className="form-group">
                <label htmlFor="category">Kategori</label>
                <select
                  id="category"
                  name="category"
                  value={formState.category}
                  onChange={handleChange}
                  className={errors.category ? 'error' : ''}
                >
                  <option value="">Kategori seçin</option>
                  {PRODUCT_CATEGORIES.map(category => (
                    <option key={category} value={category}>{CATEGORY_TRANSLATIONS[category]}</option>
                  ))}
                </select>
                {errors.category && <div className="error-message">{errors.category}</div>}
              </div>
              
              {/* Resim Yükleme Alanı */}
              <div className="form-group">
                <label>Ürün Resimleri (Maks. 6 adet)</label>
                <div 
                  className={`file-upload-area ${isDragging ? 'dragging' : ''} ${errors.images ? 'error' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current.click()}
                >
                  <FiUpload className="upload-icon" />
                  <p>Resim yüklemek için tıklayın veya sürükleyin</p>
                  <span>JPG, PNG veya WebP (Maks. 5MB)</span>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    multiple // Çoklu seçime izin ver
                    onChange={handleFileSelect}
                  />
                </div>
                {errors.images && <div className="error-message">{errors.images}</div>}
              </div>
              
              {/* Resim Önizleme Alanı */}
              {formState.images.length > 0 && (
                <>
                  <div className="images-header">
                    <div className="images-counter">
                      <FiImage /> {formState.images.length}/6 resim
                    </div>
                    <button 
                      type="button" 
                      className="clear-all-images"
                      onClick={clearAllImages}
                    >
                      <FiTrash2 /> Tümünü Temizle
                    </button>
                  </div>
                  
                  <div className="images-container">
                    {formState.images.map((image, index) => (
                      <div key={index} className="image-preview-item">
                        <img src={image.preview || image.url} alt={`Ürün resmi ${index + 1}`} />
                        <button 
                          type="button"
                          className="remove-image"
                          onClick={() => removeImage(index)}
                        >
                          <FiX />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {/* Form Butonları */}
              <div className="form-buttons">
                <button type="button" className="cancel-button" onClick={onClose}>
                  İptal
                </button>
                <button type="submit" className="submit-button">
                  {isEditMode ? 'Güncelle' : 'Ekle'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal; 