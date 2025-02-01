import React from 'react';

const WebDesignFeatures = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Web Design Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <div className="card-surface p-6 rounded-lg text-center">
            <svg className="h-12 w-12 text-purple-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
            <p className="text-gray-600">Websites that adapt perfectly to all devices, ensuring your content looks stunning on everything from smartphones to desktop computers.</p>
          </div>
          
          <div className="card-surface p-6 rounded-lg text-center">
            <svg className="h-12 w-12 text-pink-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <h3 className="text-xl font-semibold mb-4">Custom Design</h3>
            <p className="text-gray-600">Bespoke website designs that reflect your brand identity and engage your target audience with purposeful aesthetics.</p>
          </div>
          
          <div className="card-surface p-6 rounded-lg text-center">
            <svg className="h-12 w-12 text-indigo-600 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-xl font-semibold mb-4">Performance Optimized</h3>
            <p className="text-gray-600">Lightning-fast loading speeds and smooth functionality that keeps your visitors engaged and improves search engine rankings.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Transform Your Digital Presence</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            From sleek business websites to powerful e-commerce platforms, we create digital experiences that drive results. Our web design team combines creative excellence with technical expertise to deliver websites that stand out in today's competitive digital landscape.
          </p>
          <a href="#contact" className="gradient-bg text-white px-8 py-3 rounded-lg hover:opacity-90 inline-flex items-center">
            Start Your Web Project
            <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDesignFeatures;