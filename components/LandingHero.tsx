import React, { useEffect, useState, Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const LandingHero: React.FC = () => {
  // const imageUrl = "https://urcrpzbxxomluvyxucvj.supabase.co/storage/v1/object/public/assets/hero-bgr.png";
  const bgColor = "#0B0B0E";

  const [animationStarted, setAnimationStarted] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Inicia o brilho após 1s de entrada
    const sheenTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000);

    // 2. Inicia o desaparecimento (Acionado exatamente 7.0 segundos após o início da animação)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 8000); // 1s (delay inicial) + 7s (conforme solicitado)

    return () => {
      clearTimeout(sheenTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  const handleCTA = () => {
    // Disparo de Eventos do Meta Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
      (window as any).fbq('track', 'Purchase', { currency: 'BRL', value: 0.00 });
    }

    const message = encodeURIComponent("Olá! Quero entender como funciona a vitrine digital para corretores.\nOrigem: hero");
    window.open(`https://wa.me/5583996254920?text=${message}`, '_blank');
  };

  return (
    <section className="relative flex flex-col md:flex-row min-h-screen w-full bg-[#0B0B0E] antialiased overflow-hidden font-monelos">
      
      {/* 🖼️ CAMADA DO MODELO 3D SPLINE */}
      <div className="relative w-full md:w-1/2 min-h-[55vh] md:min-h-screen overflow-hidden flex items-center justify-center">
        <Suspense fallback={<div className="text-white/20">Carregando...</div>}>
          <div className="w-full h-full scale-[1.0] md:scale-[1.3] lg:scale-[1.5] pointer-events-none">
            <Spline scene="https://prod.spline.design/AzbVBTGYCvCJ-Scq/scene.splinecode" />
          </div>
        </Suspense>
        
        {/* Gradientes de Transição Suave */}
        <div className="absolute inset-0 z-10 block md:hidden" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(11,11,14,0.4) 60%, ${bgColor} 100%)` }} />
        <div className="hidden md:block absolute inset-0 z-10" style={{ background: `linear-gradient(90deg, rgba(11,11,14,0) 0%, rgba(11,11,14,0) 30%, rgba(11,11,14,0.2) 50%, rgba(11,11,14,0.7) 80%, ${bgColor} 100%)` }} />
      </div>

      {/* 📝 CONTEÚDO TEXTUAL */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center md:justify-end bg-[#0B0B0E] z-20">
        <div className="max-w-2xl w-full px-8 py-16 md:py-24 md:px-16 lg:px-24 text-center md:text-right flex flex-col items-center md:items-end">
          
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] md:leading-[1.1] mb-8 md:mb-12 tracking-tight">
            Sua vitrine precisa <br className="hidden sm:block" />
            chamar atenção <br className="hidden sm:block" />
            igual a essa <span 
              className={`keyword-container ${animationStarted ? 'animating' : ''} ${isFading ? 'faded' : ''}`}
            >
              tecnologia
            </span> <br className="hidden sm:block" />
            no último pavimento.
          </h1>

          <p className="text-white/60 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-lg mb-12 md:mb-16">
            Construímos vitrines digitais para corretores que buscam o topo do mercado.
          </p>

          <div className="w-full md:w-auto">
            <button 
              onClick={handleCTA}
              className="luxury-button-sheen group relative overflow-hidden w-full md:w-auto bg-amber-400 text-black px-16 py-7 rounded-[12px] font-sans font-bold text-xs sm:text-sm tracking-[0.3em] uppercase transition-all duration-700 hover:bg-amber-500 shadow-[0_12px_45px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.6)] border-none outline-none"
            >
              <span className="relative z-10">QUERO ME DESTACAR</span>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-black/10 transition-all duration-700 group-hover:w-1/3 z-20 opacity-40"></span>
            </button>
          </div>

        </div>
      </div>

      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/5 z-30 pointer-events-none"></div>
    </section>
  );
};

export default LandingHero;