import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties/search', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      } else {
        throw new Error('Failed to fetch properties');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        const response = await fetch(`/api/properties/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          setProperties(properties.filter(prop => prop.id !== id));
        }
      } catch (error) {
        console.error('Error deleting property:', error);
      }
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  if (loading) return <div id="PropertyList_1" className="text-center">Loading...</div>;
  if (error) return <div id="PropertyList_2" className="text-red-500 text-center">{error}</div>;

  return (
    <div id="PropertyList_3" className="space-y-4">
      <h2 id="PropertyList_4" className="text-xl font-semibold">Property Listings</h2>
      <div id="PropertyList_5" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property.id} id={`PropertyList_6_${property.id}`} className="bg-white p-4 rounded-lg shadow">
            <img
              src={property.image || images[0]}
              alt={property.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-green-600 font-semibold">${property.price}</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => handleDelete(property.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;