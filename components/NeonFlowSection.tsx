import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeonCard from './NeonCard';
import { 
  Building2, 
  Target, 
  Lightbulb, 
  Rocket, 
  ShieldCheck, 
  PieChart, 
  MessageCircleCode,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const sections = [
  {
    title: "Section 1",
    subtitle: "Hero",
    description: "Sua vitrine digital de alto impacto no último pavimento.",
    icon: Building2,
    buttonLabel: "Ver Hero",
    targetId: "hero"
  },
  {
    title: "Section 2",
    subtitle: "Análise",
    description: "Entenda o mercado e como se destacar da concorrência.",
    icon: PieChart,
    buttonLabel: "Explorar",
    targetId: "market-analysis"
  },
  {
    title: "Section 3",
    subtitle: "Solução",
    description: "A vitrine premium que transforma leads em clientes.",
    icon: Lightbulb,
    buttonLabel: "Descobrir",
    targetId: "solution"
  },
  {
    title: "Section 4",
    subtitle: "Produto",
    description: "Visualização detalhada da sua vitrine digital.",
    icon: Rocket,
    buttonLabel: "Preview",
    targetId: "product-preview"
  },
  {
    title: "Section 5",
    subtitle: "Diferenciais",
    description: "O que nos torna a escolha número um dos corretores de elite.",
    icon: ShieldCheck,
    buttonLabel: "Comparar",
    targetId: "differentials"
  },
  {
    title: "Section 6",
    subtitle: "Autoridade",
    description: "Nossa experiência e resultados comprovados no mercado imobiliário.",
    icon: Target,
    buttonLabel: "Validar",
    targetId: "authority"
  },
  {
    title: "Section 7",
    subtitle: "Contato",
    description: "Pronto para o próximo nível? Entre em contato agora.",
    icon: MessageCircleCode,
    buttonLabel: "Falar Agora",
    targetId: "closing"
  }
];

const NeonFlowSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Start with middle section
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % sections.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <section 
      className="relative w-full py-24 bg-[#0B0B0E] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      {/* Animated Background Waves */}
      <div className="neon-bg-wave top-1/4 -left-1/4 opacity-30" />
      <div className="neon-bg-wave bottom-1/4 -right-1/4 opacity-20" style={{ animationDelay: '-5s', background: 'radial-gradient(ellipse at center, var(--neon-purple) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-8 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
        >
          EXPERIENCE THE <span className="text-amber-400 neon-text-glow">NEON WAVE</span>
        </motion.h2>
        <p className="text-white/40 text-lg md:text-xl font-light">
          Navegue pela sua nova vitrine através de uma experiência fluida e conectada.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="relative w-full overflow-hidden flex justify-center items-center py-20 px-10">
          <motion.div 
            className="flex gap-8"
            animate={{ x: `calc(50% - ${activeIndex * (320 + 32)}px - 160px)` }} // 320 card width + 32 gap
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {sections.map((section, index) => (
              <div key={index} onClick={() => setActiveIndex(index)} className="cursor-pointer">
                <NeonCard {...section} isActive={index === activeIndex} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-12 mt-12 items-center">
          <button 
            onClick={handlePrev}
            className="text-white/40 hover:text-white transition-colors"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>
          
          <div className="flex gap-3">
            {sections.map((_, i) => (
              <div 
                key={i}
                className={`h-1 duration-500 transition-all rounded-full ${i === activeIndex ? 'w-12 bg-amber-400' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="text-white/40 hover:text-white transition-colors"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>
        </div>
      </div>

      <div className="text-center mt-12">
        <span className="text-[10px] text-white/20 uppercase tracking-[0.5em]">
          {isPaused ? "Focused" : "Auto-shuffling"} • Click a card to focus
        </span>
      </div>
    </section>
  );
};

export default NeonFlowSection;
