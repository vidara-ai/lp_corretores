import React from 'react';

const DifferentialsBlock: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-32 md:py-48 font-monelos overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-24 lg:px-32">
        
        {/* Header do Bloco */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-[#0E0E11] text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
            “Uma vitrine pensada para o dia a dia do corretor.”
          </h2>
          <p className="text-[#0E0E11]/60 text-xl md:text-2xl font-light leading-relaxed">
            Tecnologia que trabalha nos bastidores para dar clareza, controle e presença digital.
          </p>
        </div>

        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          
          {/* Diferencial 1 */}
          <div className="flex flex-col items-start border-l border-[#0E0E11]/10 pl-8">
            <h4 className="text-[#0E0E11] text-xl md:text-2xl font-bold mb-4">
              CMS totalmente personalizável
            </h4>
            <p className="text-[#0E0E11]/70 text-base md:text-lg font-light leading-relaxed">
              Textos, imagens e conteúdos sob seu controle. <br />
              A vitrine se adapta à sua identidade, não o contrário.
            </p>
          </div>

          {/* Diferencial 2 */}
          <div className="flex flex-col items-start border-l border-[#0E0E11]/10 pl-8">
            <h4 className="text-[#0E0E11] text-xl md:text-2xl font-bold mb-4">
              Cadastro simples de imóveis
            </h4>
            <p className="text-[#0E0E11]/70 text-base md:text-lg font-light leading-relaxed">
              O corretor cadastra seus próprios imóveis de forma fácil e intuitiva, 
              através de um painel administrativo pensado para o uso diário.
            </p>
          </div>

          {/* Diferencial 3 */}
          <div className="flex flex-col items-start border-l border-[#0E0E11]/10 pl-8">
            <h4 className="text-[#0E0E11] text-xl md:text-2xl font-bold mb-4">
              Gestão completa de leads
            </h4>
            <p className="text-[#0E0E11]/70 text-base md:text-lg font-light leading-relaxed">
              Visualize de onde cada lead veio — formulário, botão de CTA ou contato direto. 
              Tenha histórico e possibilidade de exportação em arquivo .CSV.
            </p>
          </div>

          {/* Diferencial 4 */}
          <div className="flex flex-col items-start border-l border-[#0E0E11]/10 pl-8">
            <h4 className="text-[#0E0E11] text-xl md:text-2xl font-bold mb-4">
              Busca inteligente que nunca deixa o cliente sem opção
            </h4>
            <p className="text-[#0E0E11]/70 text-base md:text-lg font-light leading-relaxed">
              Quando uma busca não encontra termos exatos, a vitrine retorna imóveis em destaque. 
              Assim, o cliente continua navegando e sempre encontra algo relevante.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DifferentialsBlock;