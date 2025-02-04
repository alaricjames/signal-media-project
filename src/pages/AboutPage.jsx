import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-[#2F3C7E] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#FBEAEB]">About Me</h1>
        
        {/* Professional Summary */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#FBEAEB]">Professional Summary</h2>
          <p className="text-[#FBEAEB]/80 mb-4">
            A seasoned Data Scientist and Analytics Director with extensive experience in marketing science, 
            measurement, and analytics across major global companies.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#FBEAEB]">Professional Experience</h2>
          
          {/* Experience items */}
          <div className="space-y-8">
            {/* Each experience item */}
            <div className="p-6 rounded-lg bg-[#2F3C7E]/30 border border-[#FBEAEB]/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-[#FBEAEB]">Senior Growth Data Scientist</h3>
                <span className="text-[#FBEAEB]/70">May 2024 - Present</span>
              </div>
              <p className="text-[#FBEAEB] mb-2">Moloco · London Area, United Kingdom · Hybrid</p>
              <ul className="list-disc list-inside text-[#FBEAEB]/80 ml-4">
                <li>Lead analytics initiatives</li>
                <li>Drive growth strategies</li>
              </ul>
            </div>
            
            {/* Additional experience items with same styling */}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#FBEAEB]">Education</h2>
          <div className="p-6 rounded-lg bg-[#2F3C7E]/30 border border-[#FBEAEB]/10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-[#FBEAEB]">MA (Hons), Economics</h3>
              <span className="text-[#FBEAEB]/70">2012 - 2016</span>
            </div>
            <p className="text-[#FBEAEB] mb-2">The University of Edinburgh</p>
            <p className="text-[#FBEAEB]/80">Grade: First Class</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 