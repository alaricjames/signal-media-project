import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-8 w-8 mr-2 text-purple-400" fill="currentColor">
              <path d="M5.0787,33.34785c.51955-1.68853,15.64267,2.3464,19.88853.3352s3.6872-5.25146,6.48054-8.26826,4.6928-6.48054,7.82133-6.59227,6.3688.89387,7.48613-1.22907.78214-9.27386,4.13414-10.056,11.50853-1.56426,13.0728-.44693,1.45253,3.57547,5.81013,4.0224a31.21118,31.21118,0,0,1,7.48613,1.56427c2.45814.6704,4.91627,1.22906,5.58667,2.79333s.3352,1.56427,4.46933,1.56427,6.48054,2.23466,6.704,4.6928,2.45814,20.4472-.6704,24.24613-2.90506,3.79894-2.56986,8.0448,2.45813,6.59227,1.676,8.82694-6.59227,6.14533-6.704,8.38a18.29379,18.29379,0,0,1-7.15094,12.51413c-5.3632,3.79893-4.80453,9.94427-7.82133,9.7208s-22.57013-2.23467-24.02267-5.58667-2.90506-6.0336-5.81013-5.6984-6.25707.55867-7.82133-3.91066S33.012,70.10812,29.8835,67.31479,19.604,58.37612,15.35817,51.11346,4.18483,36.25292,5.0787,33.34785Z"/>
            </svg>
            <span className="text-2xl font-bold text-purple-400">Signal Media</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Transforming businesses through digital excellence in Zimbabwe and beyond.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Digital Marketing</li>
              <li className="text-gray-400">Media Services</li>
              <li className="text-gray-400">Data Science</li>
              <li className="text-gray-400">Web Design</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-gray-400">
          <p>&copy; 2025 Signal Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;