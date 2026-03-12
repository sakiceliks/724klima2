import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Brands } from '@/components/Brands';
import { Services } from '@/components/Services';
import { ACTypes } from '@/components/ACTypes';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { ServiceAreaMap } from '@/components/ServiceAreaMap';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <ACTypes />
      <About />
      <Testimonials />
      <ServiceAreaMap />
      <Contact />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
