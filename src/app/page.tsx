"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Star, Utensils, Award, Zap, Heart } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE, MENU_CATEGORIES, STATS, WHY_CHOOSE_US } from "@/lib/constants";

const heroImages = [
  "https://images.unsplash.com/photo-1599321955419-78537d3d1323?q=80&w=2000",
  "https://images.unsplash.com/photo-1511216113906-8f57bb83e776?q=80&w=2000",
  "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?q=80&w=2000",
];

const categoryImages = [
  "https://images.unsplash.com/photo-1599321955419-78537d3d1323?q=80&w=800",
  "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800",
  "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800",
  "https://images.unsplash.com/photo-1610393044160-59aa13c1932f?q=80&w=800",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        {heroImages.map((img, i) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="Baked Potato"
              fill
              className="object-cover scale-105"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
          </div>
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center text-white">
          <ScrollReveal>
            <div className="inline-block px-4 py-1.5 bg-[#c87f30] rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in-up shadow-lg">
              Franchising di Gastronomia
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-tight text-white drop-shadow-2xl">
              La Mia <span className="text-[#c87f30]">Patata</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto mb-12 font-medium">
              {SITE.tagline}
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/menu" className="btn-primary group min-w-[200px]">
                <span>Scopri il Menu</span> 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[#c87f30] min-w-[200px]">
                <span>Vieni a Trovarci</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats Overlay */}
          <ScrollReveal delay={1000} className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto glass rounded-3xl p-8 backdrop-blur-xl">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-[#c87f30]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#261b1f]/60 mt-1 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-[#c87f30] rounded-full" />
          </div>
        </div>
      </section>

      {/* Concept Section - Split Layout */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#eed583]/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#c87f30]/20 rounded-full blur-3xl animate-pulse" />
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <Image 
                    src="/images/store-exterior.jpg"
                    alt="La Mia Patata Store"
                    width={1000}
                    height={1200}
                    className="object-cover w-full h-[600px] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-xl font-serif italic">Benvenuti nel nostro locale di Riccione.</p>
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl shadow-xl hidden md:block animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#c87f30] rounded-full flex items-center justify-center text-white text-3xl">🥔</div>
                    <div>
                      <h4 className="font-serif font-bold text-xl">100% Naturale</h4>
                      <p className="text-sm opacity-70">Ingredienti italiani</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div>
                <div className="w-20 h-1 bg-[#c87f30] mb-8" />
                <p className="text-[#c87f30] font-bold tracking-[0.2em] uppercase mb-4">Il Nostro Progetto</p>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#261b1f] mb-8 leading-tight">
                  La Regina della <br />
                  <span className="text-[#c87f30]">Tavola.</span>
                </h2>
                <p className="text-xl text-[#261b1f]/70 mb-8 leading-relaxed">
                  Prendiamo la patata e la trattiamo da regina. Premium, riconoscibile, irresistibile. 
                  Una gastronomia specializzata dove l&apos;innovazione incontra la tradizione italiana.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#f4ece2] rounded-xl flex items-center justify-center text-[#c87f30] flex-shrink-0">
                      <Utensils size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1">Cucina Artigianale</h4>
                      <p className="text-sm opacity-70">Oltre 30 ricette firmate dall&apos;Executive Chef.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#f4ece2] rounded-xl flex items-center justify-center text-[#c87f30] flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1">Sempre Pronti</h4>
                      <p className="text-sm opacity-70">Aperto 12 ore al giorno, tutti i giorni.</p>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="btn-secondary group">
                  <span>Scopri la nostra Storia</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Menu Categories - Visual Grid */}
      <section className="section-padding bg-[#f4ece2]">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[#c87f30] font-bold tracking-[0.2em] uppercase mb-4">Esplora i Sapori</p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#261b1f] mb-6">
                Quattro Mondi Gustosi<span className="text-[#c87f30]">.</span>
              </h2>
              <div className="w-24 h-1 bg-[#c87f30] mx-auto mb-8" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {MENU_CATEGORIES.map((category, i) => (
              <ScrollReveal key={category.id} delay={i * 100} direction={i % 2 === 0 ? "right" : "left"}>
                <div className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl cursor-pointer">
                  <Image 
                    src={categoryImages[i]}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl font-serif text-white/40">0{i + 1}</span>
                      <Star className="text-[#c87f30] fill-[#c87f30] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" size={32} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-[#c87f30] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/80 mb-6 line-clamp-2 max-w-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {category.items.slice(0, 3).map((item, j) => (
                        <span key={j} className="text-[10px] uppercase tracking-widest font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400} className="text-center mt-16">
            <Link href="/menu" className="btn-primary inline-flex group">
              <span>Menu Completo</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us - Modern Cards */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f4ece2]/30 -skew-x-12 translate-x-1/2" />
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#261b1f] mb-4">
                L&apos;Eccellenza in ogni Dettaglio<span className="text-[#c87f30]">.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, i) => {
              const icons = [Award, Zap, Utensils, Heart];
              const Icon = icons[i] || Star;
              return (
                <ScrollReveal key={i} delay={i * 100} className="h-full">
                  <div className="bg-[#f4ece2]/50 p-10 rounded-3xl h-full border border-transparent hover:border-[#c87f30]/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#c87f30] group-hover:text-white transition-colors duration-500 group-hover:rotate-6">
                      <Icon size={32} className="text-[#c87f30] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#261b1f] mb-4 group-hover:text-[#c87f30] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#261b1f]/70 leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Dynamic Gradient */}
      <section className="section-padding relative overflow-hidden bg-[#261b1f] py-32">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/hero2.jpg"
            alt="Potatoes"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#261b1f] via-[#261b1f]/80 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="right">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                Vieni a Vivere l&apos;Esperienza <br />
                <span className="text-[#c87f30] italic">La Mia Patata.</span>
              </h2>
              <p className="text-2xl text-white/80 mb-12 font-light">
                Ti aspettiamo a Riccione per farti scoprire come un solo ingrediente possa trasformarsi in infinite possibilità.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/contact" 
                  className="btn-primary !py-5 !px-10 text-xl"
                >
                  Prenota Ora
                </Link>
                <Link 
                  href={SITE.phoneLink}
                  className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[#261b1f] !py-5 !px-10 text-xl"
                >
                  {SITE.phone}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}