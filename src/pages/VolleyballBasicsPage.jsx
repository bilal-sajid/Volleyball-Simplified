import React from 'react';
import Navbar from '../components/Navbar';

const VolleyballBasicsPage = () => {
  const gameplaySections = [
    {
      title: "Objective of the Game",
      content: `Volleyball is played between two teams of six players each. 
The main objective is to score points by grounding the ball on the opponent's court or forcing errors, such as hitting the ball out of bounds or into the net. 
The team with the most points at the end of the match wins.`
    },
    {
      title: "Court and Player Positions",
      content: `The volleyball court is divided by a net into two equal sides, each 9m x 9m. 
Players rotate clockwise after gaining the serve, ensuring everyone plays all positions. 
There are six positions:
1. Front row (attackers/blockers): Left, center, and right.
2. Back row (defense/passers): Left, center, and right.`
    },
    {
      title: "How to Play",
      content: `A rally begins with a serve. The receiving team has up to three touches to return the ball over the net:
1. First touch: Usually a pass to control the ball.
2. Second touch: Usually a set to position the ball for an attacker.
3. Third touch: An attack (spike) to send the ball into the opponent's court.

The rally continues until the ball touches the ground, goes out of bounds, or a team commits a fault.`
    },
    {
      title: "Scoring System",
      content: `Volleyball uses rally scoring, where a point is awarded on every rally, regardless of which team served. 
Matches are played best 3 out of 5 sets. The first four sets are played to 25 points, and the fifth set goes to 15 points. 
A two-point lead is required to win a set. 

For example: If the score is tied at 24-24, play continues until one team achieves a two-point lead, such as 26-24 or greater.`
    },
    {
      title: "Basic Rules",
      content: `
1. Each team can touch the ball a maximum of three times before returning it over the net.
2. Players cannot hit the ball twice consecutively.
3. The ball must be served from behind the end line.
4. A ball hitting the boundary line is considered in.
5. Players cannot touch the net during play.
6. Back-row players cannot attack the ball above the net when in front of the 3-meter line.`
    }
  ];

  const terms = [
    { 
      term: 'Serve', 
      description: 'The action of putting the ball into play by hitting it over the net from behind the baseline.' 
    },
    { 
      term: 'Set', 
      description: 'A pass used to position the ball for a teammate to attack.' 
    },
    { 
      term: 'Spike', 
      description: 'A forceful attack made by hitting the ball down into the opponent’s court.' 
    },
    { 
      term: 'Block', 
      description: 'A defensive play at the net aimed at stopping or deflecting an opponent’s attack.' 
    },
    { 
      term: 'Dig', 
      description: 'A defensive move to prevent the ball from touching the court after an attack.' 
    },
    { 
      term: 'Rally', 
      description: 'The sequence of play from the serve until a point is scored.' 
    },
    { 
      term: 'Side-Out', 
      description: 'When the receiving team wins the rally and gains the right to serve.' 
    },
    { 
      term: 'Ace', 
      description: 'A serve that lands untouched in the opponent’s court, scoring a point directly.' 
    },
    { 
      term: 'Libero', 
      description: 'A defensive specialist restricted to the back row, wearing a distinct jersey color.' 
    },
  ];
  

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-orange-400">
            Volleyball Essentials
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Master the fundamentals of volleyball: gameplay, rules, and key terms. Perfect for beginners stepping onto the court for the first time.
          </p>
        </header>

        {/* Gameplay Rules Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Gameplay Rules and Basics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {gameplaySections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-orange-400 transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-orange-400 mb-4 text-center border-b border-gray-600 pb-2">
                  {section.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Terms Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Key Volleyball Terms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terms.map((item) => (
              <div
                key={item.term}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-orange-400 text-center">{item.term}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-orange-400 font-semibold mt-6">
  Explore more volleyball terminology in our <a href="/glossary" className="underline hover:text-orange-300">Glossary of Terms</a>.
</p>
        </section>
      </div>
    </div>
  );
};

export default VolleyballBasicsPage;
