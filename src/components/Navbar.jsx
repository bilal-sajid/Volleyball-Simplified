import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Basics', path: '/basics' },
    { name: 'Positions', path: '/positions' },
    { name: 'Rotations', path: '/rotations' },
    { name: 'Game Sense', path: '/gamesense' },
    { name: 'Glossary', path: '/glossary' },
  ];
  
  return (
    <nav className="bg-navbar-bg shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo with Text */}
        <NavLink
          to="/"
          className="text-navbar-text text-2xl font-extrabold tracking-wide hover:text-navbar-hover transition duration-200 flex items-center"
        >

          V
          <img 
            src="/favicon.png"
            alt="Volleyball Icon"
            className="h-4 w-4 relative mt-1"
          />

          lleyball Simplified
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-navbar-text focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Desktop / Larger Screen Menu */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                  isActive
                    ? 'bg-navbar-active text-white'
                    : 'text-navbar-text hover:bg-navbar-hover hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navbar-bg px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="block text-navbar-text hover:text-navbar-hover font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

