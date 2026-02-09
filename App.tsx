import React from 'react';
import LandingHero from './components/LandingHero.tsx';
import EditorialBlock from './components/EditorialBlock.tsx';
import MarketAnalysisBlock from './components/MarketAnalysisBlock.tsx';
import SolutionBlock from './components/SolutionBlock.tsx';
import ProductPreviewBlock from './components/ProductPreviewBlock.tsx';
import DifferentialsBlock from './components/DifferentialsBlock.tsx';
import AuthorityBlock from './components/AuthorityBlock.tsx';
import ClosingBlock from './components/ClosingBlock.tsx';

const App: React.FC = () => {
  return (
    <main className="w-full">
      <LandingHero />
      <EditorialBlock />
      <MarketAnalysisBlock />
      <SolutionBlock />
      <ProductPreviewBlock />
      <DifferentialsBlock />
      <AuthorityBlock />
      <ClosingBlock />
    </main>
  );
};

export default App;