
import React from 'react';

interface PrivacyPageProps {
  type: 'web' | 'spiceshot';
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ type }) => {
  const isSpiceShot = type === 'spiceshot';
  const title = isSpiceShot ? "SpiceShot Privacy Policy" : "FireItApps Website Privacy Policy";
  const lastUpdated = "May 20, 2024";

  return (
    <div className="py-12 md:py-20 bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-4">{title}</h1>
        <p className="text-slate-400 mb-8 italic">Last Updated: {lastUpdated}</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">1. Introduction</h2>
            <p>
              Welcome to FireItApps. We value your privacy and are committed to protecting your personal data. 
              {isSpiceShot 
                ? " This policy specifically governs the SpiceShot application, designed for users 18 years and older in the Sandton and Pretoria regions."
                : " This policy applies to our corporate website fireitapps.shop."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">2. Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              {isSpiceShot ? (
                <>
                  <li><strong>Age Verification:</strong> We collect birth date or ID confirmation to ensure all players are 18+.</li>
                  <li><strong>Location Data:</strong> To enable venue-specific game modes in areas like Sandton and Pretoria.</li>
                  <li><strong>Device Info:</strong> Unique device identifiers to prevent abuse and manage game sessions.</li>
                </>
              ) : (
                <>
                  <li><strong>Contact Info:</strong> Name and email via support forms.</li>
                  <li><strong>Usage Data:</strong> How you navigate our website via cookies.</li>
                  <li><strong>IP Address:</strong> For security and regional analytics.</li>
                </>
              )}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">3. How We Use Data</h2>
            <p>
              We use your information to provide our services, maintain security, and improve our products. 
              {isSpiceShot && " For SpiceShot, location data is used strictly during active gameplay sessions to sync players within the same venue."}
            </p>
          </section>

          {isSpiceShot && (
            <section className="bg-orange-600/10 border border-orange-500/30 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">4. Alcohol & Safety (18+)</h2>
              <p>
                SpiceShot is an entertainment app for adults. We do not encourage excessive alcohol consumption. 
                Always drink responsibly. Our app includes "Drink Water" and "Skip" features to ensure safety 
                in public venues across South Africa.
              </p>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">5. Contact Us</h2>
            <p>
              For any privacy-related questions, please contact our data protection officer at:
              <br />
              <strong className="text-white">support@fireitapps.shop</strong>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500">
            FireItApps.shop © 2024. All rights reserved. Registered in South Africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
