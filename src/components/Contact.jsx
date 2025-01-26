import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>+263 123 456 789</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>contact@signalmedia.com</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Harare Central Business District, Zimbabwe</span>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border border-gray-300 rounded"></textarea>
            <button className="gradient-bg text-white px-6 py-3 rounded hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;