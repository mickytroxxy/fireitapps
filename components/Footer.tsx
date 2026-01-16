
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setPage: (p: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-fire-gradient rounded flex items-center justify-center font-bold text-white">F</div>
              <span className="text-xl font-bold text-white">FIRE IT <span className="text-orange-500">APPS</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Empowering the hospitality industry with digital tools that drive engagement and atmosphere. Based in South Africa, testing in Sandton & Pretoria.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Instagram</a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => setPage('apps')} className="hover:text-white transition-colors">SpiceShot (18+)</button></li>
              <li><button onClick={() => setPage('apps')} className="hover:text-white transition-colors">FireIt Beats</button></li>
              <li><button onClick={() => setPage('apps')} className="hover:text-white transition-colors">Venue Pro</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => setPage('privacy-web')} className="hover:text-white transition-colors">Privacy Policy (Web)</button></li>
              <li><button onClick={() => setPage('privacy-spiceshot')} className="hover:text-white transition-colors">Privacy Policy (SpiceShot)</button></li>
              <li><a href="mailto:support@fireitapps.shop" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2024 FireItApps. Developed with 🔥 for the entertainment industry.</p>
          <p className="mt-4 md:mt-0">support@fireitapps.shop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
