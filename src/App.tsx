import React, { useState, useEffect } from 'react';
import { NewOpeningIntro } from './components/NewOpeningIntro';
import { Navbar } from './components/Navbar';
import { FooterBrandReveal } from './components/FooterBrandReveal';
import { InstantQuoteModal } from './components/InstantQuoteModal';

// Dedicated Page Views
import { HomeView } from './components/pages/HomeView';
import { ProjectsView } from './components/pages/ProjectsView';
import { ServicesView } from './components/pages/ServicesView';
import { SimulationsView } from './components/pages/SimulationsView';
import { InfrastructureView } from './components/pages/InfrastructureView';
import { ContactView } from './components/pages/ContactView';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [initialServiceForQuote, setInitialServiceForQuote] = useState<string | undefined>(undefined);

  // Sync with URL Hash on Mount & Popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      const validPages = ['home', 'projects', 'services', 'simulations', 'infrastructure', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === 'case-studies' || hash === 'virtual-tour-section' || hash === 'virtual-tour') {
        setCurrentPage('projects');
      } else if (hash === 'interactive-3d-lab') {
        setCurrentPage('simulations');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceId?: string) => {
    setInitialServiceForQuote(serviceId);
    setQuoteModalOpen(true);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      {/* Cinematic Opening Intro */}
      {showIntro && (
        <NewOpeningIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Primary Floating Navigation System */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Page Stage with Smooth View Switching */}
      <main className={`flex-grow ${currentPage === 'home' ? 'pt-0' : 'pt-24 sm:pt-28'}`}>
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsView
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'simulations' && (
          <SimulationsView
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'infrastructure' && (
          <InfrastructureView
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
      </main>

      {/* Grounded Corporate Footer & MKRD Reveal */}
      <FooterBrandReveal
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onReplayIntro={handleReplayIntro}
      />

      {/* Rapid RFQ CAD Estimator Modal */}
      <InstantQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialServiceId={initialServiceForQuote}
      />
    </div>
  );
}
