import React from 'react';
import Navbar from '../components/Navbar';


// To Display the Cards
import InfoSection from '../components/InfoSection';

// Information to Display
import { gameSenseSections, commonMistakes } from '../data/gameSenseData';
import Callout from '../components/Callout';

const BuildingGameSensePage = () => {
  return (
    <div className="bg-page-bg min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        
      {/* Page Header */}
      <header className="text-center mb-12 mt-16">
        <h1 className="text-4xl font-extrabold text-headerSection-title">
          Building Game Sense
        </h1>
        <p className="text-lg text-headerSection-text mt-4 max-w-2xl mx-auto">
          Develop your volleyball instincts and enhance your understanding of the game with these beginner-friendly tips.
        </p>
      </header>


        {/* Tips Sections */}
        <section>
          <div className="space-y-16">
          {gameSenseSections.map((section, index) => (
            <div key={index} className="space-y-6 mb-8">

              <InfoSection
                title={section.title}
                terms={section.terms}
              />

              {/* Conditionally render the Callouts */}

              {index === 0 && (
                <Callout variant="info" title="Your Serve, Your Advantage">
                  Serving isn’t just starting the rally — it’s the only skill you control without interference. Use it to gain momentum and put pressure on the opponent.
                </Callout>
              )}

              {index === 1 && (
                <Callout variant="warning" title="Watch Out!">
                  Staying flat-footed or tense during serve receive limits your ability to react quickly. Always stay loose and light!
                </Callout>
              )}

              
              {index === 2 && (
                <Callout variant="tip" title="Be Unpredicatable!">
                  A good setter doesn’t just deliver clean sets — they keep the blockers guessing by mixing up plays and setting to different hitters
                </Callout>
              )}

              {index === 3 && (
                <Callout variant="info" title="Focus on Timing!">
                  Good blockers don't always jump highest — they jump at the right time and coordinate with their teammates.
                </Callout>
              )}

              {index === 4 && (
                <Callout variant="warning" title="Avoid the Net!">
                  Reaching too far or mistiming your jump can cause net violations. Keep your approach clean and controlled to avoid giving free points.                
                </Callout>
              )}

            </div>
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
