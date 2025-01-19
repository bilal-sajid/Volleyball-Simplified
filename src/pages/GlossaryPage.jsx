import React from 'react';
import Navbar from '../components/Navbar';

const glossarySections = [
  {
    title: "Serving Terms",
    terms: [
      { term: "Float Serve", description: "A serve with no spin, causing unpredictable movement in the air." },
      { term: "Jump Serve", description: "A powerful serve where the player jumps to hit the ball at its peak." },
      { term: "Topspin Serve", description: "A serve hit with topspin, causing it to drop quickly into the court." },
      { term: "Short Serve", description: "A serve aimed just over the net to catch opponents off guard." },
    ],
  },
  {
    title: "Offensive Terms",
    terms: [
      { term: "Tooling the Block", description: "Hitting the ball off the blocker’s hands and out of bounds to score." },
      { term: "Quick Set", description: "A fast, low set used to surprise defenders." },
      { term: "Roll Shot", description: "A softer, controlled attack designed to land in open court areas." },
      { term: "Cross-court Attack", description: "An attack aimed diagonally across the opponent’s court." },
      { term: "Down-the-line Attack", description: "An attack hit straight down the sideline." },
    ],
  },
  {
    title: "Defensive Terms",
    terms: [
      { term: "Shank", description: "A poorly passed ball that cannot be controlled." },
      { term: "Stuff Block", description: "A block that deflects the ball straight down into the opponent’s court." },
      { term: "Cover", description: "Teammates positioned behind the attacker to recover a blocked ball." },
      { term: "Free Ball", description: "An easy ball sent over the net, allowing the opposing team to set up an attack." },
      { term: "Peel", description: "A beach volleyball term for retreating from the net to play defense." },
    ],
  },
  {
    title: "Gameplay and Scoring Terms",
    terms: [
      { term: "Side-Out", description: "When the receiving team wins the rally and gains the serve." },
      { term: "Kill", description: "An attack that directly results in a point." },
      { term: "Rally Point System", description: "A scoring system where every rally results in a point, regardless of which team served." },
      { term: "Double Contact", description: "A fault where a player touches the ball twice consecutively." },
      { term: "Net Violation", description: "A fault where a player touches the net during play." },
    ],
  },
  {
    title: "General Volleyball Terminology",
    terms: [
      { term: "Setter Dump", description: "A deceptive move where the setter pushes the ball over the net instead of setting." },
      { term: "Rotation", description: "The clockwise movement of players through the six court zones after gaining the serve." },
      { term: "Libero Replacement", description: "The libero can replace any back-row player without counting as a substitution." },
      { term: "Overlap", description: "A positional fault where players are out of rotation order during the serve." },
      { term: "Pin", description: "The outer edges of the net, used for attacking angles." },
    ],
  },
];

const GlossaryPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-orange-400">Volleyball Glossary</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive glossary of volleyball terms to expand your knowledge and help you communicate effectively on the court.
          </p>
        </header>
        {glossarySections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.terms.map((term) => (
                <div
                  key={term.term}
                  className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-200"
                >
                  <h3 className="text-lg font-bold text-orange-400 mb-2">{term.term}</h3>
                  <p className="text-sm text-gray-300">{term.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default GlossaryPage;
