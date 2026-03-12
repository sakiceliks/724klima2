'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-indigo-800 text-white rounded-xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform">
                {siteConfig.company.logoInitial}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">
                  {siteConfig.company.shortName}
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-indigo-400">
                  {siteConfig.company.tagline}
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              {siteConfig.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-4">
              {siteConfig.footer.bottomLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Yasal</h4>
            <p className="text-slate-400 mb-6">
              {siteConfig.footer.kvkk}
            </p>
            <div className="text-sm text-slate-500">
              Kuruluş: {siteConfig.company.establishedYear}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <p>{siteConfig.company.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
