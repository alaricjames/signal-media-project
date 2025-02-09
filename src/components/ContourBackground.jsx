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
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '-1';
    container.style.opacity = '0.08'; // More subtle opacity

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 213 213'); // Match the original SVG viewBox
    svg.style.position = 'absolute';

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

    // Create and add paths to SVG
    paths.forEach(d => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('stroke', '#2d3436');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-width', '0.5'); // Thinner lines
      path.setAttribute('stroke-dasharray', '1000');
      path.setAttribute('stroke-dashoffset', '1000');
      
      // Add animation
      const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      animate.setAttribute('attributeName', 'stroke-dashoffset');
      animate.setAttribute('from', '1000');
      animate.setAttribute('to', '0');
      animate.setAttribute('dur', '30s'); // Slower animation
      animate.setAttribute('repeatCount', 'indefinite');
      
      path.appendChild(animate);
      svg.appendChild(path);
    });

    // Add pattern repetition with a larger size
    svg.innerHTML += `
      <defs>
        <pattern id="contour-pattern" x="0" y="0" width="426" height="426" patternUnits="userSpaceOnUse">
          ${svg.innerHTML}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contour-pattern)"/>
    `;

    // Clear and append
    container.innerHTML = '';
    container.appendChild(svg);

    // Cleanup function
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="contour-background" />;
};

export default ContourBackground; 