import React from 'react';

const ClosingBlock: React.FC = () => {
  const handleCTA = () => {
    // Disparo de Eventos do Meta Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
      (window as any).fbq('track', 'Purchase', { currency: 'BRL', value: 0.00 });
    }

    const message = encodeURIComponent("Olá! Quero entender como funciona a vitrine digital para corretores.\nOrigem: final");
    window.open(`https://wa.me/5583996254920?text=${message}`, '_blank');
  };

  return (
    <section className="w-full bg-[#0E0E11] pt-32 pb-12 md:pt-52 md:pb-16 font-monelos overflow-hidden relative flex flex-col items-center justify-center">
      {/* Sutil detalhe de luz no fundo para profundidade premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-8 md:px-12 text-center relative z-10">
        
        {/* Headline com forte destaque */}
        <h2 className="text-white text-5xl md:text-8xl font-bold mb-10 tracking-tighter leading-tight">
          Sua vitrine. <br />
          Seu controle.
        </h2>

        {/* Texto de apoio em leitura confortável */}
        <p className="text-[#B3B3B3] text-xl md:text-2xl font-light leading-relaxed mb-20 max-w-2xl mx-auto">
          Chegou o momento de deixar de depender da atenção emprestada 
          e construir uma presença digital que realmente trabalha para você.
        </p>

        {/* CTA e Texto Auxiliar */}
        <div className="flex flex-col items-center">
          <button 
            onClick={handleCTA}
            className="luxury-button-sheen group relative overflow-hidden w-full md:w-auto bg-[#C9A24D] text-black px-16 py-7 rounded-[12px] font-sans font-bold text-xs sm:text-sm tracking-[0.3em] uppercase transition-all duration-700 hover:bg-[#b08d42] shadow-[0_12px_45px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.6)] border-none outline-none"
          >
            <span className="relative z-10">Quero minha vitrine</span>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-black/10 transition-all duration-700 group-hover:w-1/3 z-20 opacity-40"></span>
          </button>
          
          <span className="mt-10 text-[#B3B3B3]/40 text-sm md:text-base font-light tracking-wide">
            Comece a estruturar sua presença digital hoje.
          </span>
        </div>
      </div>

      {/* Rodapé - Ajustado para Inter, menor e mais transparente */}
      <footer className="w-full px-8 mt-24 md:mt-40 text-center relative z-10 opacity-25">
        <p className="text-[#B3B3B3] text-[9px] font-inter font-light tracking-widest">
          © <a href="https://wa.me/5583996254920" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-500">Prime Soluções</a> — Todos os direitos reservados.
        </p>
      </footer>

    </section>
  );
};

export default ClosingBlock;