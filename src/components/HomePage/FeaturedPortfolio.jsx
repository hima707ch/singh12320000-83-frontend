import React from 'react';
import images from '../assets/images';

const FeaturedPortfolio = ({ properties, loading, error }) => {
  if (loading) return <div id="Featured_1" className="text-center py-12">Loading...</div>;
  if (error) return <div id="Featured_2" className="text-center py-12 text-red-600">{error}</div>;

  return (
    <section id="Featured_3" className="py-16 px-4 bg-white">
      <h2 id="Featured_4" className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
      <div id="Featured_5" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {properties?.map((property, index) => (
          <div key={property.id} id={`Featured_Card_${index}`} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={property.image || images[1]} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">${property.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
