import React from 'react';

const VolleyballCourt = ({ teamAServing, servingPlayerPosition }) => {
  return (
    <div className="relative w-full aspect-[18/9] bg-gray-800 rounded-lg shadow-lg overflow-visible">
      {/* Expanded Court Background */}
      <div
        className="absolute inset-4 bg-orange-300 border-4 border-white rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.6),0_-10px_20px_rgba(0,0,0,0.6)]"
      >
        {/* Conditionally Rendered "Server" Highlight Box */}
        {servingPlayerPosition && (
          <div
            className={`absolute border-4 ${
              teamAServing === 1 ? 'border-blue-500 bg-blue-500' : 'border-red-500 bg-red-500'
            } bg-opacity-30 w-[20%] h-[25%] pointer-events-none flex items-center rounded-md`}
            style={{
              top: teamAServing === 1
                ? `calc(${Math.max(parseFloat(servingPlayerPosition.y), 8)}% - 15%)`
                : undefined,
              bottom: teamAServing === 0
                ? `calc(${Math.max(100 - parseFloat(servingPlayerPosition.y), 8)}% - 40%)`
                : undefined,
              left: servingPlayerPosition.x,
              transform: 'translate(-55%, -50%)',
            }}
          >
            <span
              className={`text-xs font-semibold ${
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
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 text-sm font-bold">
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
      </div>

      {/* Team Labels */}
      <div
        className="absolute top-[-3%] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-blue-500 bg-gray-700 bg-opacity-80 px-3 py-1 rounded shadow"
      >
        Team A
      </div>
      <div
        className="absolute bottom-[-3%] left-1/2 transform -translate-x-1/2 text-sm font-semibold text-red-500 bg-gray-700 bg-opacity-80 px-3 py-1 rounded shadow"
      >
        Team B
      </div>
    </div>
  );
};

export default VolleyballCourt;
