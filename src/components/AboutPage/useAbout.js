import { useState, useEffect } from 'react';

export const useAbout = () => {
  const [historyData, setHistoryData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const [achievementsData, setAchievementsData] = useState({});

  useEffect(() => {
    // In a real application, you might fetch this data from an API
    setHistoryData({
      // Add your history data here
    });

    setSkillsData({
      // Add your skills data here
    });

    setAchievementsData({
      // Add your achievements data here
    });
  }, []);

  return {
    historyData,
    skillsData,
    achievementsData
  };
};