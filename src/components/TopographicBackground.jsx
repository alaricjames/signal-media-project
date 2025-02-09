import React from 'react';
import TopographicSVG from '../assets/topographic-pattern.svg?react';

const TopographicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <TopographicSVG 
        className="w-full h-full [&_path]:fill-[#171B26] [&_path]:opacity-15" 
      />
    </div>
  );
};

export default TopographicBackground; 