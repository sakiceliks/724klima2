'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { motion } from 'motion/react';

export const WhatsAppFloating = () => {
  const handleClick = () => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'floating_whatsapp',
      });
    }
    
    // Umami
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('WhatsApp Click', {
        label: 'floating_whatsapp',
      });
    }
  };

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.company.phone}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`}
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:bg-[#128C7E] transition-colors"
      aria-label="WhatsApp Destek Hattı"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -left-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
      </span>
    </motion.a>
  );
};
