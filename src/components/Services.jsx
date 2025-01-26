import React from 'react';

const Services = () => {
  return (
    <div id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover-scale border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
            <p className="text-gray-600">Strategic social media management, SEO optimization, and PPC campaigns tailored for the African market.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover-scale border-l-4 border-pink-600">
            <h3 className="text-xl font-semibold mb-4">Media Services</h3>
            <p className="text-gray-600">Professional content creation, video production, and brand storytelling that resonates with your audience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover-scale border-l-4 border-indigo-600">
            <h3 className="text-xl font-semibold mb-4">Data Science</h3>
            <p className="text-gray-600">Advanced analytics and insights to drive data-informed marketing decisions and strategy.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover-scale border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4">Web Design</h3>
            <p className="text-gray-600">Custom-crafted, responsive websites that combine stunning design with powerful functionality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;