import React from 'react';

const VolleyballCourt = ({ teamAServing }) => {
  return (
    <div className="relative w-full aspect-[18/9] bg-gray-800"> {/* Darker background for contrast */}
      <div className="absolute inset-6 bg-orange-300 border-4 border-white">
        {/* Conditionally Rendered "Server" Box */}
        {teamAServing === 1 && (
          <div
            className="absolute border-4 border-teal-500 bg-teal-500 bg-opacity-20 w-[20%] h-[25%] top-[-15%] left-[9%] pointer-events-none flex items-end justify-end p-1"
          >
            <span className="text-teal-900 font-semibold text-xs">
              Server (A)
            </span>
          </div>
        )}

        {teamAServing === 0 && (
          <div
            className="absolute border-4 border-teal-500 bg-teal-500 bg-opacity-20 w-[20%] h-[25%] bottom-[-15%] right-[9%] pointer-events-none flex items-start justify-start p-1"
          >
            <span className="text-teal-900 font-semibold text-xs">
              Server (B)
            </span>
          </div>
        )}

        {/* Net */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black">
          <span className="absolute top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 text-sm font-bold">
            NET
          </span>
        </div>

        {/* Attack Lines */}
        <div className="absolute top-[33.333%] left-0 w-full h-[2px] bg-white">
          <span className="absolute left-4 -translate-y-1/2 bg-orange-300 px-1 text-xs font-bold">
            Attack Line
          </span>
        </div>
        <div className="absolute top-[66.666%] left-0 w-full h-[2px] bg-white">
          <span className="absolute left-4 -translate-y-1/2 bg-orange-300 px-1 text-xs font-bold">
            Attack Line
          </span>
        </div>

        {/* Team labels */}
        <div
          className="absolute top-[22%] left-1/2 transform -translate-x-[40%] text-xl font-bold text-white bg-teal-600 bg-opacity-80 px-6 py-3 rounded shadow-lg uppercase"
        >
          Team A Side
        </div>
        <div
          className="absolute bottom-[22%] left-1/2 transform -translate-x-[40%] text-xl font-bold text-white bg-teal-600 bg-opacity-80 px-6 py-3 rounded shadow-lg uppercase"
        >
          Team B Side
        </div>
      </div>
    </div>
  );
};

export default VolleyballCourt;
