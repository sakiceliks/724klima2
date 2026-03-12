'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Users, Award, Headphones, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const icons: Record<string, any> = {
  clock: Clock,
  users: Users,
  award: Award,
  headphones: Headphones,
};

const Counter = ({ value, label }: { value: string, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-indigo-800 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="hakkimizda" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 p-12 rounded-[40px] bg-slate-50 border border-slate-100">
          {siteConfig.about.numbers.map((num) => (
            <Counter key={num.label} value={num.value} label={num.label} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-800 text-sm font-bold mb-6"
            >
              {siteConfig.sections.hakkimizda.badge}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight"
            >
              {siteConfig.sections.hakkimizda.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-12"
            >
              {siteConfig.sections.hakkimizda.description}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              {siteConfig.about.reasons.map((reason, index) => {
                const Icon = icons[reason.iconKey];
                return (
                  <motion.div 
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-800 text-white flex items-center justify-center shadow-lg shadow-indigo-200">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{reason.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-indigo-900 rounded-[40px] p-10 md:p-16 text-white relative z-10">
              <h3 className="text-3xl font-bold mb-8">{siteConfig.about.checklist.title}</h3>
              <ul className="space-y-4">
                {siteConfig.about.checklist.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-sky-400 mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg text-indigo-100 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
