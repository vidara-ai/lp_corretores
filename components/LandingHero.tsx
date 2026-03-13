import React, { useEffect, useState, Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const LandingHero: React.FC = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const sheenTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000);

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 8000);

    return () => {
      clearTimeout(sheenTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  const handleCTA = () => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
      (window as any).fbq('track', 'Purchase', { currency: 'BRL', value: 0.00 });
    }

    const message = encodeURIComponent("Olá! Quero entender como funciona a vitrine digital para corretores.\nOrigem: hero");
    window.open(`https://wa.me/5583996254920?text=${message}`, '_blank');
  };

  return (
    <section className="relative flex min-h-screen w-full bg-[#0B0B0E] antialiased overflow-hidden font-monelos items-center justify-center">
      
      {/* 📝 CONTEÚDO TEXTUAL - Agora centralizado e sem Spline */}
      <div className="relative w-full max-w-5xl flex items-center justify-center bg-[#0B0B0E] z-20 px-8">
        <div className="w-full py-16 md:py-24 text-center flex flex-col items-center">
          
          <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.1] mb-8 md:mb-12 tracking-tight">
            Sua vitrine precisa <br className="hidden sm:block" />
            chamar atenção <br className="hidden sm:block" />
            igual a essa <span 
              className={`keyword-container ${animationStarted ? 'animating' : ''} ${isFading ? 'faded' : ''}`}
            >
              tecnologia
            </span> <br className="hidden sm:block" />
            no último pavimento.
          </h1>

          <p className="text-white/60 text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl mb-12 md:mb-16">
            Construímos vitrines digitais para corretores que buscam o topo do mercado.
          </p>

          <div className="w-full md:w-auto">
            <button 
              onClick={handleCTA}
              className="luxury-button-sheen group relative overflow-hidden w-full md:w-auto bg-amber-400 text-black px-16 py-7 rounded-[12px] font-sans font-bold text-sm tracking-[0.3em] uppercase transition-all duration-700 hover:bg-amber-500 shadow-[0_12px_45px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.6)] border-none outline-none"
            >
              <span className="relative z-10">QUERO ME DESTACAR</span>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-black/10 transition-all duration-700 group-hover:w-1/3 z-20 opacity-40"></span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingHero;