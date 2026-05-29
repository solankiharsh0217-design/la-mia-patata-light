"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Chi Siamo" },
  { href: "/contact", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-500 rounded-full px-6 py-2 flex items-center justify-between ${
          scrolled ? "glass shadow-xl" : "bg-transparent"
        }`}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#c87f30]/20 group-hover:border-[#c87f30] transition-colors">
              <Image 
                src="/images/logo-raw.jpg" 
                alt="La Mia Patata Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span className={`text-2xl font-serif font-bold transition-colors hidden sm:inline-block ${
              scrolled ? "text-[#261b1f] group-hover:text-[#c87f30]" : "text-white group-hover:text-[#c87f30]"
            }`}>
              La Mia <span className={`transition-colors ${
                scrolled ? "text-[#c87f30] group-hover:text-[#261b1f]" : "text-[#c87f30] group-hover:text-white"
              }`}>Patata</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:text-[#c87f30] cursor-pointer ${
                    isActive 
                      ? "text-[#c87f30]" 
                      : scrolled ? "text-[#261b1f]" : "text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c87f30] rounded-full animate-scale-in" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="bg-[#c87f30] hover:bg-[#b57228] text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              <span>Ordina Ora</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden cursor-pointer p-2 transition-colors rounded-full ${
              scrolled ? "text-[#261b1f] hover:bg-[#c87f30]/10" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-[#f4ece2] transition-transform duration-500 ease-in-out ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full p-8 gap-8 justify-center items-center text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-3xl font-serif font-bold transition-colors ${
                  isActive ? "text-[#c87f30]" : "text-[#261b1f]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-[#c87f30] text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Ordina Ora
          </Link>
          
          <button 
            onClick={() => setMobileOpen(false)}
            className="absolute top-8 right-8 p-3 text-[#261b1f]"
          >
            <X size={32} />
          </button>
        </div>
      </div>
    </nav>
  );
}