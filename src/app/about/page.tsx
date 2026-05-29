import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";
import { Utensils, Award, Heart, Star, Check } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-48 pb-32 bg-[#261b1f] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000"
            alt="Italy background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 text-white">
          <ScrollReveal>
            <p className="text-[#c87f30] font-bold tracking-[0.3em] uppercase mb-4">
              La Nostra Essenza
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8">
              La Nostra Storia<span className="text-[#c87f30]">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Dalla terra alla tavola, con un tocco di regalità. Scopri come abbiamo 
              trasformato un semplice tubero in un capolavoro culinario.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Concept - Split Layout */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c87f30]/10 rounded-full blur-3xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1599321955419-78537d3d1323?q=80&w=1000"
                    alt="Chef preparing potato"
                    width={1000}
                    height={1200}
                    className="object-cover w-full h-[600px]"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#261b1f] p-10 rounded-3xl text-white shadow-2xl max-w-xs hidden md:block">
                  <p className="font-serif italic text-xl mb-4 text-[#c87f30]">
                    &ldquo;La semplicità è l&apos;ultima raffinatezza.&rdquo;
                  </p>
                  <p className="text-sm opacity-60">— Leonardo da Vinci</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#261b1f] mb-8 leading-tight">
                  Un Concept <br />
                  <span className="text-[#c87f30]">Rivoluzionario.</span>
                </h2>
                <p className="text-lg text-[#261b1f]/70 mb-8 leading-relaxed">
                  <strong className="text-[#c87f30]">La Mia Patata</strong> nasce da una visione semplice ma ambiziosa: 
                  celebrare la patata come protagonista assoluta. Non più un semplice contorno, 
                  ma il cuore pulsante di ogni piatto.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#f4ece2] rounded-full flex items-center justify-center text-[#c87f30] flex-shrink-0">
                      <Check size={20} />
                    </div>
                    <p className="text-[#261b1f]/80">Ingredienti italiani d&apos;eccellenza e selezione premium.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#f4ece2] rounded-full flex items-center justify-center text-[#c87f30] flex-shrink-0">
                      <Check size={20} />
                    </div>
                    <p className="text-[#261b1f]/80">Oltre 30 ricette firmate dall&apos;Executive Chef.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#f4ece2] rounded-full flex items-center justify-center text-[#c87f30] flex-shrink-0">
                      <Check size={20} />
                    </div>
                    <p className="text-[#261b1f]/80">Un locale moderno e accogliente nel cuore di Riccione.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="section-padding bg-[#f4ece2]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#261b1f] mb-6">
                La Firma del Locale<span className="text-[#c87f30]">.</span>
              </h2>
              <p className="text-xl text-[#261b1f]/60 max-w-2xl mx-auto">
                La nostra Baked Potato è l&apos;icona che ci ha reso celebri. Un equilibrio perfetto tra croccantezza e morbidezza.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-10 rounded-3xl shadow-xl text-center group hover:bg-[#c87f30] transition-all duration-500">
                <div className="w-16 h-16 bg-[#f4ece2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 group-hover:text-white text-[#c87f30] transition-colors">
                  <Utensils size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-white transition-colors">Aperta al Momento</h3>
                <p className="opacity-70 group-hover:text-white transition-colors">Preparata con cura e servita bollente per massimizzare il gusto.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-10 rounded-3xl shadow-xl text-center group hover:bg-[#c87f30] transition-all duration-500">
                <div className="w-16 h-16 bg-[#f4ece2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 group-hover:text-white text-[#c87f30] transition-colors">
                  <Star size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-white transition-colors">Sughi a Scelta</h3>
                <p className="opacity-70 group-hover:text-white transition-colors">Dalla carbonara al ragù, scegli il tuo condimento preferito.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-10 rounded-3xl shadow-xl text-center group hover:bg-[#c87f30] transition-all duration-500">
                <div className="w-16 h-16 bg-[#f4ece2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 group-hover:text-white text-[#c87f30] transition-colors">
                  <Award size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-white transition-colors">Qualità Riccione</h3>
                <p className="opacity-70 group-hover:text-white transition-colors">Il primo locale fronte Palazzo del Turismo, un punto di riferimento.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding bg-[#261b1f] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <Image 
            src="/images/store-exterior.jpg"
            alt="La Mia Patata Riccione Store"
            fill
            className="object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="right">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
                Ti Aspettiamo nel Cuore di Riccione
              </h2>
              <p className="text-xl mb-12 opacity-80 leading-relaxed font-light">
                Vieni a trovarci in Viale Dante, davanti al Palazzo del Turismo. 
                Un ambiente moderno e dinamico pensato per chi ama il buon cibo italiano 
                senza rinunciare alla velocità e alla praticità.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                  <div className="text-4xl font-serif font-bold text-[#c87f30] mb-2">40-50</div>
                  <div className="text-sm uppercase tracking-widest opacity-60">Coperti</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                  <div className="text-4xl font-serif font-bold text-[#c87f30] mb-2">12H</div>
                  <div className="text-sm uppercase tracking-widest opacity-60">Servizio</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                  <div className="text-4xl font-serif font-bold text-[#c87f30] mb-2">Premium</div>
                  <div className="text-sm uppercase tracking-widest opacity-60">Qualità</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}