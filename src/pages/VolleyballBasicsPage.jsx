import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const VolleyballBasicsPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const gameplaySections = [
    {
      title: "How the Game is Played",
      content:`Volleyball is a team sport where two teams of six players each compete to score points by hitting a ball over the net into the opponent's court. 
        Each team has up to three touches to return the ball, and individual players cannot hit the ball twice consecutively. 
        The game is played in rallies, where teams aim to ground the ball on the opponent's side or force an error.`
    },
    {
        title: "Scoring",
        content: `Volleyball uses a rally scoring system, where a point is awarded on every rally, regardless of which team served. 
          Matches are played best 3 out of 5 sets. The first four sets go up to 25 points, while the fifth set is played to 15 points. 
          A team must win a set by at least two points. 
      
          For example: If the score is 24-24 in a set, the game continues until one team gains a two-point lead, such as 26-24 or 27-25. 
          Similarly, in the fifth set, if the score reaches 14-14, the set continues until a team wins by a two-point margin, like 16-14 or 17-15.`
    },
    {
      title: "Rotations and Positions",
      content:
        `Players rotate clockwise each time they win the serve from the opponent. This ensures all players play in every position. 
        There are six positions on the court: three front-row players (attackers and blockers) and three back-row players (defensive and passing roles).`
    },
    {
      title: "Basic Rules",
      content: `
        1. The ball must be served from behind the end line.
        2. The ball must clear the net on a serve.
        3. A team can touch the ball up to three times before sending it over the net.
        4. A ball touching the boundary line is considered in.
        5. Players cannot touch the net during play.
      `
    }
  ];

  const terms = [
    { term: 'Ace', description: 'A serve that lands in the opponent’s court without being touched or is mishandled, resulting in a point.' },
    { term: 'Block', description: 'A defensive play where one or more players jump near the net to deflect or stop an opponent’s attack.' },
    { term: 'Dig', description: 'A defensive action where a player prevents the ball from touching their court after an opponent’s attack.' },
    { term: 'Kill', description: 'An attack that directly results in a point.' },
    { term: 'Rally', description: 'The continuous sequence of play from the serve to the point being scored.' },
    { term: 'Set', description: 'A tactical pass to position the ball for an attacker.' },
    { term: 'Libero', description: 'A defensive specialist who plays in the back row and cannot attack the ball above the net’s height.' },
    { term: 'Serve', description: 'The act of putting the ball into play by hitting it over the net from behind the baseline.' },
    { term: 'Side-Out', description: 'When the receiving team wins the rally and gains the right to serve.' }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Volleyball Basics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gameplay Sections */}
          {gameplaySections.map((section) => (
            <div
              key={section.title}
              className={`p-6 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                selectedSection === section.title ? 'bg-teal-600 text-white' : 'bg-white text-gray-800'
              }`}
              onClick={() =>
                setSelectedSection(selectedSection === section.title ? null : section.title)
              }
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="text-sm mt-2 whitespace-pre-line">
                {selectedSection === section.title ? section.content : `${section.content.slice(0, 100)}...`}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 text-center">Key Volleyball Terms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.map((item) => (
            <div
              key={item.term}
              className="p-6 rounded-lg border-2 bg-white text-gray-800 shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800">{item.term}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolleyballBasicsPage;
