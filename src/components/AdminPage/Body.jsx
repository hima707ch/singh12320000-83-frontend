import React from 'react';
import LoginForm from './LoginForm';
import ManagementInterface from './ManagementInterface';
import useAdmin from './useAdmin';

const Body = () => {
  const { isAuthenticated, loginError, handleLogin, handleLogout } = useAdmin();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 p-4">
      <div id="Body_2" className="max-w-7xl mx-auto">
        {!isAuthenticated ? (
          <div id="Body_3" className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <h1 id="Body_4" className="text-2xl font-bold text-center mb-6">Admin Login</h1>
            <LoginForm onLogin={handleLogin} error={loginError} />
          </div>
        ) : (
          <div id="Body_5" className="bg-white rounded-lg shadow-lg p-6">
            <div id="Body_6" className="flex justify-between items-center mb-6">
              <h1 id="Body_7" className="text-2xl font-bold">Property Management</h1>
              <button
                id="Body_8"
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
            <ManagementInterface />
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;