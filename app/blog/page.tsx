import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/data/blog-data';
import { siteConfig } from '@/lib/site-config';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';

export const metadata: Metadata = {
  title: 'Klima Servisi Blog | İpuçları ve Rehberler',
  description: 'Klima bakımı, seçimi ve teknik bilgiler hakkında uzman rehberler. Klimanızdan maksimum verim almanız için ipuçları.',
};

export default function BlogListPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">
              <Link href="/" className="hover:text-indigo-800 transition-colors">Anasayfa</Link>
              <ChevronRight size={14} />
              <span className="text-indigo-800">Blog</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              Klima Uzmanından <br />
              <span className="text-indigo-800">İpuçları ve Rehberler</span>
            </h1>
            <p className="text-xl text-slate-600">
              Klimanızın ömrünü uzatacak, enerji tasarrufu sağlayacak ve konforunuzu artıracak en güncel bilgiler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
              >
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-indigo-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-indigo-400" />
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-indigo-400" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-800 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-indigo-800 group-hover:gap-4 transition-all"
                  >
                    Devamını Oku
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
