import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero-section min-h-screen flex items-center bg-[#2F3C7E]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FBEAEB]">
            Your Premier Marketing Partner in Zimbabwe
          </h1>
          <p className="text-xl text-[#FBEAEB]/90 mb-8">
            Boutique digital marketing, media, and data science solutions for forward-thinking businesses
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FBEAEB] text-[#2F3C7E] px-8 py-3 rounded-lg hover:bg-white transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;