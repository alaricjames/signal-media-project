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
          fill="#2F3C7E" // Main website blue
        />
        
        {/* Contour paths - increased opacity and using white */}
        <g opacity="0.3">
          <path d="M0 0 C286.77 0 573.54 0 869 0..." fill="#FFFFFF" transform="translate(798,321)"/>
          <path d="M0 0 C1.95418308 2.93127462..." fill="#FFFFFF" transform="translate(386,300)"/>
          <path d="M0 0 C1.125 1.625 1.125 1.625..." fill="#FFFFFF" transform="translate(1031,238)"/>
          {/* Add remaining paths with white fill */}
        </g>
      </svg>
    </div>
  );
};

export default TopographicBackground; 