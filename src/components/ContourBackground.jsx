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

    // Create a more visible test pattern
    const pattern = `
      <defs>
        <pattern id="contour-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M0 100 Q 100 0, 200 100" stroke="white" stroke-width="1" fill="none" opacity="0.5"/>
          <path d="M0 50 Q 100 -50, 200 50" stroke="white" stroke-width="1" fill="none" opacity="0.5"/>
          <path d="M0 150 Q 100 50, 200 150" stroke="white" stroke-width="1" fill="none" opacity="0.5"/>
          <path d="M-100 100 Q 0 0, 100 100" stroke="white" stroke-width="1" fill="none" opacity="0.5"/>
          <path d="M100 100 Q 200 0, 300 100" stroke="white" stroke-width="1" fill="none" opacity="0.5"/>
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
        zIndex: 0,
        opacity: 0.2,
        mixBlendMode: 'soft-light',
        pointerEvents: 'none'
      }}
    />
  );
};

export default ContourBackground; 