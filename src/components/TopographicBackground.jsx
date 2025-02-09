import React from 'react';
import TopographicSVG from '../assets/topographic-pattern.svg?react';

const TopographicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <TopographicSVG 
        className="w-full h-full" 
        style={{
          '--background-color': '#2F3C7E',
          '--line-color': '#FFFFFF',
          '--line-opacity': '0.3'
        }}
      />
    </div>
  );
};

export default TopographicBackground; 