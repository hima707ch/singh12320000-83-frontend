import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-12 w-12 rounded-full hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Company</span>
          </Link>

          <nav className="hidden md:flex space-x-8" id="Header_3">
            {['Home', 'Portfolio', 'About', 'Contact'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4" id="Header_4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/adminpage"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" id="Header_5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;