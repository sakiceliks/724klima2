'use client';

import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { motion } from 'motion/react';

export const Brands = () => {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-2">
          {siteConfig.brands.heading}
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 py-4"
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "linear" 
          }}
        >
          {[...siteConfig.brands.items, ...siteConfig.brands.items].map((brand, i) => (
            <div 
              key={i} 
              className="text-2xl md:text-3xl font-black text-slate-300 hover:text-indigo-800 transition-colors cursor-default select-none"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
