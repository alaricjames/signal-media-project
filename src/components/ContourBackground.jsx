import React, { useEffect, useRef } from 'react';

const ContourBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set up the container
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '-1';
    container.style.opacity = '0.15'; // Increased opacity for testing

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 213 213');
    svg.style.position = 'absolute';
    svg.style.overflow = 'visible';

    // These are the actual paths from 213_generated.svg
    const paths = [
      "M0 213C71 213 71 0 142 0",
      "M71 213C142 213 142 0 213 0",
      "M0 142C71 142 71 71 142 71",
      "M71 142C142 142 142 71 213 71",
      "M0 71C71 71 71 142 142 142",
      "M71 71C142 71 142 142 213 142",
      "M0 0C71 0 71 213 142 213",
      "M71 0C142 0 142 213 213 213"
    ];

    // Create and add paths to SVG with more visible styling
    paths.forEach(d => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('stroke', '#000000'); // Changed to black for testing
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-width', '1'); // Increased stroke width
      path.setAttribute('vector-effect', 'non-scaling-stroke');
      
      svg.appendChild(path);
    });

    // Add pattern repetition
    const patternSize = 213; // Match original SVG size
    svg.innerHTML = `
      <defs>
        <pattern 
          id="contour-pattern" 
          x="0" 
          y="0" 
          width="${patternSize}" 
          height="${patternSize}" 
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(0)"
        >
          ${paths.map(d => `
            <path 
              d="${d}" 
              stroke="#000000" 
              stroke-width="1" 
              fill="none" 
              vector-effect="non-scaling-stroke"
            />
          `).join('')}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contour-pattern)"/>
    `;

    // Clear and append
    container.innerHTML = '';
    container.appendChild(svg);

    // Log for debugging
    console.log('ContourBackground mounted');
    console.log('Container dimensions:', container.offsetWidth, container.offsetHeight);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="contour-background" />;
};

export default ContourBackground; 