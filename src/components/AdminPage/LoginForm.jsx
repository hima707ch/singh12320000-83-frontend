import React, { useState } from 'react';

const LoginForm = ({ onLogin, error }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <form id="LoginForm_1" onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div id="LoginForm_2" className="bg-red-100 text-red-700 p-3 rounded">
          {error}
        </div>
      )}
      <div id="LoginForm_3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="LoginForm_4"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div id="LoginForm_5">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="LoginForm_6"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <button
        id="LoginForm_7"
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;