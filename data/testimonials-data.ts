export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    location: 'Beşiktaş, İstanbul',
    comment: 'Klimamın gazı bitmişti ve hiç soğutmuyordu. Aradıktan 40 dakika sonra geldiler, kaçağı bulup onardılar. Çok profesyonel bir ekip.',
    rating: 5,
    date: '2024-02-15',
    avatar: 'https://i.pravatar.cc/150?u=ahmet'
  },
  {
    id: '2',
    name: 'Zeynep Kaya',
    location: 'Kadıköy, İstanbul',
    comment: 'Ofisimizdeki kaset tipi klimaların bakımı için anlaştık. İşlerini çok temiz yapıyorlar, etrafı hiç kirletmediler. Teşekkürler.',
    rating: 5,
    date: '2024-01-20',
    avatar: 'https://i.pravatar.cc/150?u=zeynep'
  },
  {
    id: '3',
    name: 'Mehmet Demir',
    location: 'Başakşehir, İstanbul',
    comment: 'Yeni evime klima montajı yaptırdım. Vakumlama işlemini titizlikle yaptılar. İşçilik kalitesi gerçekten çok yüksek.',
    rating: 5,
    date: '2024-03-02',
    avatar: 'https://i.pravatar.cc/150?u=mehmet'
  },
  {
    id: '4',
    name: 'Selin Yıldız',
    location: 'Sarıyer, İstanbul',
    comment: 'Gece yarısı klimam su akıtmaya başladı, acil servis hattından ulaştım. 1 saat içinde gelip sorunu çözdüler. 7/24 hizmetin hakkını veriyorlar.',
    rating: 5,
    date: '2024-02-28',
    avatar: 'https://i.pravatar.cc/150?u=selin'
  }
];
