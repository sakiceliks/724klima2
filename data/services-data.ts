import { 
  Wrench, 
  Settings, 
  RefreshCw, 
  Wind, 
  Layout, 
  Monitor, 
  Home, 
  Building2, 
  Layers, 
  Cpu, 
  Zap 
} from 'lucide-react';

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: any;
  category: 'hizmet' | 'tip';
  features: string[];
  warranty?: string;
  images?: string[];
  faqs?: { question: string; answer: string }[];
}

export const services: ServiceItem[] = [
  // Ana Hizmetler
  {
    slug: 'klima-kurulumu-ve-montaji',
    title: 'Klima Kurulumu ve Montajı',
    shortTitle: 'Kurulum',
    description: 'Yeni aldığınız veya yerini değiştirmek istediğiniz klimalarınız için profesyonel montaj hizmeti. Doğru konumlandırma ve vakumlama ile maksimum verim.',
    icon: Settings,
    category: 'hizmet',
    features: [
      'Ücretsiz yer keşfi ve kapasite hesabı',
      'Profesyonel vakumlama işlemi',
      'Bakır boru tesisatı çekimi',
      'Drenaj hattı kurulumu',
      'Elektrik bağlantı kontrolü'
    ],
    warranty: '1 Yıl İşçilik Garantisi',
    images: [
      'https://picsum.photos/seed/ac-install-1/800/600',
      'https://picsum.photos/seed/ac-install-2/800/600',
      'https://picsum.photos/seed/ac-install-3/800/600'
    ],
    faqs: [
      { question: 'Klima montajı ne kadar sürer?', answer: 'Standart bir montaj işlemi ortalama 2-3 saat sürmektedir.' },
      { question: 'Montaj yerini kim belirler?', answer: 'Uzman teknisyenlerimiz, verimlilik ve estetik açıdan en uygun yeri size önerecektir.' }
    ]
  },
  {
    slug: 'klima-tamiri-ve-ariza-onarimi',
    title: 'Klima Tamiri ve Arıza Onarımı',
    shortTitle: 'Tamir',
    description: 'Çalışmayan, soğutmayan veya gürültülü çalışan klimalarınız için hızlı arıza tespiti ve garantili onarım çözümleri.',
    icon: Wrench,
    category: 'hizmet',
    features: [
      'Kompresör tamiri ve değişimi',
      'Elektronik kart tamiri',
      'Fan motoru onarımı',
      'Gaz kaçağı tespiti ve dolumu',
      'Sensör ve termostat değişimi'
    ],
    warranty: '6 Ay Parça ve İşçilik Garantisi',
    images: [
      'https://picsum.photos/seed/ac-repair-1/800/600',
      'https://picsum.photos/seed/ac-repair-2/800/600'
    ],
    faqs: [
      { question: 'Klimam neden soğutmuyor?', answer: 'Gaz eksikliği, filtre kirliliği veya kompresör arızası en yaygın sebeplerdir.' },
      { question: 'Tamir işlemi yerinde mi yapılıyor?', answer: 'Arızaların %90\'ı yerinde giderilmektedir. Kart tamiri gibi durumlarda parça atölyeye alınabilir.' }
    ]
  },
  {
    slug: 'periyodik-klima-bakimi',
    title: 'Periyodik Klima Bakımı',
    shortTitle: 'Bakım',
    description: 'Sağlığınız ve cihazınızın ömrü için düzenli bakım şart. İlaçlı temizlik ile bakteri oluşumunu engelliyor, enerji tasarrufu sağlıyoruz.',
    icon: RefreshCw,
    category: 'hizmet',
    features: [
      'İlaçlı evaporatör temizliği',
      'Filtre temizliği ve dezenfeksiyonu',
      'Gaz basınç ölçümü',
      'Drenaj tavası temizliği',
      'Akım ve voltaj kontrolleri'
    ],
    warranty: 'Sezonluk Verim Garantisi',
    images: [
      'https://picsum.photos/seed/ac-maintenance-1/800/600',
      'https://picsum.photos/seed/ac-maintenance-2/800/600'
    ],
    faqs: [
      { question: 'Klima bakımı ne sıklıkla yapılmalı?', answer: 'Yılda en az 2 kez (yaz ve kış sezonu öncesi) yapılması önerilir.' },
      { question: 'Bakım yapılmazsa ne olur?', answer: 'Enerji sarfiyatı artar, kötü kokular oluşur ve cihazın ömrü kısalır.' }
    ]
  },
  // Klima Tipleri
  {
    slug: 'duvar-tipi-split-klima',
    title: 'Duvar Tipi Split Klima',
    shortTitle: 'Duvar Tipi',
    description: 'Ev ve küçük ofisler için en yaygın kullanılan, estetik ve sessiz klima çözümleri.',
    icon: Home,
    category: 'tip',
    features: [
      'Sessiz çalışma modu',
      'Yüksek enerji verimliliği (Inverter)',
      'Kompakt tasarım',
      'Kolay montaj ve bakım'
    ],
    warranty: '2 Yıl Cihaz Garantisi Desteği',
    images: ['https://picsum.photos/seed/split-ac/800/600']
  },
  {
    slug: 'kaset-tipi-klima',
    title: 'Kaset Tipi Klima',
    shortTitle: 'Kaset Tipi',
    description: 'Asma tavan içerisine gizlenen, 4 yöne üfleme özelliği ile geniş alanlar için ideal çözüm.',
    icon: Layout,
    category: 'tip',
    features: [
      'Homojen hava dağılımı',
      'Estetik görünüm',
      'Yüksek tavanlar için uygun',
      'Dahili drenaj pompası'
    ],
    warranty: '1 Yıl Montaj Garantisi',
    images: ['https://picsum.photos/seed/cassette-ac/800/600'],
    faqs: [
      { question: 'Kaset tipi klima her tavana uygun mudur?', answer: 'Asma tavan olan mekanlarda tavan arası mesafesi uygunsa kurulum yapılabilir.' },
      { question: 'Bakımı zor mudur?', answer: 'Filtreleri kolayca çıkarılıp temizlenebilir, genel bakımı uzman ekip tarafından yapılmalıdır.' }
    ]
  },
  {
    slug: 'salon-tipi-klima',
    title: 'Salon Tipi Klima',
    shortTitle: 'Salon Tipi',
    description: 'Mağaza, restoran ve ibadethaneler gibi geniş mekanlar için yüksek kapasiteli dik tip klimalar.',
    icon: Monitor,
    category: 'tip',
    features: [
      'Güçlü hava üfleme mesafesi',
      'Geniş alanlarda hızlı iklimlendirme',
      'Dayanıklı tasarım',
      'Kolay kontrol paneli'
    ],
    warranty: '1 Yıl Teknik Destek Garantisi',
    faqs: [
      { question: 'Salon tipi klima evde kullanılır mı?', answer: 'Çok geniş salonlar için tercih edilebilir ancak genellikle ticari alanlar için tasarlanmıştır.' },
      { question: 'Ses seviyesi nasıldır?', answer: 'Yüksek kapasiteli oldukları için split klimalara göre biraz daha sesli çalışırlar.' }
    ]
  },
  {
    slug: 'kanalli-tip-klima',
    title: 'Kanallı Tip Klima',
    shortTitle: 'Kanallı Tip',
    description: 'Merkezi sistem konforunda, menfezler aracılığıyla görünmez iklimlendirme sağlayan sistemler.',
    icon: Wind,
    category: 'tip',
    features: [
      'Tamamen gizli kurulum',
      'Birden fazla odayı tek merkezden soğutma',
      'Düşük ses seviyesi',
      'Taze hava besleme imkanı'
    ],
    warranty: '2 Yıl Sistem Garantisi',
    faqs: [
      { question: 'Kanallı klima sonradan takılır mı?', answer: 'Tavan tadilatı gerektirdiği için inşaat veya dekorasyon aşamasında yapılması en uygundur.' },
      { question: 'Her odayı ayrı kontrol edebilir miyim?', answer: 'Evet, damperli sistemler ile her odanın sıcaklığı bağımsız ayarlanabilir.' }
    ]
  },
  {
    slug: 'vrf-vrv-klima-sistemleri',
    title: 'VRF / VRV Klima Sistemleri',
    shortTitle: 'VRF Sistemleri',
    description: 'Büyük binalar, oteller ve iş merkezleri için değişken debili, yüksek teknolojili merkezi sistemler.',
    icon: Layers,
    category: 'tip',
    features: [
      'Bireysel kontrol imkanı',
      'Maksimum enerji tasarrufu',
      'Uzun borulama mesafesi',
      'Akıllı bina otomasyon uyumu'
    ],
    warranty: '2 Yıl Parça Garantisi',
    faqs: [
      { question: 'VRF sisteminin avantajı nedir?', answer: 'Aynı anda bazı odaları soğuturken bazılarını ısıtabilme (Heat Recovery) özelliği sunar.' },
      { question: 'Enerji tasarrufu sağlar mı?', answer: 'Evet, ihtiyaca göre kapasite ayarladığı için en tasarruflu merkezi sistemdir.' }
    ]
  },
  {
    slug: 'multi-split-klima',
    title: 'Multi Split Klima',
    shortTitle: 'Multi Split',
    description: 'Tek bir dış üniteye birden fazla iç ünitenin bağlandığı, dış ünite kalabalığını önleyen sistemler.',
    icon: Cpu,
    category: 'tip',
    features: [
      'Dış ünite yer tasarrufu',
      'Farklı tip iç ünite kombinasyonu',
      'Esnek kurulum',
      'Bağımsız çalışma özelliği'
    ],
    warranty: '1 Yıl Kurulum Garantisi',
    faqs: [
      { question: 'Kaç iç ünite bağlanabilir?', answer: 'Dış ünitenin kapasitesine göre 2 ile 5-6 arası iç ünite bağlanabilir.' },
      { question: 'İç üniteler farklı modeller olabilir mi?', answer: 'Evet, duvar tipi, kaset tipi veya kanallı tipi karıştırarak kullanabilirsiniz.' }
    ]
  },
  {
    slug: 'sanayi-tipi-endustriyel-klima',
    title: 'Sanayi Tipi Endüstriyel Klima',
    shortTitle: 'Sanayi Tipi',
    description: 'Fabrikalar, veri merkezleri ve büyük depolar için ağır hizmet tipi iklimlendirme çözümleri.',
    icon: Zap,
    category: 'tip',
    features: [
      '7/24 kesintisiz çalışma',
      'Ekstrem sıcaklıklarda performans',
      'Hassas nem ve sıcaklık kontrolü',
      'Yüksek kapasite seçenekleri'
    ],
    warranty: '1 Yıl Ağır Hizmet Garantisi',
    faqs: [
      { question: 'Hassas kontrollü klima nedir?', answer: 'Sıcaklık ve nemi çok dar toleranslarda tutan veri merkezleri için özel klimalardır.' },
      { question: 'Tozlu ortamlarda çalışır mı?', answer: 'Özel filtre sistemleri ile endüstriyel ortamlara uygun hale getirilirler.' }
    ]
  },
  {
    slug: 'yer-tavan-tipi-klima',
    title: 'Yer Tavan Tipi Klima',
    shortTitle: 'Yer Tavan',
    description: 'Hem yere hem de tavana monte edilebilen, esnek kullanım alanına sahip klimalar.',
    icon: Building2,
    category: 'tip',
    features: [
      'İki yönlü montaj imkanı',
      'Geniş üfleme açısı',
      'İnce ve şık tasarım',
      'Ofis ve mağazalar için ideal'
    ],
    warranty: '1 Yıl İşçilik Garantisi',
    faqs: [
      { question: 'Neden yer tavan tipi seçilmeli?', answer: 'Duvarın uygun olmadığı veya tavanın asma tavan olmadığı yerlerde en iyi çözümdür.' },
      { question: 'Hava akışı nasıldır?', answer: 'Geniş kanat yapısı sayesinde havayı uzağa ve homojen bir şekilde iletir.' }
    ]
  }
];
