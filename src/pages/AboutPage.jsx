import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      {/* Professional Summary */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Professional Summary</h2>
        <p className="text-gray-700 mb-4">
          A seasoned Data Scientist and Analytics Director with extensive experience in marketing science, 
          measurement, and analytics across major global companies. Specialized in developing and implementing 
          data-driven strategies, market mix modeling, and advanced analytics solutions.
        </p>
      </div>

      {/* Professional Experience */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-purple-600">Professional Experience</h2>
        
        {/* Current Role */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Senior Growth Data Scientist</h3>
            <span className="text-gray-600">May 2024 - Present</span>
          </div>
          <p className="text-purple-600 mb-2">Moloco · London Area, United Kingdom · Hybrid</p>
        </div>

        {/* MG OMD Role */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Strategy Analytics Director</h3>
            <span className="text-gray-600">Sep 2023 - May 2024</span>
          </div>
          <p className="text-purple-600 mb-2">MG OMD · London, England · Hybrid</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Lead an analytics team to deliver media measurement and evaluation solutions</li>
            <li>Ownership of the tech stack and products</li>
            <li>Managing project delivery for Government and commercial clients</li>
            <li>MMM (Market Mix Model) delivery, strategy analytics and data science projects</li>
          </ul>
        </div>

        {/* Meta Role */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Global Marketing Science Partner</h3>
            <span className="text-gray-600">Oct 2022 - Sep 2023</span>
          </div>
          <p className="text-purple-600 mb-2">Meta · London · Hybrid</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Partnered with global advertisers to establish unified learning agendas</li>
            <li>Consulted on best-in-class measurement products and solutions</li>
            <li>Led Robyn MMM in EMEA, driving open-source code MMM adoption</li>
            <li>Conducted in-depth custom analysis and ad effectiveness studies</li>
          </ul>
        </div>

        {/* Heineken Role */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Data Scientist - Marketing Lead</h3>
            <span className="text-gray-600">Aug 2019 - Oct 2021</span>
          </div>
          <p className="text-purple-600 mb-2">The HEINEKEN Company · United Kingdom</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>In-housed the Market Mix Modelling capability</li>
            <li>Led AB testing, test cell design, and measurement initiatives</li>
            <li>Developed consumer segmentation and category management solutions</li>
            <li>Specialized in data visualization and storytelling</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-purple-600">Education</h2>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">MA (Hons), Economics</h3>
            <span className="text-gray-600">2012 - 2016</span>
          </div>
          <p className="text-purple-600 mb-2">The University of Edinburgh</p>
          <p className="text-gray-700 mb-2">Grade: First Class</p>
          <p className="text-gray-700">
            Focused on Development, Public, and Labour Economics, with emphasis on data analysis 
            and quantitative methods through statistical software (STATA).
          </p>
          <p className="text-gray-700 mt-2">
            Key Achievements:
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Macroeconomics: 85%</li>
            <li>Applications of Econometrics: 78%</li>
            <li>Essentials of Econometrics: 72%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 