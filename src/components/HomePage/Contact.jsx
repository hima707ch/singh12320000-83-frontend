import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section id="Contact_1" className="bg-blue-600 text-white py-12">
      <div id="Contact_2" className="max-w-7xl mx-auto px-4 text-center">
        <h2 id="Contact_3" className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p id="Contact_4" className="text-xl mb-8">Contact us today and let us help you find your dream property</p>
        <button
          id="Contact_5"
          onClick={() => navigate('/contact')}
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Contact Us Now
        </button>
      </div>
    </section>
  );
};

export default Contact;