import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const PositionsPage = () => {
  // State to keep track of selected position
  const [selectedPosition, setSelectedPosition] = useState(null);

  // Position descriptions
  const positions = [
    { name: 'Outside Hitter (OH)', description: 'Hits and blocks from the left side, plays both front and back row, and plays defense and passes.' },
    { name: 'Opposite Hitter (OPP)', description: 'Hits from the right side, plays right-back defense, blocks the opponent’s outside hitter.' },
    { name: 'Middle Blocker (MB)', description: 'The best blockers, fast-tempo hitters, and play mostly in the middle of the court.' },
    { name: 'Setter (S)', description: 'Sets up attacks by setting the ball for hitters, leads the offense, and plays all the way around.' },
    { name: 'Libero (L)', description: 'Defensive and serve-receive specialist, wears a different jersey, plays in the back row.' },
    { name: 'Defensive Specialist (DS)', description: 'Plays in the back row, focusing on defense and serve-receive, without a special jersey.' },
    { name: 'Serving Specialist (SS)', description: 'Substitutes in to serve, with a powerful or consistent serve.' }
  ];

  // Function to handle position selection
  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex space-x-8">
        {/* Left Side: Position descriptions */}
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-4">Volleyball Positions</h1>
          <div className="space-y-6">
            {positions.map((position) => (
              <div
                key={position.name}
                className={`p-4 border-2 rounded-md cursor-pointer ${selectedPosition === position.name ? 'bg-teal-600 text-white' : 'bg-white text-black'}`}
                onClick={() => handlePositionSelect(position.name)}
              >
                <h2 className="text-lg font-semibold">{position.name}</h2>
                <p className="text-sm">{position.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Court representation */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="relative w-[80%] aspect-[18/9] bg-orange-300 border-4 border-white">
            <div className="absolute inset-6 bg-orange-300 border-4 border-white">
              {/* Court Representation */}
              {/* Example representation for the selected position */}
              {selectedPosition && (
                <div
                  className="absolute text-xl font-bold text-teal-900"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  {selectedPosition}
                </div>
              )}
              {/* Add the rest of the volleyball court structure */}
              <div className="absolute top-[50%] left-0 w-full h-[2px] bg-black">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 text-sm font-bold">
                  NET
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionsPage;
