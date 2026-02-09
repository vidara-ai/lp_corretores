import React, { useState, useEffect } from 'react';

const ProductPreviewBlock: React.FC = () => {
  const systemScreens = [
    "https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/dash_principal.jpeg",
    "https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/dash_lisa_imoveis.jpeg",
    "https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/dash_cadastro_imoveis.jpeg",
    "https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/dash_leads.jpeg",
    "https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/dash_configpagina.jpeg",
    "https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/tela_principal.jpeg",
    "https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/detalhes_imovel.jpeg"
  ];

  const LOGO_URL = "https://ufsyauqlbjdyfipckjxs.supabase.co/storage/v1/object/public/assets/primesolucoes.png";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % systemScreens.length);
        setIsTransitioning(false);
      }, 800);
    }, 6000);

    return () => clearInterval(interval);
  }, [systemScreens.length]);

  return (
    <section className="w-full bg-[#FFFFFF] py-32 md:py-48 font-monelos overflow-hidden border-t border-[#0E0E11]/5">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Headline e Subtítulo */}
        <div className="flex flex-col items-center text-center mb-24 max-w-5xl mx-auto">
          <h2 className="text-[#0E0E11] text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Gestão inteligente em uma interface de alta performance.
          </h2>
          <p className="text-[#0E0E11]/80 text-xl md:text-2xl font-normal leading-relaxed max-w-4xl">
            Uma plataforma completa, pensada para ser intuitiva e poderosa, dando total controle ao corretor.
          </p>
        </div>

        {/* MOCKUP SAAS PREMIUM */}
        <div className="relative w-full max-w-[1100px] mx-auto group">
          
          {/* Sombra de fundo */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-[#C9A24D]/5 to-transparent blur-3xl rounded-[40px] opacity-40 pointer-events-none"></div>

          {/* Moldura do Aplicativo */}
          <div className="relative z-10 bg-white rounded-2xl border border-gray-200/50 shadow-[0_40px_100px_-12px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-700 group-hover:shadow-[0_60px_120px_-15px_rgba(0,0,0,0.18)]">
            
            {/* Barra de Título com Logo Full Color */}
            <div className="bg-[#F8F9FB] border-b border-gray-100 px-6 py-4 flex items-center justify-between select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]"></div>
              </div>
              
              {/* Logo no topo direito (PNG transparente) */}
              <img 
                src={LOGO_URL} 
                alt="Prime Soluções" 
                className="h-7 w-auto object-contain block" 
              />
            </div>

            {/* Área de Conteúdo */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
              
              {/* Marca d'água Centralizada (PNG transparente) */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <img 
                  src={LOGO_URL} 
                  alt="Watermark" 
                  className="w-1/4 h-auto opacity-[0.05]"
                />
              </div>

              <div 
                className={`w-full h-full transition-opacity duration-800 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              >
                <img 
                  key={currentIndex}
                  src={systemScreens[currentIndex]} 
                  alt="Interface Vitrine Premium" 
                  className="w-full h-auto absolute top-0 left-0 transition-transform duration-[12000ms] ease-linear transform translate-y-0 group-hover:translate-y-[-48%]"
                  style={{ 
                    objectFit: 'cover', 
                    objectPosition: 'top'
                  }}
                />
              </div>
              
              <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-black/[0.01] to-transparent"></div>
            </div>
          </div>

          {/* Indicadores de Navegação */}
          <div className="flex justify-center gap-3 mt-16">
            {systemScreens.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-[#C9A24D]' : 'w-2 bg-gray-200'}`}
              ></div>
            ))}
          </div>

        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-32 text-center max-w-6xl mx-auto">
          <div className="px-4">
            <h3 className="text-[#0E0E11] text-2xl font-bold mb-4">Performance</h3>
            <p className="text-[#0E0E11]/70 text-lg leading-relaxed">Carregamento instantâneo para não perder o interesse do lead.</p>
          </div>
          <div className="px-4">
            <h3 className="text-[#0E0E11] text-2xl font-bold mb-4">Intuitivo</h3>
            <p className="text-[#0E0E11]/70 text-lg leading-relaxed">Curva de aprendizado zero: focado na sua produtividade real.</p>
          </div>
          <div className="px-4">
            <h3 className="text-[#0E0E11] text-2xl font-bold mb-4">Controle</h3>
            <p className="text-[#0E0E11]/70 text-lg leading-relaxed">Histórico completo de cada interação feita na sua vitrine.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductPreviewBlock;