import React from 'react';
import LandingHero from './components/LandingHero';
import EditorialBlock from './components/EditorialBlock';
import MarketAnalysisBlock from './components/MarketAnalysisBlock';
import SolutionBlock from './components/SolutionBlock';
import ProductPreviewBlock from './components/ProductPreviewBlock';
import DifferentialsBlock from './components/DifferentialsBlock';
import AuthorityBlock from './components/AuthorityBlock';
import ClosingBlock from './components/ClosingBlock';

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