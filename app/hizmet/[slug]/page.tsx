import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, CheckCircle2, Phone, MessageCircle, ShieldCheck, Image as ImageIcon, HelpCircle } from 'lucide-react';
import { services } from '@/data/services-data';
import { siteConfig } from '@/lib/site-config';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactButton } from '@/components/ContactButton';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';
import { Accordion } from '@/components/Accordion';
import { Testimonials } from '@/components/Testimonials';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${siteConfig.company.url}/hizmet/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Improved Related Services Logic: 
  // 1. Same category first
  // 2. Commonly bundled logic (e.g., Installation -> Maintenance)
  // 3. Limit to 5
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .sort((a, b) => {
      // Bundled logic
      const bundles: Record<string, string[]> = {
        'klima-kurulumu-ve-montaji': ['periyodik-klima-bakimi', 'klima-tamiri-ve-ariza-onarimi'],
        'klima-tamiri-ve-ariza-onarimi': ['periyodik-klima-bakimi', 'klima-kurulumu-ve-montaji'],
        'periyodik-klima-bakimi': ['klima-tamiri-ve-ariza-onarimi', 'klima-kurulumu-ve-montaji'],
      };

      const isABundled = bundles[service.slug]?.includes(a.slug);
      const isBBundled = bundles[service.slug]?.includes(b.slug);

      if (isABundled && !isBBundled) return -1;
      if (!isABundled && isBBundled) return 1;

      // Category logic
      if (a.category === service.category && b.category !== service.category) return -1;
      if (a.category !== service.category && b.category === service.category) return 1;
      
      return 0;
    })
    .slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.company.name
    },
    "areaServed": siteConfig.company.address.serviceArea
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-800 font-semibold mb-8 transition-colors"
          >
            <ChevronLeft size={20} />
            {siteConfig.servicePage.backLabel}
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <div className="w-20 h-20 rounded-3xl bg-indigo-50 text-indigo-800 flex items-center justify-center mb-6 shadow-sm">
                  <service.icon size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {service.description}
                </p>
              </div>

              {/* Warranty Section */}
              {service.warranty && (
                <div className="mb-12 p-8 rounded-[32px] bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                  <div className="w-20 h-20 rounded-2xl bg-white text-indigo-800 flex items-center justify-center shadow-md flex-shrink-0 border border-indigo-50">
                    <ShieldCheck size={40} />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">Hizmet ve Parça Garantisi</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                      Tüm işlemlerimizde müşteri memnuniyetini ön planda tutuyoruz. Bu hizmetimiz kapsamında sunulan güvence:
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-800 text-white font-bold">
                      <CheckCircle2 size={18} />
                      {service.warranty}
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 mb-12 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  {siteConfig.servicePage.scopeTitle}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="text-sky-500 mt-1 flex-shrink-0" size={24} />
                      <span className="text-lg text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              {service.images && service.images.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <ImageIcon className="text-indigo-800" size={28} />
                    <h2 className="text-2xl font-bold text-slate-900">Uygulama Örnekleri</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.images.map((img, i) => (
                      <div key={i} className="relative aspect-video rounded-3xl overflow-hidden shadow-lg group">
                        <Image 
                          src={img} 
                          alt={`${service.title} uygulama örneği ${i+1}`} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <HelpCircle className="text-indigo-800" size={28} />
                    <h2 className="text-2xl font-bold text-slate-900">{siteConfig.servicePage.faqTitle}</h2>
                  </div>
                  <Accordion items={service.faqs} />
                </div>
              )}

              {/* Testimonials Section */}
              <div className="mb-12">
                <Testimonials />
              </div>

              {/* CTA Section */}
              <div className="bg-indigo-800 rounded-[40px] p-10 md:p-16 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">{siteConfig.servicePage.ctaTitle}</h2>
                <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
                  {siteConfig.servicePage.ctaDescTemplate.replace('{shortTitle}', service.shortTitle)}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <ContactButton 
                    type="phone" 
                    variant="secondary" 
                    size="xl" 
                    eventLabel={`service_${service.slug}_phone`} 
                  />
                  <ContactButton 
                    type="whatsapp" 
                    variant="success" 
                    size="xl" 
                    eventLabel={`service_${service.slug}_whatsapp`} 
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-bold mb-6">{siteConfig.servicePage.quickContactTitle}</h3>
                <div className="space-y-4">
                  <a 
                    href={`tel:${siteConfig.company.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-indigo-800 flex items-center justify-center shadow-sm group-hover:bg-indigo-800 group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hemen Ara</div>
                      <div className="font-bold text-slate-900">{siteConfig.company.phoneDisplay}</div>
                    </div>
                  </a>
                  <a 
                    href={`https://wa.me/${siteConfig.company.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-green-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-green-600 flex items-center justify-center shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</div>
                      <div className="font-bold text-slate-900">7/24 Destek Hattı</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-bold mb-6">{siteConfig.servicePage.relatedTitle}</h3>
                <ul className="space-y-4">
                  {relatedServices.map((s) => (
                    <li key={s.slug}>
                      <Link 
                        href={`/hizmet/${s.slug}`}
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 text-slate-600 hover:text-indigo-800 font-medium transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-800 transition-all">
                          <s.icon size={20} />
                        </div>
                        <span className="flex-1">{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </>
  );
}
