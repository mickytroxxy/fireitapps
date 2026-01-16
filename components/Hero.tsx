
import React from 'react';

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <div className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-32">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Ignite Your <span className="text-transparent bg-clip-text bg-fire-gradient orange-glow">Venue Experience</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10">
            Next-gen gaming and music solutions for pubs, clubs, and events. From social dare games to intelligent soundscapes, we set the vibe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={onExplore}
              className="w-full sm:w-auto px-8 py-4 bg-fire-gradient text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-orange-600/20"
            >
              Discover Our Apps
            </button>
            <button 
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Partner With Us
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center justify-center font-bold text-lg">SANDTON PILOT</div>
             <div className="flex items-center justify-center font-bold text-lg">PRETORIA NIGHTS</div>
             <div className="flex items-center justify-center font-bold text-lg">18+ CERTIFIED</div>
             <div className="flex items-center justify-center font-bold text-lg">HI-FI AUDIO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
