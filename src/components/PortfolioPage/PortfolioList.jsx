import React from 'react';
import images from '../assets/images';

const PortfolioList = ({ properties }) => {
  return (
    <div id="PortfolioList_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <div
          key={property.id}
          id={`PortfolioList_${index + 2}`}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <img
            src={images[index % images.length] || property.image}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-green-600 font-bold">${property.price.toLocaleString()}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">{property.type}</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => window.location.href = `/property/${property.id}`}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;