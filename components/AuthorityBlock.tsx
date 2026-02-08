import React from 'react';

const AuthorityBlock: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-32 md:py-56 font-monelos overflow-hidden border-t border-[#0E0E11]/5">
      <div className="max-w-3xl mx-auto px-8 md:px-12 text-left md:text-center">
        
        {/* Headline em destaque */}
        <h2 className="text-[#0E0E11] text-4xl md:text-6xl font-bold mb-12 tracking-tight leading-tight">
          “Uma estrutura pensada para funcionar no mundo real.”
        </h2>

        {/* Texto principal em leitura confortável */}
        <div className="text-[#0E0E11]/80 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
          <p>
            A vitrine foi construída a partir da rotina de corretores que atuam diariamente no mercado. 
            Cada decisão - do layout à gestão de leads - foi pensada para resolver problemas reais, não para inflar métricas.
          </p>
        </div>

        {/* Elementos de Autoridade (Editoriais) - Apresentados como fluxo de texto */}
        <div className="space-y-10 mb-20">
          <p className="text-[#0E0E11] text-xl md:text-2xl font-medium tracking-tight">
            Estrutura pensada para conversão e gestão.
          </p>
          <p className="text-[#0E0E11] text-xl md:text-2xl font-medium tracking-tight">
            Navegação clara para o cliente final.
          </p>
          <p className="text-[#0E0E11] text-xl md:text-2xl font-medium tracking-tight">
            Controle total do corretor sobre sua presença digital.
          </p>
          <p className="text-[#0E0E11] text-xl md:text-2xl font-medium tracking-tight">
            Independência estratégica em relação a plataformas de terceiros.
          </p>
        </div>

        {/* Texto de reforço com maior impacto visual */}
        <div className="pt-8 border-t border-[#0E0E11]/10 inline-block px-12">
          <p className="text-[#0E0E11] text-2xl md:text-4xl font-bold leading-tight uppercase tracking-widest">
            “Não é sobre promessas. <br />
            É sobre método.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default AuthorityBlock;