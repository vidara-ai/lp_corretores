import React from 'react';

const SolutionBlock: React.FC = () => {
  const handleCTA = () => {
    // Disparo de Eventos do Meta Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
      (window as any).fbq('track', 'Purchase', { currency: 'BRL', value: 0.00 });
    }

    const message = encodeURIComponent("Olá! Quero entender como funciona a vitrine digital para corretores.\nOrigem: bloco4");
    window.open(`https://wa.me/5583996254920?text=${message}`, '_blank');
  };

  return (
    <section className="w-full bg-[#F8F8F8] py-32 md:py-52 font-monelos overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-24 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Coluna Esquerda: Conteúdo Textual */}
          <div className="flex flex-col items-start text-left">
            {/* Headline com maior destaque visual */}
            <h2 className="text-[#0E0E11] text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
              “Quando a vitrine é sua, o controle também é.”
            </h2>

            {/* Sub-headline em duas linhas */}
            <h3 className="text-[#0E0E11] text-xl md:text-2xl font-semibold mb-12 leading-snug max-w-md">
              Uma presença digital pensada para o corretor <br className="hidden md:block" />
              que atingir nível máximo de excelência.
            </h3>

            {/* Texto principal em leitura editorial */}
            <div className="text-[#0E0E11]/70 text-lg md:text-xl font-light leading-relaxed space-y-4 mb-12 max-w-xl">
              <p>Em uma vitrine própria, cada acesso é seu.</p>
              <p>Cada interesse pode ser acompanhado.</p>
              <p>Cada oportunidade permanece sob seu controle - do primeiro clique ao contato final.</p>
            </div>

            {/* Texto de reforço com maior impacto visual */}
            <div className="mb-16">
              <p className="text-[#0E0E11] text-2xl md:text-3xl font-bold leading-tight">
                “Você deixa de disputar atenção. <br />
                Passa a ser o destino.”
              </p>
            </div>

            {/* CTA do Bloco 4 - Atualizado para estilo Hero */}
            <div className="w-full md:w-auto">
              <button 
                onClick={handleCTA}
                className="luxury-button-sheen group relative overflow-hidden w-full md:w-auto bg-[#C9A24D] text-black px-16 py-7 rounded-[12px] font-sans font-bold text-xs sm:text-sm tracking-[0.3em] uppercase transition-all duration-700 hover:bg-[#b08d42] shadow-[0_12px_45px_rgba(0,0,0,0.15)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.25)] border-none outline-none"
              >
                <span className="relative z-10">Quero minha vitrine</span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-black/10 transition-all duration-700 group-hover:w-1/3 z-20 opacity-40"></span>
              </button>
            </div>
          </div>

          {/* Coluna Direita: Espaço Neutro / Visual */}
          <div className="hidden md:flex items-center justify-center h-full">
            <div className="w-full h-[400px] border border-[#0E0E11]/5 rounded-2xl bg-gradient-to-br from-white to-[#F0F0F0] opacity-40"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SolutionBlock;