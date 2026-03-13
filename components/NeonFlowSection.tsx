import React, { useRef } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="relative w-full py-24 bg-[#0B0B0E] overflow-hidden">
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
      <div className="relative z-10 w-full overflow-hidden">
        <motion.div 
          className="flex gap-8 px-8 md:px-[10%] pb-12 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          drag="x"
          dragConstraints={{ right: 0, left: -1500 }} // Dynamic constraint would be better but this is a start
        >
          {sections.map((section, index) => (
            <div key={index} className="snap-center">
              <NeonCard {...section} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Hint */}
      <div className="text-center mt-8">
        <span className="text-[10px] text-white/20 uppercase tracking-[0.5em]">Scroll or drag to explore</span>
      </div>
    </section>
  );
};

export default NeonFlowSection;
