import React from 'react';
import Hero from './Hero';
import FeaturedPortfolio from './FeaturedPortfolio';
import About from './About';
import Contact from './Contact';
import useHome from './useHome';

const Body = () => {
  const { featuredProperties, loading, error } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedPortfolio properties={featuredProperties} loading={loading} error={error} />
      <About />
      <Contact />
    </div>
  );
};

export default Body;