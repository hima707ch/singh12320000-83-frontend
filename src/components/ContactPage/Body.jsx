import React from 'react';
import ContactForm from './ContactForm';
import Hero from './Hero';

const Body = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ContactForm />
      </div>
    </div>
  );
};

export default Body;