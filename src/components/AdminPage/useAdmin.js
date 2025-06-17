import { useState } from 'react';

const useAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        setLoginError(null);
      } else {
        setLoginError(data.error || 'Login failed');
      }
    } catch (error) {
      setLoginError('Network error occurred');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    loginError,
    handleLogin,
    handleLogout
  };
};

export default useAdmin;