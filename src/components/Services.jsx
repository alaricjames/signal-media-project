import React from 'react';

const Services = () => {
  return (
    <div id="services" className="py-20 bg-[#2F3C7E]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#FBEAEB]">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg border border-[#FBEAEB]/10 bg-[#2F3C7E]/50 hover:bg-[#2F3C7E]/70 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-[#FBEAEB]">Digital Marketing</h3>
            <p className="text-[#FBEAEB]/80">Strategic social media management, SEO optimization, and PPC campaigns tailored for the African market.</p>
          </div>
          <div className="p-6 rounded-lg border border-[#FBEAEB]/10 bg-[#2F3C7E]/50 hover:bg-[#2F3C7E]/70 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-[#FBEAEB]">Media Services</h3>
            <p className="text-[#FBEAEB]/80">Professional content creation, video production, and brand storytelling that resonates with your audience.</p>
          </div>
          <div className="p-6 rounded-lg border border-[#FBEAEB]/10 bg-[#2F3C7E]/50 hover:bg-[#2F3C7E]/70 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-[#FBEAEB]">Data Science</h3>
            <p className="text-[#FBEAEB]/80">Advanced analytics and insights to drive data-informed marketing decisions and strategy.</p>
          </div>
          <div className="p-6 rounded-lg border border-[#FBEAEB]/10 bg-[#2F3C7E]/50 hover:bg-[#2F3C7E]/70 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-[#FBEAEB]">Web Design</h3>
            <p className="text-[#FBEAEB]/80">Custom-crafted, responsive websites that combine stunning design with powerful functionality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;