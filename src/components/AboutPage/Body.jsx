import React from 'react';
import History from './History';
import Skills from './Skills';
import Achievements from './Achievements';
import { useAbout } from './useAbout';

const Body = () => {
  const { historyData, skillsData, achievementsData } = useAbout();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-7xl mx-auto">
        <div id="Body_3" className="text-center mb-12">
          <h1 id="Body_4" className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p id="Body_5" className="text-lg text-gray-600">Discover our journey, expertise, and achievements</p>
        </div>
        <div id="Body_6" className="space-y-16">
          <History data={historyData} />
          <Skills data={skillsData} />
          <Achievements data={achievementsData} />
        </div>
      </div>
    </div>
  );
};

export default Body;