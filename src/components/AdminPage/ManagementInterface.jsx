import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';

const ManagementInterface = () => {
  const [isAddingProperty, setIsAddingProperty] = useState(false);

  return (
    <div id="ManagementInterface_1" className="space-y-6">
      <div id="ManagementInterface_2" className="flex justify-end">
        <button
          id="ManagementInterface_3"
          onClick={() => setIsAddingProperty(!isAddingProperty)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {isAddingProperty ? 'Cancel' : 'Add New Property'}
        </button>
      </div>
      
      {isAddingProperty && (
        <div id="ManagementInterface_4" className="bg-gray-50 p-4 rounded-lg">
          <h2 id="ManagementInterface_5" className="text-xl font-semibold mb-4">Add New Property</h2>
          <PropertyForm onComplete={() => setIsAddingProperty(false)} />
        </div>
      )}

      <PropertyList />
    </div>
  );
};

export default ManagementInterface;