import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div id="Filter_1" className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div id="Filter_2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          id="Filter_3"
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">All Types</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
        </select>

        <input
          id="Filter_4"
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <input
          id="Filter_5"
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <input
          id="Filter_6"
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div>
    </div>
  );
};

export default Filter;