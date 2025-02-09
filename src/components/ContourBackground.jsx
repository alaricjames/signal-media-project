import React, { useEffect, useRef } from 'react';

const ContourBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 213 213');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';

    // Using the actual paths from 213_generated.svg
    const pattern = `
      <defs>
        <pattern id="contour-pattern" x="0" y="0" width="213" height="213" patternUnits="userSpaceOnUse">
          <path d="M0 213C71 213 71 0 142 0" stroke="white" stroke-width="0.5" fill="none" opacity="0.3"/>
          <path d="M71 213C142 213 142 0 213 0" stroke="white" stroke-width="0.5" fill="none" opacity="0.3"/>
          <path d="M0 142C71 142 71 71 142 71" stroke="white" stroke-width="0.5" fill="none" opacity="0.3"/>
          <path d="M71 142C142 142 142 71 213 71" stroke="white" stroke-width="0.5" fill="none" opacity="0.3"/>
          <path d="M0 71C71 71 71 142 142 142" stroke="white" stroke-width="0.5" fill="none" opacity="0.3"/>
          <path d="M71 71C142 71 142 142 213 142" stroke="white" stroke-width="0.5" fill="none" opacity="0.3"/>
          <path d="M0 0C71 0 71 213 142 213" stroke="white" stroke-width="0.5" fill="none" opacity="0.3"/>
          <path d="M71 0C142 0 142 213 213 213" stroke="white" stroke-width="0.5" fill="none" opacity="0.3"/>
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
        zIndex: 100,
        opacity: 0.15, // Reduced opacity for subtlety
        pointerEvents: 'none',
        mixBlendMode: 'soft-light', // Changed blend mode for better effect
      }}
    />
  );
};

export default ContourBackground; 