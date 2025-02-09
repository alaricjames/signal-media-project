import React from 'react';

const TopographicBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none" style={{ border: '5px solid yellow' }}>
      <svg 
        className="w-full h-full"
        viewBox="0 0 1920 1097" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Test rectangle */}
        <rect x="0" y="0" width="1920" height="1097" fill="red" />
        
        {/* Original content */}
        <path 
          d="M0 0 C633.6 0 1267.2 0 1920 0 C1920 362.01 1920 724.02 1920 1097 C1286.4 1097 652.8 1097 0 1097 C0 734.99 0 372.98 0 0 Z" 
          fill="#2F3C7E"
        />
        
        {/* Contour paths with higher contrast for testing */}
        <g opacity="0.5" fill="#FFFFFF">
          <path d="M0 0 C286.77 0 573.54 0 869 0 C878.44690956 83.1328041 878.44690956 83.1328041 859.76171875 106.83984375 C857.59284015 109.33087012 855.34961143 111.67975872 853 114 C852.4225 114.59941406 851.845 115.19882813 851.25 115.81640625 C846.30605551 120.5727457 840.48424638 123.7560042 834.58349609 127.16137695..." />
          <path d="M0 0 C1.95418308 2.93127462 2.64700993 4.55834679 3 8 C2.34 8.66 1.68 9.32 1 10 C0.63720544 8.71073008 0.28503302 7.41846728 -0.0625 6.125 C-0.35833984 5.04605469 -0.35833984 5.04605469 -0.66015625 3.9453125 C-1 2 -1 2 0 0 Z" />
          <path d="M0 0 C1.125 1.625 1.125 1.625 2 4 C1.125 7.25 1.125 7.25 0 10 C-1.125 8.375 -1.125 8.375 -2 6 C-1.125 2.75 -1.125 2.75 0 0 Z" />
        </g>
      </svg>
    </div>
  );
};

export default TopographicBackground; 