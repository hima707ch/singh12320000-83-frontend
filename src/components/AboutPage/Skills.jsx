import React from 'react';

const Skills = ({ data }) => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: ['Web Development', 'Mobile Development', 'Cloud Architecture', 'DevOps', 'Database Management']
    },
    {
      title: 'Soft Skills',
      skills: ['Project Management', 'Team Leadership', 'Communication', 'Problem Solving', 'Agile Methodology']
    }
  ];

  return (
    <section id="Skills_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="Skills_2" className="text-3xl font-semibold text-gray-900 mb-6">Our Expertise</h2>
      <div id="Skills_3" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} id={`Skills_4_${index}`} className="space-y-4">
            <h3 id={`Skills_5_${index}`} className="text-xl font-medium text-gray-800">{category.title}</h3>
            <div id={`Skills_6_${index}`} className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} id={`Skills_7_${skillIndex}`} className="bg-gray-50 p-4 rounded-lg">
                  <p id={`Skills_8_${skillIndex}`} className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;