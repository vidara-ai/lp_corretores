import React from 'react';
import LandingHero from './components/LandingHero.tsx';
import EditorialBlock from './components/EditorialBlock.tsx';
import MarketAnalysisBlock from './components/MarketAnalysisBlock.tsx';
import SolutionBlock from './components/SolutionBlock.tsx';
import ProductPreviewBlock from './components/ProductPreviewBlock.tsx';
import DifferentialsBlock from './components/DifferentialsBlock.tsx';
import AuthorityBlock from './components/AuthorityBlock.tsx';
import ClosingBlock from './components/ClosingBlock.tsx';
import NeonFlowSection from './components/NeonFlowSection.tsx';
import './index.css';

const App: React.FC = () => {
  return (
    <main className="w-full">
      <div id="hero">
        <LandingHero />
      </div>
      
      <NeonFlowSection />

      <div id="editorial">
        <EditorialBlock />
      </div>
      <div id="market-analysis">
        <MarketAnalysisBlock />
      </div>
      <div id="solution">
        <SolutionBlock />
      </div>
      <div id="product-preview">
        <ProductPreviewBlock />
      </div>
      <div id="differentials">
        <DifferentialsBlock />
      </div>
      <div id="authority">
        <AuthorityBlock />
      </div>
      <div id="closing">
        <ClosingBlock />
      </div>
    </main>
  );
};

export default App;