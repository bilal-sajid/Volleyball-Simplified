import React from 'react';

const PositionsCourt = () => {
  return (
    <div className="relative w-[90%] mx-auto aspect-[2/1.8] bg-gray-800 rounded-lg shadow-lg overflow-visible">
      {/* Court Background */}
      <div className="absolute inset-4 bg-orange-300 border-4 border-white rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.6),0_-10px_20px_rgba(0,0,0,0.6)]">

        {/* Net */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black">
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          bg-black text-white px-2 rounded-md shadow-md
                          text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] font-bold">
            NET
          </span>
        </div>

        {/* Attack Lines */}
        <div className="absolute top-[33.333%] left-0 w-full h-[2px] bg-white">
          <span className="absolute top-[-0.5vh] left-2 
                          text-[2vw] sm:text-[1.5vw] md:text-[1vw] lg:text-[0.8vw] 
                          font-semibold text-white bg-gray-700 px-2 py-1 rounded-md shadow-md">
            Attack Line
          </span>
        </div>
        <div className="absolute top-[66.666%] left-0 w-full h-[2px] bg-white"></div>

        {/* Zone Boxes */}
        <div className="absolute bottom-[0%] left-[66.6%] w-[33%] h-[32%] bg-pink-600 bg-opacity-20 border border-pink-400 rounded-lg flex justify-center items-center">
          <span className="text-xs sm:text-sm md:text-base font-semibold text-pink-700">Zone 1</span>
        </div>

        <div className="absolute top-[51%] left-[66.6%] w-[33%] h-[15%] bg-blue-600 bg-opacity-20 border border-blue-400 rounded-lg flex justify-center items-center">
          <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-700">Zone 2</span>
        </div>

        <div className="absolute top-[51%] left-[33.3%] w-[33%] h-[15%] bg-yellow-600 bg-opacity-20 border border-yellow-400 rounded-lg flex justify-center items-center">
          <span className="text-xs sm:text-sm md:text-base font-semibold text-yellow-700">Zone 3</span>
        </div>

        <div className="absolute top-[51%] left-[0%] w-[33%] h-[15%] bg-red-600 bg-opacity-20 border border-red-400 rounded-lg flex justify-center items-center">
          <span className="text-xs sm:text-sm md:text-base font-semibold text-red-700">Zone 4</span>
        </div>

        <div className="absolute bottom-[0%] left-[0%] w-[33%] h-[32%] bg-purple-600 bg-opacity-20 border border-purple-400 rounded-lg flex justify-center items-center">
          <span className="text-xs sm:text-sm md:text-base font-semibold text-purple-700">Zone 5</span>
        </div>

        <div className="absolute bottom-[0%] left-[33.3%] w-[33%] h-[32%] bg-teal-600 bg-opacity-20 border border-teal-400 rounded-lg flex justify-center items-center">
          <span className="text-xs sm:text-sm md:text-base font-semibold text-teal-700">Zone 6</span>
        </div>

        {/* Front Row and Back Row Labels */}
        <div className="absolute top-[36%] left-1/2 transform -translate-x-1/2 
                        bg-gray-900 text-white px-2 py-1 rounded-md shadow-md
                        text-[2vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1vw] font-bold">
          Front Row
        </div>
        <div className="absolute top-[9%] left-1/2 transform -translate-x-1/2 
                        bg-gray-900 text-white px-2 py-1 rounded-md shadow-md
                        text-[2vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1vw] font-bold">
          Back Row
        </div>
      </div>
    </div>
  );
};

export default PositionsCourt;
