import React, { useEffect, useRef } from 'react';

const ParallaxSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const section = sectionRef.current;
      const rate = scrolled * 0.5;
      
      section.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="parallax-section">
      {/* Your content */}
    </div>
  );
}; 