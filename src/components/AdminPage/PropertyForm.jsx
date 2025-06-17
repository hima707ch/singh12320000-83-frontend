import React, { useState } from 'react';
import images from '../assets/images';

const PropertyForm = ({ property, onComplete }) => {
  const [formData, setFormData] = useState(property || {
    title: '',
    location: '',
    price: '',
    type: '',
    description: '',
    image: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/properties' + (property ? `/${property.id}` : ''), {
        method: property ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        onComplete();
      }
    } catch (error) {
      console.error('Error saving property:', error);
    }
  };

  return (
    <form id="PropertyForm_1" onSubmit={handleSubmit} className="space-y-4">
      <div id="PropertyForm_2">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div id="PropertyForm_3" className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div id="PropertyForm_4">
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({...formData, type: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
      </div>
      <div id="PropertyForm_5">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {property ? 'Update Property' : 'Add Property'}
      </button>
    </form>
  );
};

export default PropertyForm;