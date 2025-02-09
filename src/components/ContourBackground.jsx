import React from 'react';
import { motion } from 'framer-motion';

const ContourBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      <motion.svg
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: [1, 1.02, 1],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#94A3B8', stopOpacity: 0.2 }} />
            <stop offset="50%" style={{ stopColor: '#E7B1A5', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#F87171', stopOpacity: 0.4 }} />
          </linearGradient>
        </defs>
        
        {/* Contour lines */}
        <path d="M0,200 Q250,150 500,300 T1000,200" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M0,300 Q250,250 500,400 T1000,300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M0,400 Q250,350 500,500 T1000,400" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M0,500 Q250,450 500,600 T1000,500" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M0,600 Q250,550 500,700 T1000,600" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        
        {/* Gradient overlay */}
        <rect width="100%" height="100%" fill="url(#gradient)" />
      </motion.svg>
    </div>
  );
};

export default ContourBackground; 