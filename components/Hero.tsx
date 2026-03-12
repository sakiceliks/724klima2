'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Shield, Wrench } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { ContactButton } from './ContactButton';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import acAnimationData from './ACAnimation.json';

const slides = [
  {
    title: siteConfig.hero.headline,
    subtitle: siteConfig.hero.headlineSub,
    description: siteConfig.hero.description,
  },
  {
    title: "7/24 Acil Servis",
    subtitle: "İstanbul'un Her Yerine",
    description: "Günün her saati, haftanın her günü uzman ekibimizle kapınızdayız. Arıza bildiriminden sonra en kısa sürede müdahale.",
  },
  {
    title: "Garantili Bakım",
    subtitle: "Ve Orijinal Yedek Parça",
    description: "Tüm tamir ve bakım işlemlerimizde işçilik ve parça garantisi sunuyoruz. Klimanızın ömrünü uzatıyoruz.",
  }
];

const icons: Record<string, any> = {
  clock: Clock,
  shield: Shield,
  wrench: Wrench,
};

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5);
    }
  }, []);

  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = 3500;
    const step = 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (step / interval) * 100;
      });
    }, step);
    
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative min-h-[100svh] lg:min-h-screen flex items-center pt-16 lg:pt-24 pb-8 lg:pb-12 overflow-hidden bg-slate-50">
      {/* Background Video with subtle zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="https://cdn.jumpshare.com/preview/7jY5Ywh-hCIVkpodSpOv8eZZMyt3v2SW_HQOT18VVfUHsBgMh7iQ00KdfaFwG0SKyxdLKELoMpqvu0ehqUOfL37oLuJYkgiY_74NjlGI_Y_8TbFT0g2AIfs27oJp_tRodcC88EU_Y12vykXtKedIyG6yjbN-I2pg_cnoHs_AmgI.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-slate-50/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            className="max-w-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100/50 text-indigo-800 text-xs font-bold mb-4 sm:mb-8 border border-indigo-200/50 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              {siteConfig.hero.badge}
            </motion.div>

            {/* Lottie Animation for Mobile - Moved Up */}
            <div className="lg:hidden relative flex items-center justify-center mb-4">
              <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-full -z-10"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-[180px] sm:max-w-[300px] aspect-square relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-white rounded-full -rotate-3 scale-105 opacity-50"></div>
                <div className="absolute inset-0 bg-white rounded-full shadow-lg shadow-indigo-100/30 border border-indigo-50 flex items-center justify-center overflow-hidden">
                  <Lottie 
                    lottieRef={lottieRef}
                    animationData={acAnimationData} 
                    loop={true} 
                    className="w-full h-full scale-110"
                  />
                </div>
              </motion.div>
            </div>

            <div className="relative min-h-[180px] sm:min-h-[320px] lg:min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: -10 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="w-full"
                >
                  <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-3 sm:mb-8 tracking-tight">
                    {slides[current].title} <br />
                    <span className="text-indigo-800 drop-shadow-sm">{slides[current].subtitle}</span>
                  </h1>
                  <p className="text-sm sm:text-lg md:text-xl text-slate-600 mb-4 sm:mb-12 leading-relaxed max-w-xl font-medium">
                    {slides[current].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Removed redundant mobile animation from here */}

            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-16">
              <ContactButton 
                type="phone" 
                size="xl" 
                variant="primary" 
                eventLabel="hero_phone" 
                className="shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all hover:-translate-y-1"
              />
              <ContactButton 
                type="whatsapp" 
                size="xl" 
                variant="success" 
                eventLabel="hero_whatsapp" 
                className="shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all hover:-translate-y-1"
              />
            </div>

            {/* Carousel Controls with Progress */}
            <div className="flex items-center gap-6">
              <div className="flex gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-800 hover:border-indigo-800 hover:bg-white transition-all group"
                  aria-label="Önceki Slayt"
                >
                  <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-800 hover:border-indigo-800 hover:bg-white transition-all group"
                  aria-label="Sonraki Slayt"
                >
                  <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              
              <div className="flex gap-3 flex-1 max-w-[200px]">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrent(i);
                      setProgress(0);
                    }}
                    className="relative h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden group"
                    aria-label={`Slayt ${i + 1}`}
                  >
                    {current === i && (
                      <motion.div 
                        className="absolute inset-0 bg-indigo-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    )}
                    <div className={`absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Lottie Animation Container (Desktop) */}
          <div className="hidden lg:flex relative items-center justify-center">
            <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-full -z-10"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-[500px] lg:max-w-full aspect-square relative"
            >
              {/* Decorative background for Lottie */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-white rounded-[3rem] -rotate-3 scale-105 opacity-50"></div>
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl shadow-indigo-100/50 border border-indigo-50 flex items-center justify-center overflow-hidden">
                <Lottie 
                  lottieRef={lottieRef}
                  animationData={acAnimationData} 
                  loop={true} 
                  className="w-full h-full scale-110"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-indigo-50 flex items-center gap-4 hidden md:flex"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Garantili Servis</p>
                  <p className="text-xs text-slate-500">1 Yıl Parça Garantisi</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
