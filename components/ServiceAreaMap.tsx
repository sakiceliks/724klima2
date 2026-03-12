'use client';

import React from 'react';
import { MapPin, Navigation, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '@/lib/site-config';

export const ServiceAreaMap = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold uppercase tracking-widest border border-indigo-100 mb-6 inline-block"
            >
              Hizmet Bölgelerimiz
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight"
            >
              İstanbul&apos;un Her Noktasına <br />
              <span className="text-indigo-800">30 Dakikada Ulaşıyoruz</span>
            </motion.h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Avrupa ve Anadolu yakasındaki tüm ilçelere tam donanımlı mobil araçlarımızla 7/24 kesintisiz hizmet sağlıyoruz. En yakın ekibimiz size sadece bir telefon kadar uzak.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                'Avrupa Yakası Tüm İlçeler',
                'Anadolu Yakası Tüm İlçeler',
                '7/24 Acil Müdahale',
                'Gezici Mobil Servis',
                'Aynı Gün Kurulum',
                'Hızlı Arıza Tespiti'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <CheckCircle2 className="text-sky-500" size={20} />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-indigo-900 text-white flex items-center gap-6 shadow-xl shadow-indigo-900/20">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Navigation className="animate-pulse" size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Size En Yakın Ekibi Yönlendirelim</h4>
                <p className="text-indigo-100/80">Konumunuzu paylaşın, 30 dakikada kapınızda olalım.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full -z-10"></div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
              {/* Google Maps Iframe - Istanbul Center */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.2781944686!2d28.86703248359375!3d41.00523670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1710200000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              {/* Overlay Badge */}
              <div className="absolute top-8 left-8 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-800 text-white flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Merkez Ofis</div>
                  <div className="font-bold text-slate-900">İstanbul, Türkiye</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
