import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-orange-400 text-2xl font-extrabold tracking-wide hover:text-orange-300 transition duration-200"
        >
          Volleyball Simplified
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-orange-400 focus:outline-none"
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

        {/* Navigation Links for Larger Screens */}
        <div className="hidden lg:flex space-x-6">
          <NavLink
            to="/basics"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Basics
          </NavLink>

          <NavLink
            to="/positions"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Positions
          </NavLink>

          <NavLink
            to="/rotations"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Rotations
          </NavLink>

          <NavLink
            to="/gamesense"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Building Game Sense
          </NavLink>

          <NavLink
            to="/glossary"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Glossary
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 px-6 py-4 space-y-4">
          <NavLink
            to="/basics"
            className="block text-gray-300 hover:text-orange-300 font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Basics
          </NavLink>
          <NavLink
            to="/positions"
            className="block text-gray-300 hover:text-orange-300 font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Positions
          </NavLink>
          <NavLink
            to="/rotations"
            className="block text-gray-300 hover:text-orange-300 font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Rotations
          </NavLink>
          <NavLink
            to="/gamesense"
            className="block text-gray-300 hover:text-orange-300 font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Building Game Sense
          </NavLink>
          <NavLink
            to="/glossary"
            className="block text-gray-300 hover:text-orange-300 font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Glossary
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
