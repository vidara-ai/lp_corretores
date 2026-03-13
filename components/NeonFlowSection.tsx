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
  MessageCircleCode
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
  const [activeIndex, setActiveIndex] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const CARD_WIDTH = 320;
  const GAP = 32;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Cálculo matemático para centralizar o card ativo perfeitamente em qualquer tela
  const calculateCenterOffset = (index: number) => {
    const center = windowWidth / 2;
    const cardCenterRelativeToTrack = index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2;
    return center - cardCenterRelativeToTrack;
  };

  const handleDragEnd = (event: any, info: any) => {
    const dragDistance = info.offset.x;
    const threshold = 50;

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);
      } else {
        setActiveIndex((prev) => (prev + 1) % sections.length);
      }
    }
  };

  return (
    <section 
      className="relative w-full py-24 bg-[#0B0B0E] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
        <div className="relative w-full overflow-hidden flex items-center py-20">
          <motion.div 
            className="flex gap-8 cursor-grab active:cursor-grabbing px-[50%]"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={handleDragEnd}
            animate={{ x: calculateCenterOffset(activeIndex) }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{ x: calculateCenterOffset(activeIndex) }}
          >
            {sections.map((section, index) => (
              <div 
                key={index} 
                onClick={() => setActiveIndex(index)}
              >
                <NeonCard {...section} isActive={index === activeIndex} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="text-center mt-12">
        <span className="text-[10px] text-white/20 uppercase tracking-[0.5em]">
          {isPaused ? "Paused" : "Autoplay"} • Arraste para explorar
        </span>
      </div>
    </section>
  );
};

export default NeonFlowSection;
