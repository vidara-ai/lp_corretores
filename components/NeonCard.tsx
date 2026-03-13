import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NeonCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  buttonLabel: string;
  targetId: string;
}

const NeonCard: React.FC<NeonCardProps> = ({ title, subtitle, description, icon: Icon, buttonLabel, targetId }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="neon-border-container min-w-[280px] sm:min-w-[320px] h-[450px] p-8 flex flex-col items-center justify-between text-center relative z-10"
    >
      <div className="flex flex-col items-center gap-6 mt-4">
        <div className="p-4 rounded-2xl bg-amber-400/10 text-amber-400">
          <Icon size={32} />
        </div>
        
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2 block">{title}</span>
          <h3 className="text-2xl font-bold text-white mb-3">{subtitle}</h3>
          <p className="text-sm text-white/60 leading-relaxed px-4 line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <button 
        onClick={scrollToSection}
        className="bg-amber-400 text-black px-8 py-3 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white hover:scale-105"
      >
        {buttonLabel}
      </button>
    </motion.div>
  );
};

export default NeonCard;
