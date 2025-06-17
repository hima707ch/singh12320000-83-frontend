import { useState, useEffect } from 'react';

const useHome = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        const response = await fetch('/api/properties/search?featured=true');
        if (!response.ok) throw new Error('Failed to fetch properties');
        const data = await response.json();
        setFeaturedProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProperties();
  }, []);

  return { featuredProperties, loading, error };
};

export default useHome;