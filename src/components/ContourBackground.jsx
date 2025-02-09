import React, { useEffect, useRef } from 'react';

const ContourBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';

    // Create a basic pattern first to verify SVG rendering
    const pattern = `
      <defs>
        <pattern id="contour-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 Q 50 0, 100 50" stroke="white" stroke-width="2" fill="none"/>
          <path d="M0 25 Q 50 -25, 100 25" stroke="white" stroke-width="2" fill="none"/>
          <path d="M0 75 Q 50 25, 100 75" stroke="white" stroke-width="2" fill="none"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contour-pattern)"/>
    `;

    svg.innerHTML = pattern;
    container.innerHTML = '';
    container.appendChild(svg);

    console.log('Background mounted - container size:', {
      width: container.offsetWidth,
      height: container.offsetHeight
    });
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        opacity: 0.3,
        backgroundColor: 'rgba(47, 60, 126, 0.1)', // Light navy blue background
        pointerEvents: 'none'
      }}
    />
  );
};

export default ContourBackground; 