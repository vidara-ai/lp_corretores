import React from 'react';

const MarketAnalysisBlock: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-32 md:py-48 font-monelos overflow-hidden border-t border-[#0E0E11]/5">
      <div className="max-w-3xl px-8 md:px-24 lg:px-32 text-left">
        {/* Headline em maior destaque */}
        <h2 className="text-[#0E0E11] text-4xl md:text-6xl font-bold mb-16 tracking-tight leading-tight">
          “O modelo atual não foi feito para o corretor.”
        </h2>

        {/* Parágrafos em leitura editorial */}
        <div className="space-y-8 mb-16">
          <p className="text-[#0E0E11]/80 text-lg md:text-xl font-light leading-relaxed">
            Hoje, para vender ou alugar, a maioria dos corretores depende de grandes portais imobiliários. Eles são parte do jogo. Mas também definem as regras.
          </p>
          <p className="text-[#0E0E11]/80 text-lg md:text-xl font-light leading-relaxed">
            O corretor anuncia, investe para destacar seus imóveis e compartilha o link do portal com seus próprios contatos. O tráfego acontece. A atenção chega. Mas nem sempre fica.
          </p>
          <p className="text-[#0E0E11]/80 text-lg md:text-xl font-light leading-relaxed">
            Quando um cliente acessa um portal, ele pode falar com quem indicou o imóvel. Ou pode simplesmente escolher outro anúncio — e desaparecer do radar.
          </p>
        </div>

        {/* Texto de destaque / virada com maior peso visual */}
        <div className="py-12 border-l-2 border-[#C9A24D] pl-8 mb-16 bg-[#FAFAFA]">
          <p className="text-[#0E0E11] text-xl md:text-2xl font-bold leading-snug">
            “Nesse modelo, o corretor só conhece quem entra em contato. Todo o resto pertence ao portal.”
          </p>
        </div>

        {/* Texto de transição curto e separado */}
        <p className="text-[#C9A24D] text-lg md:text-xl font-bold tracking-wide uppercase">
          Uma vitrine própria muda essa lógica.
        </p>
      </div>
    </section>
  );
};

export default MarketAnalysisBlock;