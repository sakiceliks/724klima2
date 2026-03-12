'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

interface ContactButtonProps {
  type: 'phone' | 'whatsapp';
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showIcon?: boolean;
  label?: string;
  eventLabel: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  type,
  variant = 'primary',
  size = 'md',
  className,
  showIcon = true,
  label,
  eventLabel,
}) => {
  const isPhone = type === 'phone';
  const href = isPhone 
    ? `tel:${siteConfig.company.phone}` 
    : `https://wa.me/${siteConfig.company.phone}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`;
  
  const defaultLabel = isPhone 
    ? siteConfig.contact.ctaPhoneLabel 
    : siteConfig.contact.ctaWhatsappLabel;

  const handleClick = () => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', isPhone ? 'phone_click' : 'whatsapp_click', {
        event_category: 'Contact',
        event_label: eventLabel,
      });
    }
    
    // Umami
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track(isPhone ? 'Phone Click' : 'WhatsApp Click', {
        label: eventLabel,
      });
    }
  };

  const variants = {
    primary: 'bg-indigo-800 text-white hover:bg-indigo-900',
    secondary: 'bg-sky-500 text-white hover:bg-sky-600',
    outline: 'border-2 border-indigo-800 text-indigo-800 hover:bg-indigo-50',
    success: 'bg-[#25D366] text-white hover:bg-[#128C7E]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg font-semibold',
    xl: 'px-10 py-4 text-xl font-bold',
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {showIcon && (
        isPhone ? <Phone size={size === 'sm' ? 16 : 20} /> : <MessageCircle size={size === 'sm' ? 16 : 20} />
      )}
      <span>{label || defaultLabel}</span>
    </a>
  );
};
