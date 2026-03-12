export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'klima-bakimi-nasil-yapilir',
    title: 'Klima Bakımı Nasıl Yapılır? Adım Adım Rehber',
    excerpt: 'Klimanızın ömrünü uzatmak ve enerji tasarrufu sağlamak için yapmanız gereken temel bakım adımlarını keşfedin.',
    content: `
      <h2>Klima Bakımının Önemi</h2>
      <p>Klimalar, yaşam alanlarımızın konforunu sağlayan en önemli cihazlardan biridir. Ancak düzenli bakım yapılmayan klimalar hem sağlığınızı tehdit eder hem de faturalarınızın kabarmasına neden olur.</p>
      
      <h3>Filtre Temizliği</h3>
      <p>Klimanızın filtrelerini en az ayda bir kez temizlemelisiniz. Tozlu filtreler hava akışını engeller ve cihazın daha fazla enerji harcamasına neden olur.</p>
      
      <h3>Dış Ünite Kontrolü</h3>
      <p>Dış ünitenin çevresinin açık olduğundan ve hava akışını engelleyen bir nesne bulunmadığından emin olun.</p>
      
      <h3>Profesyonel Destek</h3>
      <p>Yılda en az iki kez profesyonel bir teknik servisten bakım hizmeti almanız, cihazınızın iç aksamındaki gizli sorunların tespit edilmesini sağlar.</p>
    `,
    date: '2024-03-10',
    author: '7-24 Klima Uzman Ekibi',
    image: 'https://picsum.photos/seed/ac-blog-1/1200/600',
    category: 'Bakım İpuçları',
    tags: ['klima bakımı', 'enerji tasarrufu', 'teknik servis']
  },
  {
    slug: 'dogru-klima-secimi-rehberi',
    title: 'Doğru Klima Seçimi: Hangi Alan İçin Hangi Klima?',
    excerpt: 'Eviniz veya ofisiniz için en uygun klimayı seçerken dikkat etmeniz gereken BTU değerleri ve klima tipleri.',
    content: `
      <h2>BTU Hesabı Nasıl Yapılır?</h2>
      <p>Klima alırken en kritik nokta, odanızın metrekaresine uygun BTU değerini belirlemektir. Yanlış kapasite seçimi hem yetersiz soğutmaya hem de yüksek elektrik faturalarına yol açar.</p>
      
      <h3>Klima Tipleri ve Avantajları</h3>
      <p>Duvar tipi split klimalar evler için idealdir. Kaset tipi klimalar ise geniş ofis ve mağazalarda homojen hava dağılımı sağlar.</p>
      
      <h3>Inverter Teknolojisi</h3>
      <p>Yeni nesil inverter klimalar, istenilen sıcaklığa ulaştığında durmak yerine hızını düşürerek çalışmaya devam eder, bu da ciddi oranda enerji tasarrufu sağlar.</p>
    `,
    date: '2024-03-05',
    author: '7-24 Klima Uzman Ekibi',
    image: 'https://picsum.photos/seed/ac-blog-2/1200/600',
    category: 'Satın Alma Rehberi',
    tags: ['klima seçimi', 'BTU hesabı', 'inverter klima']
  },
  {
    slug: 'klima-gaz-dolumu-ne-zaman-yapilmali',
    title: 'Klima Gaz Dolumu Ne Zaman Yapılmalı?',
    excerpt: 'Klimanızın soğutma performansı düştüyse gaz kaçağı olabilir. Gaz dolumu ve kaçak tespiti hakkında her şey.',
    content: `
      <h2>Klima Gazı Biter mi?</h2>
      <p>Normal şartlarda kapalı devre çalışan klima gazı bitmez. Eğer gaz eksilmesi varsa, sistemde mutlaka bir kaçak söz konusudur.</p>
      
      <h3>Gaz Eksikliğinin Belirtileri</h3>
      <p>Klimanın iç ünitesinde buzlanma, yetersiz soğutma ve dış ünite borularında karlanma gaz eksikliğinin en belirgin işaretleridir.</p>
      
      <h3>Kaçak Tespiti ve Onarım</h3>
      <p>Sadece gaz basmak geçici bir çözümdür. Uzman ekibimiz önce kaçağın yerini tespit eder, onarımı yapar ve ardından doğru miktarda gaz dolumu gerçekleştirir.</p>
    `,
    date: '2024-02-28',
    author: '7-24 Klima Uzman Ekibi',
    image: 'https://picsum.photos/seed/ac-blog-3/1200/600',
    category: 'Teknik Bilgiler',
    tags: ['klima gazı', 'r32 gaz', 'klima tamiri']
  }
];
