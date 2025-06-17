import React from 'react';
import images from '../assets/images';

const About = () => {
  return (
    <section id="About_1" className="py-16 bg-gray-50">
      <div id="About_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div id="About_3" className="rounded-lg overflow-hidden">
            <img src={images[2]} alt="About Us" className="w-full h-full object-cover" />
          </div>
          <div id="About_4" className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
            <p className="text-lg text-gray-600">
              We are dedicated to helping you find your perfect property. With years of experience in the real estate market,
              we understand what it takes to make your property dreams come true.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Expert Property Guidance
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Professional Service
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                Trusted by Thousands
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;