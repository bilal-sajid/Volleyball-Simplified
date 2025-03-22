import React from 'react';
import Navbar from '../components/Navbar';


// To Display the Cards
import InfoSection from '../components/InfoSection';

// Information to Display
import { gameSenseSections, commonMistakes } from '../data/gameSenseData';

const BuildingGameSensePage = () => {
  return (
    <div className="bg-page-bg min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-headerSection-title">
          Building Game Sense
        </h1>
        <p className="text-lg text-headerSection-text mt-4 max-w-2xl mx-auto">
          Develop your volleyball instincts and enhance your understanding of the game with these beginner-friendly tips.
        </p>
      </header>


        {/* Tips Sections */}
        <section>
          <div className="space-y-12">
            {gameSenseSections.map((section, index) => (
              <InfoSection
                key={index}
                title={section.title}
                terms={section.terms}
              />
            ))}
          </div>
        </section>


        {/* Common Mistakes Section */}
        <section className="mt-16">
          <div className="bg-highlightSection-bg text-highlightSection-text rounded-lg shadow-lg p-8 border-l-8 border-highlightSection-border">
            <InfoSection
              title="⚠️ Common Mistakes to Avoid"
              terms={commonMistakes}
              showIcon={true}
              gridCols="grid-cols-1 md:grid-cols-2"
              icon="❌"
            />

            <p className="text-lg max-w-3xl mx-auto text-center mt-8">
              Watch out for these frequent mistakes that beginners often make. Avoiding them will help you improve your game and confidence on the court.
            </p>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default BuildingGameSensePage;
