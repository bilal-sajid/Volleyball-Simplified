import React from 'react';

const VolleyballCourt = ({ teamAServing, servingPlayerPosition }) => {
  return (
    <div className="relative w-full aspect-[2/1.8] bg-gray-800 rounded-lg shadow-lg overflow-visible">
      {/* Expanded Court Background */}
      <div className="absolute inset-4 bg-orange-300 border-4 border-white rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.6),0_-10px_20px_rgba(0,0,0,0.6)]">
        
        {/* Conditionally Rendered "Server" Highlight Box */}
        {servingPlayerPosition && (
          <div
            className={`absolute border-4 ${
              teamAServing === 1 ? 'border-blue-500 bg-blue-500' : 'border-red-500 bg-red-500'
            } bg-opacity-30 w-[18%] h-[18%] pointer-events-none flex ${
              teamAServing === 1 ? 'items-end' : 'items-start'
            } justify-center rounded-md`}
            style={{
              top: teamAServing === 1
                ? `calc(${Math.max(parseFloat(servingPlayerPosition.y), 8)}% - 12%)`
                : undefined,
              bottom: teamAServing === 0
                ? `calc(${Math.max(100 - parseFloat(servingPlayerPosition.y), 8)}% - 30%)`
                : undefined,
              left: servingPlayerPosition.x,
              transform: 'translate(-39%, -45%)',
            }}
          >
            <span
              className={`${
                teamAServing === 1 ? 'mb-1' : 'mt-1'
              } text-[1.2vw] sm:text-[1vw] md:text-[0.8vw] lg:text-[0.7vw] font-semibold text-wrap ${
                teamAServing === 1
                  ? 'text-blue-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'
                  : 'text-red-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'
              }`}
            >
              Server ({teamAServing === 1 ? 'A' : 'B'})
            </span>
          </div>
        )}

        {/* Net */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black">
          <span
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2
            text-[1.2vw] sm:text-[1vw] md:text-[0.8vw] lg:text-[0.7vw] 
            bg-black text-white px-2 font-bold rounded-md shadow-md"
          >
            NET
          </span>
        </div>

        {/* Attack Lines */}
        <div className="absolute top-[33.333%] left-0 w-full h-[2px] bg-white">
          <span
            className="absolute left-4 -translate-y-1/2 
            text-[1.2vw] sm:text-[1vw] md:text-[0.8vw] lg:text-[0.7vw] 
            bg-orange-300 px-1 font-bold rounded-md shadow-md"
          >
            Attack Line
          </span>
        </div>
        <div className="absolute top-[66.666%] left-0 w-full h-[2px] bg-white">
          <span
            className="absolute left-4 -translate-y-1/2 
            text-[1.2vw] sm:text-[1vw] md:text-[0.8vw] lg:text-[0.7vw] 
            bg-orange-300 px-1 font-bold rounded-md shadow-md"
          >
            Attack Line
          </span>
        </div>
      </div>

      {/* Team Labels */}
      <div
        className="absolute top-[-3%] left-1/2 transform -translate-x-1/2 
        text-[1.2vw] sm:text-[1vw] md:text-[0.8vw] lg:text-[0.7vw] 
        font-semibold text-blue-500 bg-gray-700 bg-opacity-80 px-3 py-1 rounded shadow"
      >
        Team A
      </div>
      <div
        className="absolute bottom-[-3%] left-1/2 transform -translate-x-1/2 
        text-[1.2vw] sm:text-[1vw] md:text-[0.8vw] lg:text-[0.7vw] 
        font-semibold text-red-500 bg-gray-700 bg-opacity-80 px-3 py-1 rounded shadow"
      >
        Team B
      </div>
    </div>
  );
};

export default VolleyballCourt;
