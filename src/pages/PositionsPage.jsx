import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const PositionsPage = () => {
  // State to keep track of selected position
  const [selectedPosition, setSelectedPosition] = useState(null);

  // Position descriptions
  const positions = [
    { 
      name: 'Outside Hitter (OH)', 
      description: 'The Outside Hitter plays on the left side of the court and is a primary attacker. They are involved in passing, defense, and blocking. They usually play both front and back rows.' 
    },
    { 
      name: 'Opposite Hitter (OPP)', 
      description: 'The Opposite Hitter plays on the right side of the court and is the main attacker opposite the setter. They also play in the back row and play defense, especially in right-back.' 
    },
    { 
      name: 'Middle Blocker (MB)', 
      description: 'The Middle Blocker focuses on blocking and quick-tempo attacks from the middle. They mainly play the front row and have strong blocking skills but typically don’t get as many sets as other hitters.' 
    },
    { 
      name: 'Setter (S)', 
      description: 'The Setter is the quarterback of the team. They set up plays by delivering accurate sets to the attackers. They also play in both the front and back row, and their role is key to leading the offense.' 
    },
    { 
      name: 'Libero (L)', 
      description: 'The Libero is a defensive specialist who plays in the back row. They focus on passing, serve-receive, and digging the ball. They wear a different color jersey and cannot attack the ball above the net height.' 
    },
    { 
      name: 'Defensive Specialist (DS)', 
      description: 'The Defensive Specialist plays in the back row, focusing on defense, serve-receive, and passing. They don’t wear a different colored jersey like the Libero but still play a key defensive role.' 
    },
    { 
      name: 'Serving Specialist (SS)', 
      description: 'The Serving Specialist is a player who substitutes into the game solely to serve. They typically have a strong serve and come in to help boost the team’s serving strategy.' 
    }
  ];

  // Function to handle position selection
  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Volleyball Positions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Position descriptions */}
          {positions.map((position) => (
            <div
              key={position.name}
              className={`p-6 border-2 rounded-md cursor-pointer transition-all duration-200 ${
                selectedPosition === position.name ? 'bg-teal-600 text-white' : 'bg-white text-black'
              }`}
              onClick={() => handlePositionSelect(position.name)}
            >
              <h2 className="text-xl font-semibold">{position.name}</h2>
              <p className="text-sm mt-2">{position.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositionsPage;
