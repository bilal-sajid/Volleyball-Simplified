import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
            <div className="flex justify-center items-center h-16">
                <div className="text-white">Home</div>
                <div className="text-white ml-4">Terms</div>
                <div className="text-white ml-4">Formations</div>
            </div>
        </div>
    </nav>
    // <div>This is where the Navbar will Go</div>
  )
}

export default Navbar