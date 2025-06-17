import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative h-screen">
      <div className="absolute inset-0">
        <img src={images[0]} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div id="Hero_2" className="relative flex items-center justify-center h-full text-white px-4">
        <div className="text-center">
          <h1 id="Hero_3" className="text-5xl md:text-6xl font-bold mb-4">Welcome to Our World</h1>
          <p id="Hero_4" className="text-xl md:text-2xl mb-8">Discover Amazing Properties Just for You</p>
          <button id="Hero_5" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;