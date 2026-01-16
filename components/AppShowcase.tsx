
import React from 'react';
import { Page } from '../types';

interface AppShowcaseProps {
  setPage: (p: Page) => void;
}

const AppShowcase: React.FC<AppShowcaseProps> = ({ setPage }) => {
  return (
    <section id="apps" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Apps</h2>
          <div className="h-1.5 w-20 bg-fire-gradient rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* SpiceShot Card */}
          <div className="bg-slate-800/40 rounded-3xl border border-slate-700 overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" 
                alt="SpiceShot Nightlife Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">18+ ONLY</span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">SpiceShot</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  The ultimate social dare app for nightlife. Challenge your friends, take the risk, or take the shot. Currently rocking the clubs in Sandton and Pretoria.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="text-orange-500 mr-2">✓</span> Hundreds of unique dares
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="text-orange-500 mr-2">✓</span> Location-based social play
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="text-orange-500 mr-2">✓</span> Custom club integration
                  </li>
                </ul>
              </div>
              <div className="flex space-x-4">
                <button className="flex-1 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-colors">
                  Play Now
                </button>
                <button 
                  onClick={() => setPage('privacy-spiceshot')}
                  className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors"
                >
                  Legal
                </button>
              </div>
            </div>
          </div>

          {/* Music App Card */}
          <div className="bg-slate-800/40 rounded-3xl border border-slate-700 overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" 
                alt="FireIt Music"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">COMING SOON</span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">FireIt Beats</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  Smart music scheduling for commercial venues. Adjusts energy levels automatically based on foot traffic and time of day.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="text-orange-500 mr-2">✓</span> AI-driven BPM matching
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="text-orange-500 mr-2">✓</span> Legal license management
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="text-orange-500 mr-2">✓</span> Crowd-voted playlists
                  </li>
                </ul>
              </div>
              <button className="w-full py-3 bg-slate-700 text-slate-400 font-bold rounded-xl cursor-not-allowed">
                Waitlist Open
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
