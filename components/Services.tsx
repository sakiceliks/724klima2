'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/data/services-data';
import { motion } from 'motion/react';

export const Services = () => {
  const mainServices = services.filter(s => s.category === 'hizmet');

  return (
    <section id="hizmetler" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-800 text-sm font-bold mb-4"
          >
            {siteConfig.sections.hizmetler.badge}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            {siteConfig.sections.hizmetler.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            {siteConfig.sections.hizmetler.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-indigo-800 flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-800 group-hover:text-white transition-colors duration-500">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/hizmet/${service.slug}`}
                  className="inline-flex items-center gap-2 font-bold text-indigo-800 group-hover:gap-4 transition-all"
                >
                  {siteConfig.sections.hizmetler.cardLinkLabel}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
