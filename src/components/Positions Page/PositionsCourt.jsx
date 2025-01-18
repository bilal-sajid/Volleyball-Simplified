import React from 'react';

const PositionsCourt = () => {
  return (
    <div className="relative w-full aspect-[18/9] bg-gray-800 rounded-lg shadow-lg overflow-visible">
      {/* Court Background */}
      <div className="absolute inset-4 bg-orange-300 border-4 border-white rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.6),0_-10px_20px_rgba(0,0,0,0.6)]">
        {/* Net */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 text-sm font-bold">
            NET
          </span>
        </div>

        {/* Attack Lines */}
        <div className="absolute top-[33.333%] left-0 w-full h-[2px] bg-white">
        </div>
        <div className="absolute top-[66.666%] left-0 w-full h-[2px] bg-white">
        </div>

        {/* Front Row Label */}
        <div className="absolute top-[36%] left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm font-bold px-3 py-1 rounded-md">
          Front Row
        </div>
        <div className="absolute top-[12%] left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm font-bold px-3 py-1 rounded-md">
          Back Row
        </div>
      </div>
    </div>
  );
};

export default PositionsCourt;
