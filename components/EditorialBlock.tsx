import React from 'react';

const EditorialBlock: React.FC = () => {
  const handleCTA = () => {
    // Disparo de Eventos do Meta Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
      (window as any).fbq('track', 'Purchase', { currency: 'BRL', value: 0.00 });
    }

    const message = encodeURIComponent("Olá! Quero entender como funciona a vitrine digital para corretores.\nOrigem: bloco2");
    window.open(`https://wa.me/5583996254920?text=${message}`, '_blank');
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-32 md:py-56 font-monelos overflow-hidden">
      <div className="max-w-3xl px-8 md:px-24 lg:px-32 text-left">
        {/* Headline com maior destaque visual */}
        <h2 className="text-[#0E0E11] text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-tight">
          “Ela não está mais lá.”
        </h2>
        
        {/* Sub-headline logo abaixo, em duas linhas */}
        <div className="mb-8">
          <p className="text-[#0E0E11] text-3xl md:text-4xl font-semibold leading-snug">
            Atenção não espera. <br />
            Leads também não.
          </p>
        </div>

        {/* Texto de apoio menor, com cor mais suave */}
        <p className="text-[#0E0E11]/60 text-lg md:text-xl font-light mb-16 max-w-2xl">
          Sem uma vitrine forte, sua oportunidade desaparece antes do contato.
        </p>

        {/* CTA do Bloco 2 com as mesmas configurações da Hero */}
        <div className="flex flex-col items-start">
          <button 
            onClick={handleCTA}
            className="luxury-button-sheen group relative overflow-hidden w-full md:w-auto bg-[#C9A24D] text-black px-16 py-7 rounded-[12px] font-sans font-bold text-xs sm:text-sm tracking-[0.3em] uppercase transition-all duration-700 hover:bg-[#b08d42] shadow-[0_12px_45px_rgba(0,0,0,0.15)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.25)] border-none outline-none"
          >
            <span className="relative z-10">Posicionar minha vitrine</span>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-black/10 transition-all duration-700 group-hover:w-1/3 z-20 opacity-40"></span>
          </button>
          
          {/* Texto auxiliar opcional abaixo do botão */}
          <span className="mt-8 text-[#0E0E11]/40 text-sm md:text-base font-light italic">
            Comece a ser visto antes que a atenção vá embora.
          </span>
        </div>
      </div>
    </section>
  );
};

export default EditorialBlock;