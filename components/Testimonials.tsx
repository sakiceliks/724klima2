'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { testimonials } from '@/data/testimonials-data';
import Image from 'next/image';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold uppercase tracking-widest border border-indigo-100 mb-4 inline-block"
          >
            Müşteri Yorumları
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Binlerce Mutlu Müşterimizden <br />
            <span className="text-indigo-800">Bazı Geri Bildirimler</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-2 text-indigo-200 opacity-50 group-hover:text-indigo-400 transition-colors" size={40} />
                <p className="text-slate-600 leading-relaxed relative z-10 italic">
                  &quot;{item.comment}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                {item.avatar && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image 
                      src={item.avatar} 
                      alt={item.name} 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
