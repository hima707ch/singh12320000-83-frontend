import React from 'react';
import Filter from './Filter';
import PortfolioList from './PortfolioList';
import usePortfolio from './usePortfolio';

const Body = () => {
  const { properties, loading, error, handleFilterChange } = usePortfolio();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Portfolio</h1>
      <Filter id="Body_3" onFilterChange={handleFilterChange} />
      {loading && <div id="Body_4" className="text-center py-8">Loading...</div>}
      {error && <div id="Body_5" className="text-center py-8 text-red-500">{error}</div>}
      {!loading && !error && <PortfolioList id="Body_6" properties={properties} />}
    </div>
  );
};

export default Body;