'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/data/services-data';
import { motion } from 'motion/react';

export const ACTypes = () => {
  const acTypes = services.filter(s => s.category === 'tip');

  return (
    <section id="klima-tipleri" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-4"
          >
            {siteConfig.sections.klimaTipleri.badge}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            {siteConfig.sections.klimaTipleri.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            {siteConfig.sections.klimaTipleri.description}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {acTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{type.shortTitle}</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                  {type.description}
                </p>
                <Link 
                  href={`/hizmet/${type.slug}`}
                  className="flex items-center justify-between font-bold text-sm text-indigo-800 group-hover:text-sky-600 transition-colors"
                >
                  {siteConfig.sections.klimaTipleri.cardLinkLabel}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
