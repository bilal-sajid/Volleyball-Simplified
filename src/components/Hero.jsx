import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            <Link to="/formations">Learn About Formations</Link>
        </button>

        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            <Link to="/rotations">Learn About Rotations</Link>
        </button>
    </div>
  )
}

export default Hero