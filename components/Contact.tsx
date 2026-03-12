'use client';

import React from 'react';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { ContactButton } from './ContactButton';
import { motion } from 'motion/react';

const icons: Record<string, any> = {
  phone: Phone,
  clock: Clock,
  mapPin: MapPin,
  mail: Mail,
};

export const Contact = () => {
  return (
    <section id="iletisim" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800/10 skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black mb-8 leading-tight"
          >
            {siteConfig.sections.iletisim.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-200 mb-12"
          >
            {siteConfig.sections.iletisim.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <ContactButton 
              type="phone" 
              size="xl" 
              variant="secondary" 
              eventLabel="contact_section_phone" 
            />
            <ContactButton 
              type="whatsapp" 
              size="xl" 
              variant="success" 
              eventLabel="contact_section_whatsapp" 
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.contactCards.map((card, index) => {
            const Icon = icons[card.iconKey];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-800 flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                <div className="space-y-1">
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-indigo-200/70">{line}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
