import React from 'react';
// Import the SVG paths from the asset
import { ReactComponent as TopographicPattern } from '../assets/topographic-pattern.svg';

const TopographicBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none" style={{ border: '5px solid yellow' }}>
      <TopographicPattern className="w-full h-full" />
    </div>
  );
};

export default TopographicBackground; 