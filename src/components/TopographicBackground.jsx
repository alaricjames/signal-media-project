import React from 'react';
import TopographicSVG from '../assets/topographic-pattern.svg?react';

const TopographicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <svg 
        className="w-full h-full"
        viewBox="0 0 1920 1097" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base background */}
        <path 
          d="M0 0 C633.6 0 1267.2 0 1920 0 C1920 362.01 1920 724.02 1920 1097 C1286.4 1097 652.8 1097 0 1097 C0 734.99 0 372.98 0 0 Z" 
          fill="#2F3C7E" // Your site's primary blue color
        />
        
        {/* Contour paths */}
        <g opacity="0.15" fill="#FBEAEB"> {/* Your site's light pink color */}
          {/* SVG paths */}
        </g>
      </svg>
    </div>
  );
};

export default TopographicBackground; 