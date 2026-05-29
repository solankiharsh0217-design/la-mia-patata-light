"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, Check, MessageCircle, Share2, Globe } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-48 pb-32 bg-[#261b1f] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/contact-hero.jpg"
            alt="Contact background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 text-white">
          <ScrollReveal>
            <p className="text-[#c87f30] font-bold tracking-[0.3em] uppercase mb-4">
              Parliamo
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8">
              Contatti<span className="text-[#c87f30]">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Hai domande, suggerimenti o vuoi prenotare un tavolo? 
              Siamo qui per ascoltarti e rendere la tua esperienza indimenticabile.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal direction="right">
                <div>
                  <h2 className="text-4xl font-serif font-bold text-[#261b1f] mb-8 heading-underline">
                    Informazioni
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="group flex items-start gap-6">
                      <div className="w-14 h-14 bg-[#f4ece2] group-hover:bg-[#c87f30] rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:rotate-6 group-hover:shadow-lg">
                        <MapPin className="text-[#c87f30] group-hover:text-white transition-colors" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#261b1f] text-lg mb-1 uppercase tracking-widest">Indirizzo</h3>
                        <Link
                          href={SITE.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#261b1f]/60 hover:text-[#c87f30] transition-colors text-lg"
                        >
                          {SITE.address}
                        </Link>
                      </div>
                    </div>

                    <div className="group flex items-start gap-6">
                      <div className="w-14 h-14 bg-[#f4ece2] group-hover:bg-[#c87f30] rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:-rotate-6 group-hover:shadow-lg">
                        <Phone className="text-[#c87f30] group-hover:text-white transition-colors" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#261b1f] text-lg mb-1 uppercase tracking-widest">Telefono</h3>
                        <Link
                          href={SITE.phoneLink}
                          className="text-[#261b1f]/60 hover:text-[#c87f30] transition-colors text-lg"
                        >
                          {SITE.phone}
                        </Link>
                      </div>
                    </div>

                    <div className="group flex items-start gap-6">
                      <div className="w-14 h-14 bg-[#f4ece2] group-hover:bg-[#c87f30] rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:rotate-6 group-hover:shadow-lg">
                        <Mail className="text-[#c87f30] group-hover:text-white transition-colors" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#261b1f] text-lg mb-1 uppercase tracking-widest">Email</h3>
                        <Link
                          href={SITE.emailLink}
                          className="text-[#261b1f]/60 hover:text-[#c87f30] transition-colors text-lg"
                        >
                          {SITE.email}
                        </Link>
                      </div>
                    </div>

                    <div className="group flex items-start gap-6">
                      <div className="w-14 h-14 bg-[#f4ece2] group-hover:bg-[#c87f30] rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:-rotate-6 group-hover:shadow-lg">
                        <Clock className="text-[#c87f30] group-hover:text-white transition-colors" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#261b1f] text-lg mb-1 uppercase tracking-widest">Orari</h3>
                        <p className="text-[#261b1f]/60 text-lg">{SITE.hoursDetailed}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-12 border-t border-[#f4ece2]">
                    <h4 className="font-bold text-[#261b1f] mb-6 uppercase tracking-[0.2em] text-sm">Seguici sui Social</h4>
                    <div className="flex gap-4">
                      <Link href={SITE.social.instagram} target="_blank" className="w-12 h-12 rounded-full border border-[#f4ece2] flex items-center justify-center text-[#261b1f] hover:bg-[#c87f30] hover:text-white hover:border-[#c87f30] transition-all">
                        <Share2 size={20} />
                      </Link>
                      <Link href={SITE.social.facebook} target="_blank" className="w-12 h-12 rounded-full border border-[#f4ece2] flex items-center justify-center text-[#261b1f] hover:bg-[#c87f30] hover:text-white hover:border-[#c87f30] transition-all">
                        <Globe size={20} />
                      </Link>
                      <Link href={SITE.whatsapp} target="_blank" className="w-12 h-12 rounded-full border border-[#f4ece2] flex items-center justify-center text-[#261b1f] hover:bg-green-500 hover:text-white hover:border-green-500 transition-all">
                        <MessageCircle size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" delay={200}>
                <div className="bg-[#f4ece2]/30 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-[#f4ece2]">
                  <h2 className="text-4xl font-serif font-bold text-[#261b1f] mb-8">
                    Inviaci un Messaggio
                  </h2>
                  
                  {submitted ? (
                    <div className="bg-white rounded-[2rem] p-12 text-center shadow-xl animate-scale-in">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <Check size={40} />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#261b1f] mb-4">
                        Messaggio Inviato!
                      </h3>
                      <p className="text-[#261b1f]/70 text-lg mb-8">
                        Grazie per averci contattato. Ti risponderemo il prima possibile (solitamente entro 24 ore).
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="btn-secondary"
                      >
                        Invia un altro messaggio
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-[#261b1f] mb-2 uppercase tracking-widest">
                            Nome Completo
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-[#c87f30] focus:ring-4 focus:ring-[#c87f30]/10 outline-none transition-all text-lg shadow-sm"
                            placeholder="Mario Rossi"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-[#261b1f] mb-2 uppercase tracking-widest">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-[#c87f30] focus:ring-4 focus:ring-[#c87f30]/10 outline-none transition-all text-lg shadow-sm"
                            placeholder="mario@esempio.it"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#261b1f] mb-2 uppercase tracking-widest">
                          Oggetto
                        </label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-[#c87f30] focus:ring-4 focus:ring-[#c87f30]/10 outline-none transition-all text-lg shadow-sm appearance-none cursor-pointer">
                          <option>Informazioni Generali</option>
                          <option>Prenotazione Tavolo</option>
                          <option>Eventi & Catering</option>
                          <option>Franchising</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#261b1f] mb-2 uppercase tracking-widest">
                          Il Tuo Messaggio
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-6 py-4 rounded-2xl bg-white border border-transparent focus:border-[#c87f30] focus:ring-4 focus:ring-[#c87f30]/10 outline-none transition-all text-lg shadow-sm resize-none"
                          placeholder="Come possiamo aiutarti?"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full btn-primary !py-5 !text-xl group"
                      >
                        <span>Invia Messaggio</span>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding pt-0 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] group">
              <Image 
                src="/images/map-bg.jpg"
                alt="Map Background"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#261b1f]/40 group-hover:bg-[#261b1f]/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div className="glass p-12 rounded-[2.5rem] max-w-lg shadow-2xl animate-float">
                  <MapPin size={48} className="text-[#c87f30] mx-auto mb-6" />
                  <h2 className="text-3xl font-serif font-bold text-[#261b1f] mb-4">Ci trovi Qui</h2>
                  <p className="text-[#261b1f]/70 mb-8 text-lg">
                    Siamo nel cuore di Riccione, in una posizione strategica tra Viale Dante e Via Ceccarini.
                  </p>
                  <Link
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Apri in Google Maps
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}