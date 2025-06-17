import React from 'react';

const Achievements = ({ data }) => {
  const achievements = [
    {
      title: '500+',
      description: 'Successful Projects',
      icon: '🏆'
    },
    {
      title: '50+',
      description: 'Industry Awards',
      icon: '🌟'
    },
    {
      title: '100+',
      description: 'Happy Clients',
      icon: '👥'
    },
    {
      title: '25+',
      description: 'Countries Served',
      icon: '🌍'
    }
  ];

  return (
    <section id="Achievements_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="Achievements_2" className="text-3xl font-semibold text-gray-900 mb-6">Our Achievements</h2>
      <div id="Achievements_3" className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} id={`Achievements_4_${index}`} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            <span id={`Achievements_5_${index}`} className="text-4xl mb-2 block">{achievement.icon}</span>
            <h3 id={`Achievements_6_${index}`} className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
            <p id={`Achievements_7_${index}`} className="text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;