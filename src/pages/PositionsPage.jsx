import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VolleyballCourt from '../components/Positions Page/PositionsCourt';

const PositionsPage = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

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

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-orange-400">
            Volleyball Positions
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover the key roles and responsibilities of each player on the court. Learn what it takes to play each position effectively.
          </p>
        </header>

        {/* Section 1: Player Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Player Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position) => (
              <div
                key={position.name}
                className={`p-6 border-2 rounded-lg shadow-md transition-all duration-200 ${
                  selectedPosition === position.name
                    ? 'bg-orange-500 border-orange-400 shadow-lg transform scale-105'
                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-orange-400'
                } cursor-pointer`}
                onClick={() => handlePositionSelect(position.name)}
              >
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {position.name}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Court Layout */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Court Layout
          </h2>
          <div className="mx-auto">
            <VolleyballCourt />
          </div>
        </section>

        {/* Section 3: Zones Overview */}
        {/* Section 3: Zones Overview */}
<section className="mb-16">
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-center text-white mb-6">
      Understanding Zones and Their Role in Volleyball
    </h2>
    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
      The volleyball court is divided into six numbered zones, essential for player rotations, formations, and strategy. These zones help players understand their positions, improve communication, and execute effective gameplay.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* What Are Zones */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">
          What Are Zones?
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Zones are six sections on the court, numbered 1 through 6. Each zone serves as a reference point for player positioning and helps maintain order during rotations. Understanding zones ensures players know where to move after a rally or serve.
        </p>
      </div>

      {/* Importance of Zones */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">
          Why Are Zones Important?
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Zones guide player rotations, organize defensive and offensive setups, and provide a framework for team communication. They also act as target areas for strategic serving, enabling teams to disrupt their opponent’s plays.
        </p>
      </div>
    </div>

    {/* Rotations Through Zones */}
    <div className="bg-gray-700 p-6 mt-8 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">
        Rotations Through Zones
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        Players rotate in a clockwise manner through the six zones of the court whenever their team gains the serve. This rotation ensures that all players experience each position on the court. The six zones and rotation sequence are as follows:
      </p>
      <ul className="list-disc text-gray-300 text-sm space-y-2 pl-6 mt-4">
        <li>Zone 1: Back-right (starting point for the server).</li>
        <li>Zone 6: Back-center.</li>
        <li>Zone 5: Back-left.</li>
        <li>Zone 4: Front-left.</li>
        <li>Zone 3: Front-center (middle blocker zone).</li>
        <li>Zone 2: Front-right (right-side hitter zone).</li>
      </ul>
      <p className="text-sm text-gray-300 leading-relaxed mt-4">
        For example, a player starts in Zone 1 (server position), rotates to Zone 6 (back-center), then Zone 5 (back-left), Zone 4 (front-left), Zone 3 (front-center), and finally Zone 2 (front-right) before returning to Zone 1.
      </p>
      <p className="text-sm text-gray-300 leading-relaxed mt-4">
        This rotation system ensures that every player participates in both front-row (offense) and back-row (defense) roles, contributing to a balanced team dynamic.
      </p>
    </div>

    {/* Serving Strategies and Zones */}
    <div className="bg-gray-700 p-6 mt-8 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-orange-400 mb-4 text-center">
        Using Zones for Serving and Strategy
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        Zones are key for targeted serves and strategic play. Servers can aim at specific zones to challenge weaker passers or disrupt the opponent’s formation. For example:
      </p>
      <ul className="list-disc text-gray-300 text-sm space-y-2 pl-6 mt-4">
        <li>Targeting Zone 1 puts pressure on the back-row passer.</li>
        <li>Serving between Zones 1 and 6 can cause confusion between the back-row players about who should take the ball.</li>
        <li>Hitting a short serve into Zone 2 can disrupt the front-row players, pulling them out of position for an attack.</li>
      </ul>
      <p className="text-sm text-gray-300 leading-relaxed mt-4">
        Learning to serve accurately into zones improves team strategy and sharpens your serving skills.
      </p>
    </div>
  </div>
</section>




      </div>
    </div>
  );
};

export default PositionsPage;
