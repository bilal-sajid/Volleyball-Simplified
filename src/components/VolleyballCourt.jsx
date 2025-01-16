import React from 'react'

const VolleyballCourt = () => {
    return (
        <div className="relative w-full max-w-4xl aspect-[18/9]">
          <div className="absolute inset-6 bg-orange-300 border-4 border-white">
            {/* Net */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black">
              <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full 
                               bg-black text-white px-2 text-sm font-bold">
                NET
              </span>
            </div>
    
            {/* Attack lines */}
            <div className="absolute top-[33.333%] left-0 w-full h-[2px] bg-white">
              <span className="absolute left-4 -translate-y-1/2 
                               bg-orange-300 px-1 text-xs font-bold">
                Attack Line
              </span>
            </div>
            <div className="absolute top-[66.666%] left-0 w-full h-[2px] bg-white">
              <span className="absolute left-4 -translate-y-1/2 
                               bg-orange-300 px-1 text-xs font-bold">
                Attack Line
              </span>
            </div>
    
            {/* (Optional) Team labels */}
            <div className="absolute top-[22%] left-1/2 transform -translate-x-1/2 
                            text-3xl font-extrabold text-white 
                            bg-black bg-opacity-70 px-4 py-2 rounded shadow-lg uppercase">
                Team A Side
                </div>

                <div className="absolute bottom-[22%] left-1/2 transform -translate-x-1/2 
                            text-3xl font-extrabold text-white 
                            bg-black bg-opacity-70 px-4 py-2 rounded shadow-lg uppercase">
                Team B Side
                </div>
          </div>
        </div>
      );
    }

export default VolleyballCourt