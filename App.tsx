
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import AppShowcase from './components/AppShowcase';
import ChatBot from './components/ChatBot';
import PrivacyPage from './components/PrivacyPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Simple "routing" based on hash or internal state
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'apps', 'services', 'privacy-web', 'privacy-spiceshot'].includes(hash)) {
        setCurrentPage(hash as Page);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => handlePageChange('apps')} />
            <AppShowcase setPage={handlePageChange} />
            <section className="py-20 bg-orange-600">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-6">Ready to fire up your venue?</h2>
                <p className="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">
                  Join our pilot program in Gauteng. We're looking for partner venues in Sandton and Pretoria to test our latest interactive features.
                </p>
                <button className="px-10 py-4 bg-white text-orange-600 font-bold rounded-full hover:shadow-xl transition-all">
                  Apply for Partnership
                </button>
              </div>
            </section>
          </>
        );
      case 'apps':
        return <AppShowcase setPage={handlePageChange} />;
      case 'services':
        return (
          <div className="py-32 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-8 text-white">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: 'Gaming Apps', desc: 'Interactive social games like SpiceShot that keep patrons engaged and spending.' },
                { title: 'Music Systems', desc: 'Venue-specific music management that adapts to the vibe of your crowd.' },
                { title: 'Event Tech', desc: 'Custom digital activation for large scale festivals and corporate hospitality.' }
              ].map(s => (
                <div key={s.title} className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
                  <h3 className="text-orange-500 font-bold mb-4 text-xl">{s.title}</h3>
                  <p className="text-slate-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'privacy-web':
        return <PrivacyPage type="web" />;
      case 'privacy-spiceshot':
        return <PrivacyPage type="spiceshot" />;
      default:
        return <Hero onExplore={() => handlePageChange('apps')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setPage={handlePageChange} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setPage={handlePageChange} />
      <ChatBot />
    </div>
  );
};

export default App;
