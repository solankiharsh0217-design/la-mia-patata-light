"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#261b1f] text-[#f4ece2] pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c87f30] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#c87f30]/30 group-hover:border-[#c87f30] transition-all duration-500 shadow-lg">
                <Image 
                  src="/images/logo-raw.jpg" 
                  alt="La Mia Patata Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold text-white group-hover:text-[#c87f30] transition-colors">
                  La Mia <span className="text-[#c87f30]">Patata</span>
                </h3>
                <p className="text-[#c87f30] text-xs font-bold tracking-[0.3em] uppercase opacity-70">Riccione</p>
              </div>
            </Link>
            <p className="text-lg text-[#f4ece2]/80 leading-relaxed mb-8 max-w-md italic">
              &ldquo;{SITE.tagline}&rdquo;
            </p>
            <p className="text-[#f4ece2]/60 max-w-sm mb-10">
              {SITE.description}. Un&apos;esperienza culinaria unica nel cuore pulsante della Romagna.
            </p>
            <div className="flex gap-4">
              <Link
                href={SITE.social.instagram}
                target="_blank"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c87f30] hover:text-white transition-all duration-300"
              >
                <InstagramIcon size={20} />
              </Link>
              <Link
                href={SITE.social.facebook}
                target="_blank"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c87f30] hover:text-white transition-all duration-300"
              >
                <FacebookIcon size={20} />
              </Link>
              <Link
                href={SITE.whatsapp}
                target="_blank"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[#c87f30] font-bold uppercase tracking-[0.2em] text-sm mb-8">Informazioni</h4>
              <div className="space-y-6">
                <Link
                  href={SITE.mapsUrl}
                  target="_blank"
                  className="flex items-start gap-4 hover:text-[#c87f30] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#c87f30]/20 transition-colors">
                    <MapPin size={18} className="text-[#c87f30]" />
                  </div>
                  <span className="text-lg opacity-80 group-hover:opacity-100">{SITE.address}</span>
                </Link>
                <Link
                  href={SITE.phoneLink}
                  className="flex items-center gap-4 hover:text-[#c87f30] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#c87f30]/20 transition-colors">
                    <Phone size={18} className="text-[#c87f30]" />
                  </div>
                  <span className="text-lg opacity-80 group-hover:opacity-100">{SITE.phone}</span>
                </Link>
                <Link
                  href={SITE.emailLink}
                  className="flex items-center gap-4 hover:text-[#c87f30] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#c87f30]/20 transition-colors">
                    <Mail size={18} className="text-[#c87f30]" />
                  </div>
                  <span className="text-lg opacity-80 group-hover:opacity-100">{SITE.email}</span>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-[#c87f30] font-bold uppercase tracking-[0.2em] text-sm mb-8">Orari di Apertura</h4>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <p className="text-xl font-serif font-bold mb-2">Sempre al tuo servizio</p>
                <p className="opacity-70 leading-relaxed mb-4">
                  Siamo aperti tutti i giorni per offrirti il meglio della nostra cucina.
                </p>
                <div className="text-2xl font-serif text-[#c87f30]">
                  {SITE.hours}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs uppercase tracking-widest opacity-40">
                  Lunedì — Domenica
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm opacity-40">
            &copy; {new Date().getFullYear()} La Mia Patata. Tutti i diritti riservati.
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-widest opacity-40">
            <Link href="#" className="hover:text-[#c87f30] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#c87f30] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}