import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative bg-gray-900 h-64">
      <div className="absolute inset-0">
        <img
          id="Hero_2"
          src={images[0] || 'https://example.com/placeholder.jpg'}
          alt="Contact Us"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 id="Hero_3" className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p id="Hero_4" className="text-xl text-gray-200">We'd love to hear from you</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;