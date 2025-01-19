import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/basics"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Basics
          </NavLink>

          <NavLink
            to="/positions"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Positions
          </NavLink>

          <NavLink
            to="/rotations"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Rotations
          </NavLink>

          <NavLink
            to="/gamesense"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Building Game Sense
          </NavLink>

          <NavLink
            to="/glossary"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold transition duration-200 ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-orange-300'
              }`
            }
          >
            Glossary
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
