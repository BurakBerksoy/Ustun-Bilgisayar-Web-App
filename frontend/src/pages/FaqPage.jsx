import React from 'react';
import { Helmet } from 'react-helmet-async';

const FaqPage = () => {
  const computerQuestions = [
    // Bilgisayar Genel Sorunları
    "Bilgisayarım çok yavaş çalışıyor ne yapmalıyım?",
    "Bilgisayarım sürekli donuyor nasıl düzeltebilirim?",
    "Bilgisayarım açılmıyor ne yapabilirim?",
    "Bilgisayarımdan garip sesler geliyor sebebi ne olabilir?",
    "Bilgisayarım çok ısınıyor nasıl çözebilirim?",
    "Bilgisayar fan sesi çok yüksek nasıl düzeltirim?",
    "BSOD (Mavi Ekran) hatası nasıl çözülür?",
    "Bilgisayarım kendiliğinden kapanıyor ne yapmalıyım?",
    "Bilgisayarım sürekli yeniden başlıyor sebebi nedir?",
    "Ekranım titriyor nasıl düzeltebilirim?",
    
    // Donanım Sorunları
    "Bilgisayar RAM belleği nasıl arttırılır?",
    "HDD'den SSD'ye nasıl geçilir?",
    "Ekran kartı nasıl değiştirilir?",
    "İşlemci nasıl değiştirilir?",
    "Anakart nasıl değiştirilir?",
    "RAM (bellek) nasıl değiştirilir?",
    "Bilgisayar kasası nasıl değiştirilir?",
    "Power Supply (Güç Kaynağı) nasıl değiştirilir?",
    "Ekran kartı sürücüleri nasıl güncellenir?",
    "Bilgisayar fanı nasıl temizlenir?",
    
    // Laptop Sorunları
    "Laptop şarj olmuyor nasıl tamir edilir?",
    "Laptop bataryası çabuk bitiyor ne yapmalıyım?",
    "Laptop ekranı çalışmıyor nasıl düzeltebilirim?",
    "Laptop klavyesi bazı tuşlar çalışmıyor ne yapmalıyım?",
    "Laptop menteşesi kırıldı nasıl tamir edilir?",
    "Laptop touchpad çalışmıyor nasıl düzeltebilirim?",
    "Laptop ekranı kırıldı değiştirmek ne kadar?",
    "Laptop sürekli ısınıyor nasıl çözülür?",
    "Laptop uyku modundan çıkmıyor ne yapmalıyım?",
    "Laptop ses gelmiyor nasıl düzeltebilirim?",
    
    // Yazılım Sorunları
    "Windows açılmıyor nasıl düzeltebilirim?",
    "Windows lisansı nasıl yenilenir?",
    "Windows güncelleme hatası nasıl çözülür?",
    "Mavi ekran hatası (BSOD) nasıl giderilir?",
    "Virüsten nasıl kurtulunur?",
    "Bilgisayar format atmak gerekir mi?",
    "Format nasıl atılır?",
    "Windows yavaş açılıyor nasıl hızlandırılır?",
    "Driver (sürücü) sorunları nasıl çözülür?",
    "Programlar çalışmıyor ne yapmalıyım?",
    
    // Ekran Sorunları
    "Ekran titremesi nasıl düzeltilir?",
    "Ekrandan görüntü gelmiyor ne yapmalıyım?",
    "Ekranda siyah noktalar var nasıl giderilir?",
    "Ekran kırıldı kaça mal olur?",
    "Ekran renkleri bozuk nasıl düzeltilir?",
    "Monitor görüntü vermiyor nasıl çözülür?",
    "İkinci ekran bağlantısı nasıl yapılır?",
    "Ekran çözünürlüğü nasıl değiştirilir?",
    "Ekran parlaklığı ayarlanmıyor nasıl düzeltilir?",
    "Ekranda yatay/dikey çizgiler var ne yapmalıyım?",
    
    // Depolama Sorunları
    "Sabit disk (HDD) arızası nasıl anlaşılır?",
    "SSD performansı düştü nasıl hızlandırılır?",
    "Disk biçimlendirme nasıl yapılır?",
    "Silinen dosyalar nasıl kurtarılır?",
    "HDD'den veri kurtarma nasıl yapılır?",
    "Sabit disk kapasitesi nasıl artırılır?",
    "Disk bölümleme nasıl yapılır?",
    "Dosya sistemi bozuldu nasıl düzeltilir?",
    "USB bellek tanınmıyor nasıl çözülür?",
    "Hard disk sesi geliyor, tehlikeli mi?",
    
    // Ağ/İnternet Sorunları
    "İnternet bağlantısı kopuyor nasıl düzeltilir?",
    "Wi-Fi bağlantısı yavaş nasıl hızlandırılır?",
    "Router kurulumu nasıl yapılır?",
    "Ethernet bağlantısı çalışmıyor nasıl düzeltilir?",
    "IP adresi çakışması nasıl çözülür?",
    "DNS sorunları nasıl giderilir?",
    "Website erişimi engellendi nasıl açılır?",
    "İnternet güvenliği nasıl sağlanır?",
    "VPN kurulumu nasıl yapılır?",
    "İnternet bağlantısı gizliliği nasıl korunur?",
    
    // Güvenlik Sorunları
    "Bilgisayarıma virüs bulaştı ne yapmalıyım?",
    "Antivirüs programları gerekli mi?",
    "Ransomware (fidye virüsü) nasıl temizlenir?",
    "Trojan virüsü nasıl temizlenir?",
    "Bilgisayarım çok yavaşladı virüs olabilir mi?",
    "Şifrelenen dosyaları kurtarma yöntemleri nelerdir?",
    "Parola güvenliği nasıl sağlanır?",
    "Güvenli internet kullanımı nasıl olmalı?",
    "Çocuklar için internet güvenliği nasıl sağlanır?",
    "Antivirus programları gerçekten gerekli mi?",
    
    // Performans İyileştirme
    "Bilgisayar nasıl hızlandırılır?",
    "Oyun performansı nasıl artırılır?",
    "Windows açılış hızı nasıl artırılır?",
    "RAM temizleme nasıl yapılır?",
    "Disk temizleme nasıl yapılır?",
    "Bilgisayar optimizasyonu nasıl yapılır?",
    "Windows yavaşlama sorunu nasıl çözülür?",
    "SSD optimizasyonu nasıl yapılır?",
    "Önbellek temizliği nasıl yapılır?",
    "Gereksiz programlar nasıl kaldırılır?",
    
    // Mouse/Klavye Sorunları
    "Mouse çalışmıyor nasıl düzeltilir?",
    "Klavye bazı tuşlar çalışmıyor ne yapmalıyım?",
    "Kablosuz mouse bağlantı sorunu nasıl çözülür?",
    "Mouse imleci kayboluyor nasıl düzeltilir?",
    "Mouse hassasiyeti nasıl ayarlanır?",
    "Klavyede tuş takılması sorunu nasıl çözülür?",
    "Gaming mouse ayarları nasıl yapılır?",
    "Mouse tekerleği çalışmıyor nasıl tamir edilir?",
    "Klavye ışıkları çalışmıyor nasıl düzeltilir?",
    "Mouse çift tıklama sorunu nasıl çözülür?",
    
    // Oyun Sorunları
    "Oyun FPS düşüklüğü nasıl çözülür?",
    "Oyun sürekli donuyor (freeze) nasıl düzeltilir?",
    "Oyundan düşme (crash) sorunu nasıl çözülür?",
    "Oyun sesinde cızırtı var nasıl düzeltilir?",
    "Oyun FPS sayacı nasıl açılır?",
    "Oyunlarda ekran yırtılması (screen tearing) nasıl çözülür?",
    "Oyun güncellemeleri yapılmıyor nasıl düzeltilir?",
    "Oyun kontrollerinde gecikme (input lag) nasıl azaltılır?",
    "Gaming PC nasıl soğuk tutulur?",
    "Oyun performansı nasıl artırılır?",
    
    // Ses Sorunları
    "Bilgisayardan ses gelmiyor nasıl düzeltilir?",
    "Mikrofon çalışmıyor nasıl tamir edilir?",
    "Hoparlörlerden cızırtı geliyor nasıl düzeltilir?",
    "Kulaklık çalışmıyor nasıl düzeltilir?",
    "Ses kartı sürücüleri nasıl güncellenir?",
    "Mikrofon hassasiyeti nasıl ayarlanır?",
    "Windows ses hataları nasıl çözülür?",
    "USB kulaklık tanınmıyor nasıl düzeltilir?",
    "Ses seviyesi düşük nasıl yükseltilir?",
    "Bluetooth kulaklık bağlantı sorunu nasıl çözülür?",
    
    // Kamera/Webcam Sorunları
    "Webcam çalışmıyor nasıl düzeltilir?",
    "Webcam görüntüsü bozuk nasıl düzeltilir?",
    "Webcam sürücüleri nasıl güncellenir?",
    "Zoom/Teams görüntüsü gelmiyor nasıl çözülür?",
    "Webcam ışığı yanıyor ama görüntü yok nasıl düzeltilir?",
    "Webcam otomatik açılıyor nasıl kapatılır?",
    "Webcam doğru çalışmıyor ne yapmalıyım?",
    "Windows kamera ayarları nasıl yapılır?",
    "Webcam gizlilik ayarları nasıl yapılır?",
    "Dahili kamera görüntüsü bulanık nasıl düzeltilir?",
    
    // Güç/Batarya Sorunları
    "Bilgisayar adaptörü çalışmıyor nasıl tamir edilir?",
    "UPS (Kesintisiz güç kaynağı) nasıl seçilir?",
    "Bilgisayar batarya ömrü nasıl uzatılır?",
    "Güç kaynağı (PSU) watt hesaplaması nasıl yapılır?",
    "Laptop pili şarj olmuyor nasıl düzeltilir?",
    "Bilgisayar elektrik kesintisinde kapanıyor nasıl önlenir?",
    "Düşük voltaj koruması nasıl sağlanır?",
    "Güç düğmesi çalışmıyor nasıl tamir edilir?",
    "Elektrik kesintisi veri kaybına neden olur mu?",
    "Laptop pil kalibrasyonu nasıl yapılır?",
    
    // İşletim Sistemi Sorunları
    "Windows lisansı nasıl aktive edilir?",
    "Windows activation hatası nasıl çözülür?",
    "Windows güvenli modda nasıl açılır?",
    "Windows başlangıç onarımı nasıl yapılır?",
    "Mac işletim sistemi nasıl yüklenir?",
    "Linux kurulumu nasıl yapılır?",
    "İşletim sistemi nasıl değiştirilir?",
    "Windows 10'dan Windows 11'e nasıl yükseltilir?",
    "İşletim sistemi yedekleme nasıl yapılır?",
    "Disk bölümleme (partition) nasıl yapılır?",
    
    // Ümraniye Bölgesi Özel Sorular
    "Ümraniye'de bilgisayar tamiri yapan yerler nerede?",
    "Ümraniye laptop tamiri fiyatları ne kadar?",
    "Ümraniye bilgisayar servisi tavsiye?",
    "Ümraniye'de aynı gün bilgisayar tamiri yapan yer var mı?",
    "Ümraniye'de ekran değişimi yapan yerler?",
    "Ümraniye bilgisayar tamiri ücretleri?",
    "Ümraniye'de hafta sonu açık bilgisayar tamircisi var mı?",
    "Ümraniye'de bilgisayar kurulumu yapan yerler?",
    "Ümraniye'de bilgisayar parçası satan yerler?",
    "Ümraniye evde bilgisayar tamiri yapan servisler?",
    
    // Profesyonel Bilgisayar Servisi
    "Yerinde bilgisayar tamiri avantajları nelerdir?",
    "Bilgisayar tamiri ne kadar sürer?",
    "Bilgisayar tamiri garanti kapsamına girer mi?",
    "Profesyonel bilgisayar bakımı nasıl yapılır?",
    "Uzaktan bilgisayar desteği nasıl alınır?",
    "Bilgisayar servisi seçerken nelere dikkat edilmeli?",
    "Bilgisayar tamiri için yedek parça nasıl seçilir?",
    "Bilgisayar tamiri için servis anlaşması yapmalı mıyım?",
    "Kurumsal bilgisayar bakım anlaşması nasıl yapılır?",
    "Bilgisayar tamiri sırasında verilerim güvende mi?",
    
    // Marka Özel Bilgisayar Sorunları
    "Dell laptop açılmıyor nasıl tamir edilir?",
    "HP laptop ekran sorunu nasıl çözülür?",
    "Asus laptop sürekli kapanıyor ne yapmalıyım?",
    "Lenovo bilgisayar çok yavaş nasıl hızlandırılır?",
    "Acer laptop batarya şarj olmuyor nasıl düzeltilir?",
    "MSI gaming laptop aşırı ısınma sorunu nasıl giderilir?",
    "Apple MacBook donma sorunu nasıl çözülür?",
    "Toshiba laptop ekran değişimi nasıl yapılır?",
    "Samsung laptop fan sesi yüksek nasıl düzeltilir?",
    "Sony VAIO açılmıyor nasıl tamir edilir?",
    "Microsoft Surface açılmıyor nasıl düzeltilir?",
    "Huawei MateBook şarj sorunu nasıl çözülür?",
    "Casper laptop sürücü sorunu nasıl giderilir?",
    "Monster notebook ekran kırıldı ne yapmalıyım?",
    "Excalibur bilgisayar donma sorunu nasıl çözülür?",
    
    // Yazıcı ve Tarayıcı Sorunları
    "Yazıcı çalışmıyor nasıl düzeltilir?",
    "Yazıcı kağıt sıkışması nasıl giderilir?",
    "Canon yazıcı tanınmıyor nasıl kurulur?",
    "HP yazıcı bağlantı sorunu nasıl çözülür?",
    "Epson yazıcı mürekkep sorunu nasıl giderilir?",
    "Brother yazıcı tanınmıyor ne yapmalıyım?",
    "Yazıcı kartuşu nasıl değiştirilir?",
    "Yazıcı ağa bağlanmıyor nasıl düzeltilir?",
    "Yazıcı test sayfası nasıl yazdırılır?",
    "Tarayıcı çalışmıyor ne yapmalıyım?",
    "PDF dosyası yazdırma sorunu nasıl çözülür?",
    "Çift taraflı yazdırma nasıl yapılır?",
    "Yazıcı silik yazdırıyor nasıl düzeltilir?",
    "Yazıcı yavaş yazdırıyor nasıl hızlandırılır?",
    "Kablosuz yazıcı kurulumu nasıl yapılır?",
    
    // Modem ve Router Sorunları
    "Modem kurulumu nasıl yapılır?",
    "Router şifresi nasıl değiştirilir?",
    "İnternet hızı düşük nasıl artırılır?",
    "Modem sürekli resetleniyor nasıl düzeltilir?",
    "Router güvenlik ayarları nasıl yapılır?",
    "Modem ışıkları yanmıyor ne yapmalıyım?",
    "Wifi şifresi unutuldu nasıl bulunur?",
    "Router sinyal gücü nasıl artırılır?",
    "Modem internet vermiyor nasıl düzeltilir?",
    "IPv6 ayarları nasıl yapılır?",
    "ADSL modem kurulumu nasıl yapılır?",
    "Router kanalı nasıl değiştirilir?",
    "Fiber modem kurulumu nasıl yapılır?",
    "Router aygıt yazılımı nasıl güncellenir?",
    "Wifi portu açma nasıl yapılır?",
    
    // Office ve Üretkenlik Sorunları
    "Microsoft Word belgesi açılmıyor nasıl kurtarılır?",
    "Excel dosyası bozuldu nasıl düzeltilir?",
    "PowerPoint sunumu çalışmıyor nasıl onarılır?",
    "Outlook e-postalar gönderilmiyor nasıl düzeltilir?",
    "Microsoft Office aktivasyon sorunu nasıl çözülür?",
    "Word belgesinde değişiklikler kaydedilmiyor ne yapmalıyım?",
    "Excel makroları çalışmıyor nasıl düzeltilir?",
    "Office 365 kurulum sorunu nasıl çözülür?",
    "Access veritabanı açılmıyor nasıl onarılır?",
    "PowerPoint slayt gösterisi çalışmıyor ne yapmalıyım?",
    "Word belgesine resim eklenmiyor nasıl düzeltilir?",
    "Excel formülleri çalışmıyor nasıl tamir edilir?",
    "Outlook kişileri kayboldu nasıl geri getirilir?",
    "Office güncellemeleri yapılmıyor nasıl düzeltilir?",
    "OneDrive senkronizasyon sorunu nasıl çözülür?",
    
    // Uzaktan Çalışma Sorunları
    "Zoom bağlantı sorunu nasıl çözülür?",
    "Microsoft Teams mikrofon çalışmıyor nasıl düzeltilir?",
    "Google Meet kamera açılmıyor ne yapmalıyım?",
    "VPN bağlantısı kurulamıyor nasıl çözülür?",
    "Uzak masaüstü bağlantısı sorunu nasıl giderilir?",
    "Teams toplantısında ekran paylaşımı yapılamıyor nasıl düzeltilir?",
    "Zoom ses gelmiyor nasıl çözülür?",
    "VPN yavaş nasıl hızlandırılır?",
    "TeamViewer bağlantı hatası nasıl giderilir?",
    "Skype kamera tanınmıyor nasıl düzeltilir?",
    "Slack bildirim sorunu nasıl çözülür?",
    "Discord ses sorunu nasıl giderilir?",
    "Cisco WebEx bağlantı sorunu nasıl çözülür?",
    "Uzaktan çalışmada internet bağlantısı optimizasyonu nasıl yapılır?",
    "Uzak masaüstü yetkilendirme sorunu nasıl çözülür?",
    
    // İnternet Tarayıcı Sorunları
    "Chrome yavaş çalışıyor nasıl hızlandırılır?",
    "Firefox açılmıyor nasıl düzeltilir?",
    "Edge tarayıcı çöküyor nasıl çözülür?",
    "Safari sayfaları yüklenmiyor ne yapmalıyım?",
    "Opera yüksek RAM kullanıyor nasıl düzeltilir?",
    "İnternet tarayıcıda çerezler nasıl temizlenir?",
    "Chrome geçmiş silme nasıl yapılır?",
    "Firefox şifreleri görüntüleme nasıl yapılır?",
    "Edge ana sayfası değiştirme nasıl yapılır?",
    "İnternet tarayıcı uzantıları nasıl kaldırılır?",
    "Chrome uzantıları nasıl devre dışı bırakılır?",
    "Firefox güvenli mod nasıl açılır?",
    "Tarayıcı önbelleği temizleme nasıl yapılır?",
    "Tarayıcı açılış sayfaları nasıl değiştirilir?",
    "Tarayıcıda otomatik form doldurma nasıl kapatılır?",
    
    // Gizlilik ve Güvenlik Sorunları
    "Şifre yöneticisi nasıl kullanılır?",
    "İki faktörlü kimlik doğrulama nasıl kurulur?",
    "Windows güvenlik duvarı nasıl yapılandırılır?",
    "VPN nasıl kullanılır?",
    "Tarayıcı geçmişi nasıl tamamen silinir?",
    "Google hesabı güvenlik kontrolü nasıl yapılır?",
    "Windows güvenlik açığı taraması nasıl yapılır?",
    "Kimlik hırsızlığından nasıl korunulur?",
    "WhatsApp mesajları nasıl şifrelenir?",
    "Güvenli şifre oluşturma yöntemleri nelerdir?",
    "Dosya şifreleme nasıl yapılır?",
    "Hard disk şifreleme nasıl yapılır?",
    "Keylogger tespit etme ve kaldırma nasıl yapılır?",
    "Sosyal medya hesapları güvenliği nasıl sağlanır?",
    "E-posta güvenliği nasıl artırılır?",
    
    // Veri Yedekleme ve Kurtarma
    "Windows sistem yedeği nasıl alınır?",
    "Otomatik yedekleme nasıl ayarlanır?",
    "Bulut yedekleme hizmetleri nasıl kullanılır?",
    "Hard diskten silinen dosyalar nasıl kurtarılır?",
    "SSD'den veri kurtarma mümkün mü?",
    "Windows sistem geri yükleme noktası nasıl oluşturulur?",
    "Google Drive yedekleme nasıl yapılır?",
    "iCloud yedekleme nasıl yapılır?",
    "Telefon yedekleme ve bilgisayara aktarma nasıl yapılır?",
    "Yedekleme planı nasıl oluşturulur?",
    "Harici disk yedeği nasıl alınır?",
    "NAS cihazına yedekleme nasıl yapılır?",
    "Formatlanan bilgisayardan veri kurtarma nasıl yapılır?",
    "Yedekleme için en iyi programlar hangileridir?",
    "Veri kurtarma servisleri ne kadar ücret talep eder?",
    
    // Bulut ve Depolama Sorunları
    "Google Drive senkronizasyon sorunu nasıl çözülür?",
    "OneDrive dosya paylaşımı nasıl yapılır?",
    "Dropbox hesabı nasıl yedeklenir?",
    "iCloud depolama alanı nasıl artırılır?",
    "Bulut depolama şifresi nasıl değiştirilir?",
    "Google Fotoğraflar yedekleme sorunu nasıl çözülür?",
    "Bulut servisinde silinen dosyalar nasıl kurtarılır?",
    "Bulut depolama güvenliği nasıl sağlanır?",
    "Bulut depolama hizmetleri arasında dosya taşıma nasıl yapılır?",
    "Onedrive dosyaları yerel bilgisayara indirme nasıl yapılır?",
    "Dropbox klasörünü taşıma nasıl yapılır?",
    "iCloud Windows'ta nasıl kurulur?",
    "Bulut depolama şifreli dosya saklama nasıl yapılır?",
    "Bulut depolama hizmetleri arasında otomatik senkronizasyon nasıl yapılır?",
    "Google Drive tam yedekleme nasıl yapılır?",
    
    // Akıllı Ev ve IoT Cihaz Sorunları
    "Akıllı ev cihazları bilgisayara nasıl bağlanır?",
    "Alexa bilgisayarla nasıl senkronize edilir?",
    "Google Home cihazı bilgisayardan nasıl kontrol edilir?",
    "IoT cihazları için güvenlik önlemleri nelerdir?",
    "Akıllı ev ağı nasıl kurulur?",
    "Akıllı ampuller bilgisayardan nasıl kontrol edilir?",
    "Akıllı termostat kurulumu nasıl yapılır?",
    "Akıllı kilitler ve bilgisayar entegrasyonu nasıl sağlanır?",
    "Akıllı TV bilgisayara nasıl bağlanır?",
    "Akıllı ev kamerası kurulumu nasıl yapılır?",
    "IoT cihazları güncellemeleri nasıl kontrol edilir?",
    "Akıllı ev güvenlik sistemi nasıl kurulur?",
    "Akıllı ev asistanı komutları nasıl özelleştirilir?",
    "IFTTT ile akıllı ev otomasyonu nasıl yapılır?",
    "Akıllı prizler bilgisayardan nasıl programlanır?",
    
    // 3D Yazıcı ve Maker Teknolojileri
    "3D yazıcı bilgisayara nasıl bağlanır?",
    "3D baskı için model dosyası nasıl hazırlanır?",
    "3D yazıcı kalibrasyonu nasıl yapılır?",
    "3D yazıcı yazılım kurulumu nasıl yapılır?",
    "3D yazıcı ısıtıcı yatak sorunu nasıl çözülür?",
    "3D yazıcı filament değişimi nasıl yapılır?",
    "Arduino bilgisayara nasıl bağlanır?",
    "Raspberry Pi ilk kurulum nasıl yapılır?",
    "CNC bilgisayar bağlantısı nasıl kurulur?",
    "3D modellemede bilgisayar performansı nasıl artırılır?",
    "3D yazıcı sürücü hatası nasıl çözülür?",
    "Mikrodendetleyici programlama nasıl yapılır?",
    "Lazer kesici bilgisayar bağlantısı nasıl kurulur?",
    "3D tarayıcı nasıl kullanılır?",
    "MOSFET'ler neden yanar ve nasıl önlenir?",
    
    // E-Ticaret ve Online İşlemler
    "Online alışveriş güvenliği nasıl sağlanır?",
    "E-ticaret sitelerinde güvenli ödeme nasıl yapılır?",
    "Online banka hesabı güvenliği nasıl artırılır?",
    "E-imza nasıl alınır ve kullanılır?",
    "E-Devlet şifresi nasıl alınır?",
    "Kripto para cüzdanı nasıl güvende tutulur?",
    "Online kimlik doğrulama yöntemleri nelerdir?",
    "İnternet bankacılığı güvenlik önlemleri nelerdir?",
    "Sahte e-ticaret siteleri nasıl anlaşılır?",
    "Kredi kartı bilgilerim çalındı ne yapmalıyım?",
    "E-fatura nasıl alınır ve saklanır?",
    "Mobil bankacılık uygulaması güvenliği nasıl sağlanır?",
    "Online rezervasyon sistemleri nasıl kullanılır?",
    "QR kodlar güvenli midir nasıl kontrol edilir?",
    "Dijital cüzdan uygulamaları nasıl kullanılır?"
  ];

  // Daha fazla kategori ve soru ekleyebilirsiniz...

  return (
    <div className="faq-page" style={{ padding: '20px' }}>
      <Helmet>
        <title>Bilgisayar Tamiri - En Çok Sorulan 300+ Bilgisayar Sorusu ve Yanıtları</title>
        <meta 
          name="description" 
          content="Bilgisayar ve laptop ile ilgili en sık sorulan 300+ soru ve profesyonel çözüm rehberi. Mouse, ekran, donanım, yazılım sorunları ve tamiri konularında uzman yanıtlar." 
        />
        <meta
          name="keywords"
          content="bilgisayar tamiri, laptop tamiri, bilgisayar sorunları, mouse nasıl düzeltilir, ekran tamiri, bilgisayar donuyor, bilgisayar açılmıyor, bilgisayar fan sesi, bilgisayar çok ısınıyor, ümraniye bilgisayar tamiri, hdd, ssd, format atma, virüs temizleme"
        />
      </Helmet>
      
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px', fontWeight: 'bold' }}>En Çok Sorulan Bilgisayar Soruları</h1>
      
      <div>
        {computerQuestions.map((question, index) => (
          <h1 key={index} style={{ margin: '15px 0', fontWeight: 'normal', fontSize: '18px', color: '#333' }}>
            {question}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
