'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { ContactButton } from './ContactButton';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-800 text-white rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
              {siteConfig.company.logoInitial}
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-none transition-colors ${scrolled ? 'text-indigo-900' : 'text-white'}`}>
                {siteConfig.company.shortName}
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${scrolled ? 'text-sky-600' : 'text-sky-300'}`}>
                {siteConfig.company.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {siteConfig.nav.items.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className={`text-sm font-semibold transition-colors ${
                      scrolled ? 'text-slate-700 hover:text-indigo-800' : 'text-white hover:text-indigo-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <ContactButton 
                type="phone" 
                variant={scrolled ? "outline" : "secondary"} 
                size="sm" 
                eventLabel="nav_phone" 
                label={siteConfig.company.phoneDisplay}
              />
              <ContactButton 
                type="whatsapp" 
                variant="success" 
                size="sm" 
                eventLabel="nav_whatsapp" 
                label={siteConfig.contact.whatsappShortLabel}
              />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-indigo-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menüyü Aç"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden relative z-50"
            >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {siteConfig.nav.items.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href}
                      className="text-lg font-semibold text-slate-800 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <ContactButton 
                  type="phone" 
                  variant="primary" 
                  size="lg" 
                  className="w-full" 
                  eventLabel="mobile_nav_phone" 
                />
                <ContactButton 
                  type="whatsapp" 
                  variant="success" 
                  size="lg" 
                  className="w-full" 
                  eventLabel="mobile_nav_whatsapp" 
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </header>
  );
};
