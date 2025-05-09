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
  // Statik ürün listesi
  const staticProducts = [
    // RAM Ürünleri
    {
      id: 1,
      name: 'Swissbit 2GB PC2-5300U',
      description: 'Masaüstü bilgisayarlar için 2GB DDR2 RAM, 667MHz, PC2-5300U. Tüm masaüstü sistemlerle uyumludur ve performans artışı sağlar.',
      category: 'RAM',
      img1: '/src/products_img/Swissbit_2GB_PC2-5300U-555.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 2,
      name: 'Apacer M.2 PCIe Gen3 x4 SSD 512GB',
      description: 'Masaüstü bilgisayarlar için yüksek performanslı M.2 SSD bellek modülü. Sistem performansınızı artırır ve çoklu görevlerde bilgisayarınızı hızlandırır.',
      category: 'SSD',
      img1: '/src/products_img/ram/WhatsApp Görsel 2025-05-08 saat 10.29.55_acf8a1d7.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 3,
      name: 'HIKVISION E3000 NVMe SSD',
      description: 'Yüksek hızlı NVMe SSD bellek modülü. 3500MB/s hıza kadar okuma. Oyun ve iş uygulamaları için ideal performans sağlar.',
      category: 'SSD',
      img1: '/src/products_img/ram/WhatsApp Görsel 2025-05-08 saat 10.29.56_49b287a9.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 4,
      name: 'VORTEX DDR4 Gaming RAM',
      description: 'Yüksek performanslı DDR4 Gaming RAM. Oyun sistem performansınızı artırmak ve uygulamaların daha hızlı açılmasını sağlamak için ideal yükseltme seçeneği.',
      category: 'RAM',
      img1: '/src/products_img/ram/WhatsApp Görsel 2025-05-08 saat 10.29.57_407ccc0d.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 5,
      name: 'Apacer PANTHER DDR3 RAM',
      description: 'Yüksek kaliteli Apacer PANTHER DDR3 RAM bellek modülü. Çoklu programlı çalışma ortamları ve bellek yoğun uygulamalar için uygun çözüm.',
      category: 'RAM',
      img1: '/src/products_img/ram/WhatsApp Görsel 2025-05-08 saat 10.30.00_2a9af15c.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // SSD Ürünleri
    {
      id: 6,
      name: 'MLD M500 ULTRA SSD 2TB',
      description: 'Yüksek hızlı MLD M500 ULTRA SSD, 2TB kapasiteli, hızlı veri transferi, düşük enerji tüketimi ve hızlı açılış sunar. Bilgisayarınızın performansını artırmak için ideal yükseltme çözümü.',
      category: 'SSD',
      img1: '/src/products_img/ssd/WhatsApp Görsel 2025-05-08 saat 10.29.58_401ea77f.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // İşlemci Ürünleri
    {
      id: 7,
      name: 'AMD Ryzen 5 İşlemci',
      description: 'AMD Ryzen 5 işlemci, yüksek performans ve verimli enerji tüketimi sunar. Çoklu görevler, oyun oynama ve içerik oluşturma için ideal. Uygun fiyatla üstün performans.',
      category: 'CPU',
      img1: '/src/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.44_b05cb502.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 8,
      name: 'Intel Core i3 İşlemci B',
      description: 'Güçlü performans sunan Intel Core i3 işlemci. Hızlı işlem gücü ve çoklu görev kabiliyeti ile tüm çalışmalarınızı kolaylıkla halledebilirsiniz.',
      category: 'CPU',
      img1: '/src/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.46_e955db34.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 9,
      name: 'Intel Core İşlemci',
      description: 'Intel Core işlemci, çok çekirdekli performans ve yüksek saat hızları sunar. Oyun ve içerik üretimi için optimize edilmiş, enerji verimli tasarım.',
      category: 'CPU',
      img1: '/src/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.47_36dfc61a.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 10,
      name: 'Intel Core i3 9100F İşlemci',
      description: 'Çok çekirdekli Intel Core i3 9100F işlemci, profesyonel iş yükleri ve günlük kullanım için tasarlanmıştır. Verimli performans sunar.',
      category: 'CPU',
      img1: '/src/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.47_cfcf85b3.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 11,
      name: 'Intel Core i3 9100 İşlemci',
      description: 'Intel Core i3 9100 işlemci serisi, güçlü performansı ve rekabetçi fiyatlarıyla tanınır. İleri teknoloji üretim süreci ile daha verimli çalışma imkanı sunar.',
      category: 'CPU',
      img1: '/src/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.49_affc8c17.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 12,
      name: 'AMD Ryzen 7 İşlemci',
      description: 'Son teknoloji AMD Ryzen 7 işlemci, yüksek hızda veri işleme ve güçlü grafik performansı sunar. Çoklu görevler için idealdir.',
      category: 'CPU',
      img1: '/src/products_img/processor/WhatsApp Görsel 2025-05-08 saat 10.29.51_82ee7d53.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // Anakart Ürünleri
    {
      id: 13,
      name: 'MSI Anakart A',
      description: 'MSI anakart, dayanıklılık ve güvenilirlik sunar. Gelişmiş soğutma çözümleri, güçlü VRM tasarımı ve geniş bağlantı seçenekleri ile donatılmış. Oyuncular ve performans meraklıları için ideal.',
      category: 'MOTHERBOARD',
      img1: '/src/products_img/motherboards/WhatsApp Görsel 2025-05-08 saat 10.29.51_0bfb5927.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 14,
      name: 'ASUS PRIME B450M-K II Anakart',
      description: 'Yüksek performanslı ASUS PRIME B450M-K II anakart, aşırtılabilirlik özellikleri ve gelişmiş soğutma çözümleri ile güçlü sistem bileşenlerini sorunsuz çalıştırır. Çoklu GPU ve hızlı bellek desteği sunar.',
      category: 'MOTHERBOARD',
      img1: '/src/products_img/motherboards/WhatsApp Görsel 2025-05-08 saat 10.29.53_a627a80c.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // Hard Disk Ürünleri
    {
      id: 15,
      name: 'BUGATEK X 2.5" SATA SSD',
      description: 'BUGATEK X 2.5" SATA SSD, yüksek kapasiteli veri depolama çözümü sunar. Güvenilir performans, uzun ömür ve dayanıklılık. Tüm verileriniz için geniş depolama alanı.',
      category: 'SSD',
      img1: '/src/products_img/hard disk/WhatsApp Görsel 2025-05-08 saat 10.29.56_66474730.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // Güç Kaynağı Ürünleri
    {
      id: 16,
      name: 'EVEREST 250W Güç Kaynağı',
      description: 'EVEREST 250W güç kaynağı. Güvenilir performans, düşük gürültü ve enerji verimliliği. Yüksek kaliteli bileşenler uzun ömür sağlar.',
      category: 'POWER_SUPPLY',
      img1: '/src/products_img/power_supply/WhatsApp Görsel 2025-05-08 saat 10.29.52_2b16e4da.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // Mouse Ürünleri
    {
      id: 17,
      name: 'EVEREST Kablosuz Mouse',
      description: 'Ergonomik tasarımlı EVEREST kablosuz mouse. Uzun pil ömrü, hassas takip ve geniş çalışma mesafesi. Konforlu kullanım için ideal.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.17_9ec30f2a.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 18,
      name: 'Logitech Kablosuz Mouse',
      description: 'Profesyonel performans sunan Logitech kablosuz mouse. Yüksek DPI hassasiyeti, uzun pil ömrü ve güvenilir bağlantı sunar.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.18_029d2785.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 19,
      name: 'EVEREST Kablosuz Mouse',
      description: 'Profesyonel oyuncular için tasarlanmış kablosuz gaming mouse. Yüksek DPI ve hassas izleme performansı sunar.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.20_4e3464c4.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 20,
      name: 'MYTECH EAGLE Gaming Mouse',
      description: 'RGB aydınlatmalı MYTECH EAGLE gaming mouse. Programlanabilir tuşlar ve ergonomik tasarıma sahiptir. Rekabetçi oyunlarda üstünlük sağlar.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.21_e8560183.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 21,
      name: 'MYTECH GAMY Gaming Mouse',
      description: 'FPS ve MOBA oyunları için optimize edilmiş MYTECH GAMY gaming mouse. Hızlı tepki süresi ve hassas izleme sunar.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.24_52860e8a.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 22,
      name: 'EVEREST X-HOLE Gaming Mouse',
      description: 'RGB aydınlatmalı EVEREST X-HOLE gaming mouse, hassas optik sensöre sahip. Hafif ve ergonomik tasarımıyla uzun süreli oyun keyfine uygun.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.26_6c069eaf.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 23,
      name: 'EVEREST Optical Mouse',
      description: 'Ergonomik tasarımlı EVEREST optik mouse. Hassas sensörü ve dayanaklı yapısıyla uzun süreli kullanımlarda bile konfor sağlar.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.29_17f449bf.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 24,
      name: 'EVEREST Kablosuz Mouse',
      description: 'Hem ofis hem günlük kullanım için tasarlanmış kablosuz mouse. Enerji tasarruflu yapısı ve hassas sensörüyle her yüzeyde çalışır.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.34_a4e8e091.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 25,
      name: 'BUGATEK Gaming Mouse',
      description: 'Ergonomik tasarımı ve ağırlık sistemi ile kişiselleştirilebilir BUGATEK gaming mouse. Yüksek DPI değerleri ile hassas kontrol sağlar. Oyunlar için özel tasarlanmıştır.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.37_5aef06f9.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 26,
      name: 'EVEREST LASER Mouse',
      description: 'Hassas lazer sensörlü EVEREST mouse. Yüksek hassasiyet ve hızlı tepki süresi sunar. Her yüzeyde sorunsuz çalışır.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.41_eafa5626.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 27,
      name: 'MMORPG Gaming Mouse',
      description: 'Çok tuşlu RGB aydınlatmalı gaming mouse. Makro özelliği ve programlanabilir tuşları ile strateji ve MMORPG oyunları için idealdir.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.42_0893e03f.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 28,
      name: 'INCA Gaming Mouse',
      description: 'Hafif tasarımlı hızlı tepkiye sahip INCA gaming mouse. RGB aydınlatmalı ve ergonomik. FPS oyunlarında yüksek performans sağlar.',
      category: 'MOUSE',
      img1: '/src/products_img/mouse/WhatsApp Görsel 2025-05-08 saat 10.29.44_115fe9d5.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // Klavye Ürünleri
    {
      id: 29,
      name: 'STEEP SOLID Mouse & Klavye Seti',
      description: 'STEEP SOLID mouse ve klavye seti. Oyun ve günlük kullanıma uygun, dayanıklı yapı ve ergonomik tasarım. Bluetooth ve kablolu bağlantı seçenekleri.',
      category: 'KEYBOARD',
      img1: '/src/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.12_7f07a5ab.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 30,
      name: 'BUGATEK Mekanik Oyuncu Klavyesi',
      description: 'BUGATEK markalı tam boyutlu mekanik oyuncu klavyesi. RGB aydınlatma, hızlı tepki süresi ve özel oyun modu. Dayanıklı metal gövde ve ergonomik tasarım.',
      category: 'KEYBOARD',
      img1: '/src/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.13_efd47949.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 31,
      name: 'ZET Gaming RGB Klavye',
      description: 'Full RGB aydınlatmalı ZET markalı mekanik klavye. Her tuşu programlayabilir ve özelleştirebilirsiniz. Rekabetçi oyunlar için üst düzey performans.',
      category: 'KEYBOARD',
      img1: '/src/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.14_12e17bd3.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 32,
      name: 'EVEREST KB-871U Klavye',
      description: 'EVEREST KB-871U model kablolu klavye. İnce tasarımlı, düşük profilli ve dayanaklı yapı. Bilgisayar için mükemmel çözüm.',
      category: 'KEYBOARD',
      img1: '/src/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.14_1a816f93.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 33,
      name: '@LIC T60 MECHANICAL Kablosuz Klavye',
      description: '@LIC T60 MECHANICAL kablosuz mekanik klavye. Kompakt 60% boyutu, ergonomik tasarım ve uzun pil ömrü. Oyun ve ofis kullanımı için uygun.',
      category: 'KEYBOARD',
      img1: '/src/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.15_a46b138a.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 34,
      name: 'K-06 Kablosuz Klavye ve Mouse Seti',
      description: 'K-06 model 2.4G kablosuz klavye ve mouse seti. Ultra ince tasarım, sessiz tuşlar ve düşük enerji tüketimi. Ofis ve ev kullanımı için ideal.',
      category: 'KEYBOARD',
      img1: '/src/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.16_0ba474cf.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 35,
      name: 'Mouse & Keyboard KIT',
      description: 'Renkli seçenekleri olan Mouse & Keyboard KIT seti. Makro özellikli tuşlar ve özel tasarım. Farklı renk seçenekleriyle kullanıcı deneyimini zenginleştirir.',
      category: 'KEYBOARD',
      img1: '/src/products_img/keyboard/WhatsApp Görsel 2025-05-08 saat 10.29.18_6fbbc045.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // Monitör Ürünleri
    {
      id: 36,
      name: 'AOC LCD Monitör',
      description: 'Yüksek çözünürlüklü AOC LCD monitör. Canlı renkler, geniş görüntüleme açısı ve göz koruma teknolojisi ile donatılmıştır. Ofis kullanımı ve günlük multimedya izleme için idealdir.',
      category: 'MONITOR',
      img1: '/src/products_img/Monitör/WhatsApp Görsel 2025-05-08 saat 10.28.22_a5591b79.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // Bilgisayar Ürünleri
    {
      id: 37,
      name: 'Apple iMac Bilgisayar',
      description: 'Yüksek performanslı Apple iMac masaüstü bilgisayar. Güçlü işlemci, bol RAM ve geniş depolama alanı. Tasarım, ofis çalışmaları ve içerik üretimi için ideal çözüm.',
      category: 'COMPUTER',
      img1: '/src/products_img/pc/WhatsApp Görsel 2025-05-08 saat 10.28.23_908833a1.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    
    // Kulaklık Ürünleri
    {
      id: 38,
      name: 'MYTECH GAMER Oyuncu Kulaklığı',
      description: 'MYTECH GAMER model surround ses destekli oyuncu kulaklığı. Uzun süreli kullanım için konforlu tasarım, gürültü önleyici mikrofon ve net ses kalitesi.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.46_8668d28c.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 39,
      name: 'RAMPAGE VECTOR Oyuncu Kulaklığı',
      description: 'RAMPAGE VECTOR RGB aydınlatmalı oyuncu kulaklığı. 7.1 surround ses, bas çıkışı güçlü, net ve berrak ses sunar. FPS oyunları için yönsel ses algılama özelliğini destekler.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.50_95fd68b0.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 40,
      name: 'SNOPY SN-301 Oyuncu Kulaklığı',
      description: 'SNOPY SN-301 ayarlanabilir mikrofona sahip oyuncu kulaklığı. Ergonomik tasarım, kırmızı renk vurgulu. Rekabetçi oyunlar için avantaj sağlar ve takım arkadaşlarınızla net iletişim kurmanızı sağlar.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.52_af58183f.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 41,
      name: 'SNOPY SN-4355 Kulaklık',
      description: 'SNOPY SN-4355 siyah renkli kulaklık. Yüksek kaliteli ses performansı sunan mikrofonlu kulaklık. Ergonomik tasarımı ve dayanıklı kablosu ile günlük kullanım için ideal.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.54_da9cd50b.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 42,
      name: 'REDPHONE STARK RGB Gaming Kulaklık',
      description: 'REDPHONE STARK RGB Gaming kulaklık. Kaliteli ses performansı ve gürültü önleyici özellik. RGB aydınlatması ile oyun deneyiminizi güçlendirir.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.56_e0cf8cd8.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 43,
      name: 'HP H2800 Kulaklık',
      description: 'HP H2800 model kulaklık. Hafif ve dayanıklı tasarım. Konforlu kulaklık pedleri, uzun süreli kullanıma uygun. Ofis ve günlük kullanım için ideal.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.28.58_d6166e33.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 44,
      name: 'EXTRA BASS Bluetooth Kulaklık',
      description: 'EXTRA BASS teknolojili Bluetooth bağlantılı kablosuz kulaklık. Güçlü bas performansı, uzun pil ömrü ve gürültü engelleme özelliğine sahiptir.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.00_6a134874.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 45,
      name: 'BlueTech Gaming Kulaklık',
      description: 'BlueTech gaming kulaklık. RGB aydınlatma, özel oyun modu ve gürültü önleyici mikrofon. FPS ve strateji oyunları için ideal tasarım.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.03_d42c0300.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 46,
      name: 'ALTEC LANSING Oyuncu Kulaklığı',
      description: 'ALTEC LANSING profesyonel oyuncu kulaklığı. Üst düzey ses performansı, konforlu tasarım ve gürültü önleyici mikrofon. Uzun saatler süren oyun maratonları için ideal.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.05_130ff1c7.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 47,
      name: 'PURE BASS Kablosuz Kulaklık',
      description: 'PURE BASS kablosuz kulaklık. Yüksek kaliteli bas performansı, ergonomik tasarım ve uzun pil ömrü. Müzik dinlemek için ideal ses deneyimi sunar.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.07_32bc8ae7.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    },
    {
      id: 48,
      name: 'ALTEC LANSING Oyuncu Kulaklığı',
      description: 'ALTEC LANSING profesyonel oyuncu kulaklığı. Üst düzey ses performansı, konforlu tasarım ve gürültü önleyici mikrofon. Uzun saatler süren oyun maratonları için ideal.',
      category: 'EARPHONES',
      img1: '/src/products_img/earphones/WhatsApp Görsel 2025-05-08 saat 10.29.08_d24e7836.jpg',
      img2: null,
      img3: null, 
      img4: null,
      img5: null,
      img6: null
    }
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

  // Pop-up açıkken arka tarafı devre dışı bırakmak için body'ye overflow: hidden ekle
  useEffect(() => {
    if (showDetailModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup: Modal kapandığında overflow'u geri al
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showDetailModal]);

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

  // Sayfa yüklenirken filtreleme etkisini kontrol et
  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory]);
  
  // Sayfa ilk yüklendiğinde tüm ürünleri göster
  useEffect(() => {
    filterProducts();
  }, []);

  const filterProducts = () => {
    let result = [...staticProducts];
    
    // Arama terimini uygula
    if (searchTerm && searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      );
    }
    
    // Kategori filtresini uygula
    if (selectedCategory && selectedCategory !== '') {
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
                className="category-select"
              >
                <option value="">Tüm Kategoriler</option>
                {PRODUCT_CATEGORIES.map(category => {
                  // Kategorideki ürün sayısını hesapla
                  const productCount = staticProducts.filter(product => product.category === category).length;
                  return (
                    <option key={category} value={category}>
                      {CATEGORY_TRANSLATIONS[category]} ({productCount})
                    </option>
                  );
                })}
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