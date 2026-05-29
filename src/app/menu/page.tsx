import Image from "next/image";
import { MENU_CATEGORIES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star, ArrowRight, Utensils } from "lucide-react";

const categoryImages = [
  "https://images.unsplash.com/photo-1599321955419-78537d3d1323?q=80&w=800",
  "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800",
  "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800",
  "https://images.unsplash.com/photo-1610393044160-59aa13c1932f?q=80&w=800",
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-48 pb-32 bg-[#261b1f] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?q=80&w=2000"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 text-white">
          <ScrollReveal>
            <p className="text-[#c87f30] font-bold tracking-[0.3em] uppercase mb-4">
              I Nostri Piatti
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8">
              Quattro Mondi<span className="text-[#c87f30]">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Dalla firma del locale alle creazioni più innovative: un viaggio attraverso 
              le infinite possibilità di un solo ingrediente.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {MENU_CATEGORIES.map((category, i) => (
            <ScrollReveal key={category.id} delay={i * 100} className="mb-32 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start`}>
                {/* Info & Image */}
                <div className={`lg:col-span-5 ${i % 2 !== 0 ? "lg:order-last" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
                    <Image 
                      src={categoryImages[i]}
                      alt={category.name}
                      width={800}
                      height={600}
                      className="object-cover w-full h-[400px] transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full flex items-center gap-2">
                      <span className="text-2xl font-serif font-bold text-[#c87f30]">0{i + 1}</span>
                      <span className="w-1 h-6 bg-[#c87f30]/30 rounded-full" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#261b1f]">Categoria</span>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#261b1f] mb-4">
                    {category.name}
                  </h2>
                  <p className="text-lg text-[#261b1f]/70 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-4 text-[#c87f30]">
                    <Utensils size={20} />
                    <span className="font-bold tracking-widest uppercase text-sm">Qualità Premium</span>
                  </div>
                </div>

                {/* Items List */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, j) => (
                      <div
                        key={j}
                        className="group bg-[#f4ece2]/40 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#c87f30]/10"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-serif font-bold text-[#261b1f] group-hover:text-[#c87f30] transition-colors">
                            {item.name}
                          </h3>
                          {j === 0 && (
                            <span className="bg-[#c87f30] text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                              Top
                            </span>
                          )}
                        </div>
                        <p className="text-[#261b1f]/60 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative element */}
                  <div className="mt-8 p-6 border-2 border-dashed border-[#c87f30]/20 rounded-2xl flex items-center justify-between">
                    <p className="text-sm italic text-[#261b1f]/50">
                      Tutti i piatti sono preparati al momento con ingredienti freschi.
                    </p>
                    <Star size={20} className="text-[#c87f30]/30" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#c87f30] text-white relative overflow-hidden">
        {/* Abstract circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Hai già l&apos;acquolina in bocca?
            </h2>
            <p className="text-xl mb-12 opacity-90 font-light max-w-2xl mx-auto">
              Ordina ora e ricevi la tua patata premium direttamente a casa o vieni a ritirarla in locale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+390541000000"
                className="bg-white text-[#c87f30] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#f4ece2] transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Chiama ora</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#c87f30] transition-all flex items-center justify-center gap-2"
              >
                Inviaci un Messaggio
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}