import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const PositionsPage = () => {
  // State to keep track of selected position
  const [selectedPosition, setSelectedPosition] = useState(null);

  // Position descriptions
  const positions = [
    {
      name: 'Outside Hitter (OH)',
      description:
        'The Outside Hitter plays on the left side of the court and is a primary attacker. They are involved in passing, defense, and blocking. They usually play both front and back rows.',
    },
    {
      name: 'Opposite Hitter (OPP)',
      description:
        'The Opposite Hitter plays on the right side of the court and is the main attacker opposite the setter. They also play in the back row and play defense, especially in right-back.',
    },
    {
      name: 'Middle Blocker (MB)',
      description:
        'The Middle Blocker focuses on blocking and quick-tempo attacks from the middle. They mainly play the front row and have strong blocking skills but typically don’t get as many sets as other hitters.',
    },
    {
      name: 'Setter (S)',
      description:
        'The Setter is the quarterback of the team. They set up plays by delivering accurate sets to the attackers. They also play in both the front and back row, and their role is key to leading the offense.',
    },
    {
      name: 'Libero (L)',
      description:
        'The Libero is a defensive specialist who plays in the back row. They focus on passing, serve-receive, and digging the ball. They wear a different color jersey and cannot attack the ball above the net height.',
    },
    {
      name: 'Defensive Specialist (DS)',
      description:
        'The Defensive Specialist plays in the back row, focusing on defense, serve-receive, and passing. They don’t wear a different colored jersey like the Libero but still play a key defensive role.',
    },
    {
      name: 'Serving Specialist (SS)',
      description:
        'The Serving Specialist is a player who substitutes into the game solely to serve. They typically have a strong serve and come in to help boost the team’s serving strategy.',
    },
  ];

  // Function to handle position selection
  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-teal-400 mb-8">
          Volleyball Positions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Position descriptions */}
          {positions.map((position) => (
            <div
              key={position.name}
              className={`p-6 border-2 rounded-md transition-all duration-200 ${
                selectedPosition === position.name
                  ? 'bg-teal-600 border-teal-400 shadow-lg transform scale-105'
                  : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-teal-400'
              } cursor-pointer`}
              onClick={() => handlePositionSelect(position.name)}
            >
              <h2 className="text-xl font-bold text-teal-300">{position.name}</h2>
              <p className="text-sm mt-2 text-gray-300">{position.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositionsPage;
