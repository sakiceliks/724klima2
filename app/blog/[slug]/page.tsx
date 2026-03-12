import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, ChevronLeft, ChevronRight, Tag, Share2 } from 'lucide-react';
import { blogPosts } from '@/data/blog-data';
import { siteConfig } from '@/lib/site-config';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';
import { ContactButton } from '@/components/ContactButton';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.company.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.company.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.company.url}/logo.png`
      }
    },
    "description": post.excerpt
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
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm font-bold text-slate-400 mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-indigo-800 transition-colors">Anasayfa</Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-indigo-800 transition-colors">Blog</Link>
              <ChevronRight size={14} />
              <span className="text-indigo-800 truncate">{post.title}</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-4 text-xs font-bold text-indigo-600 mb-6 uppercase tracking-widest">
                <span className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-400 uppercase tracking-wider border-y border-slate-100 py-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-indigo-400" />
                  {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} className="text-indigo-400" />
                  {post.author}
                </div>
              </div>
            </header>

            <div className="relative aspect-video rounded-[40px] overflow-hidden mb-12 shadow-2xl shadow-indigo-500/10">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg prose-slate max-w-none 
                    prose-headings:font-display prose-headings:font-black prose-headings:text-slate-900
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-strong:text-indigo-900 prose-strong:font-bold
                    prose-img:rounded-[32px] prose-img:shadow-xl"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 text-slate-500 text-sm font-bold">
                        <Tag size={14} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-indigo-800 font-bold hover:text-sky-600 transition-colors">
                    <Share2 size={20} />
                    Paylaş
                  </button>
                </div>
              </div>

              {/* Sidebar CTA */}
              <aside className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-indigo-900 rounded-[32px] p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">Profesyonel Destek Alın</h3>
                    <p className="text-indigo-100 text-sm mb-8 leading-relaxed">
                      Klimanızla ilgili her türlü sorun için uzman ekibimiz 7/24 yanınızda.
                    </p>
                    <div className="flex flex-col gap-3">
                      <ContactButton 
                        type="phone" 
                        variant="secondary" 
                        className="w-full" 
                        eventLabel={`blog_${post.slug}_phone`} 
                      />
                      <ContactButton 
                        type="whatsapp" 
                        variant="success" 
                        className="w-full" 
                        eventLabel={`blog_${post.slug}_whatsapp`} 
                      />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </>
  );
}
