import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={handleNavigation}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                className="h-8 w-8 mr-2 text-purple-600" 
                fill="currentColor"
              >
                <path d="M5.0787,33.34785c.51955-1.68853,15.64267,2.3464,19.88853.3352s3.6872-5.25146,6.48054-8.26826,4.6928-6.48054,7.82133-6.59227,6.3688.89387,7.48613-1.22907.78214-9.27386,4.13414-10.056,11.50853-1.56426,13.0728-.44693,1.45253,3.57547,5.81013,4.0224a31.21118,31.21118,0,0,1,7.48613,1.56427c2.45814.6704,4.91627,1.22906,5.58667,2.79333s.3352,1.56427,4.46933,1.56427,6.48054,2.23466,6.704,4.6928,2.45814,20.4472-.6704,24.24613-2.90506,3.79894-2.56986,8.0448,2.45813,6.59227,1.676,8.82694-6.59227,6.14533-6.704,8.38a18.29379,18.29379,0,0,1-7.15094,12.51413c-5.3632,3.79893-4.80453,9.94427-7.82133,9.7208s-22.57013-2.23467-24.02267-5.58667-2.90506-6.0336-5.81013-5.6984-6.25707.55867-7.82133-3.91066S33.012,70.10812,29.8835,67.31479,19.604,58.37612,15.35817,51.11346,4.18483,36.25292,5.0787,33.34785Z"/>
              </svg>
              <span className="text-xl font-bold text-purple-600">Signal Media</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#home" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/#services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/#blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Home</Link>
            <Link to="/#services" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">About</Link>
            <Link to="/#blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Blog</Link>
            <Link to="/#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;