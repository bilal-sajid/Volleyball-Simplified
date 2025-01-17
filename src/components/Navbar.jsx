import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink for better active link styling

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {/* NavLink components for navigation */}
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              "text-white px-3 py-2 rounded-md text-sm font-medium" + 
              (isActive ? " bg-gray-900" : "")
            }
            end  // Ensures it matches the exact path '/'
          >
            Home
          </NavLink>
          <NavLink 
            to="/positions" 
            className={({ isActive }) => 
              "text-white px-3 py-2 rounded-md text-sm font-medium ml-4" + 
              (isActive ? " bg-gray-900" : "")
            }
          >
            Positions
          </NavLink>
          <NavLink 
            to="/rotations" 
            className={({ isActive }) => 
              "text-white px-3 py-2 rounded-md text-sm font-medium ml-4" + 
              (isActive ? " bg-gray-900" : "")
            }
          >
            Rotations
          </NavLink>
          <NavLink 
            to="/formations" 
            className={({ isActive }) => 
              "text-white px-3 py-2 rounded-md text-sm font-medium ml-4" + 
              (isActive ? " bg-gray-900" : "")
            }
          >
            Formations
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
