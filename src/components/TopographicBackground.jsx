import React from 'react';
import TopographicSVG from '../assets/topographic-pattern.svg?react';

const TopographicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <TopographicSVG className="w-full h-full" />
    </div>
  );
};

export default TopographicBackground; 