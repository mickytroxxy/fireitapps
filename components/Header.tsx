
import React, { useState } from 'react';
import { Page, NavItem } from '../types';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', target: 'home' },
    { label: 'Apps', target: 'apps' },
    { label: 'Services', target: 'services' },
    { label: 'Privacy', target: 'privacy-web' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => setPage('home')}
          >
            <div className="w-10 h-10 bg-fire-gradient rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-white text-2xl font-bold">F</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              FIRE IT <span className="text-orange-500">APPS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => setPage(item.target)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  currentPage === item.target ? 'text-orange-500' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => {
                setPage(item.target);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
