import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverDark, setIsOverDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Only add mousemove listener if not mobile
    if (!isMobile) {
      const updateCursorPosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        // Get the element under the cursor
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (element) {
          // Get the background color of the element
          const backgroundColor = window.getComputedStyle(element).backgroundColor;
          const backgroundImage = window.getComputedStyle(element).backgroundImage;
          
          // Check if element has gradient background or dark background
          const isDark = backgroundImage.includes('gradient') || 
                        element.classList.contains('gradient-bg') ||
                        backgroundColor.includes('rgb(76, 29, 149)') || // Deep purple
                        backgroundColor.includes('rgb(124, 58, 237)'); // Purple

          setIsOverDark(isDark);
        }
      };

      window.addEventListener('mousemove', updateCursorPosition);

      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div 
      className={`cursor ${isOverDark ? 'cursor-light' : ''}`}
      style={{ 
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)` 
      }}
    />
  );
};

export default CustomCursor; 