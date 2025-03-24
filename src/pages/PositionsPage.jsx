import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VolleyballCourt from '../components/Positions Page/PositionsCourt';


// To Display the Cards
import InfoSection from '../components/InfoSection';

// Information to Display
import positionsSection from '../data/positionsData';
import zonesSection from '../data/zoneData';

const PositionsPage = () => {

  return (
    <div className="bg-page-bg min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        
        {/* Page Header */}
        <header className="text-center mb-12 mt-16">
          <h1 className="text-4xl font-extrabold text-headerSection-title">
            Volleyball Positions
          </h1>
          <p className="text-lg text-headerSection-text mt-4 max-w-2xl mx-auto">
            Discover the key roles and responsibilities of each player on the court. Learn what it takes to play each position effectively.
          </p>
        </header>

        {/* Section 1: Player Positions */}
        <InfoSection
          title={positionsSection.title}
          terms={positionsSection.terms}
        />

        {/* Section 2: Court Layout */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-headerSection-title mb-6">
            Court Layout
          </h2>
          <div className="mx-auto">
            <VolleyballCourt />
          </div>
        </section>

        {/* Section 3: Zones Overview */}
        <section className="mb-16 bg-highlightSection-bg text-highlightSection-text rounded-lg shadow-lg p-8 border-l-8 border-highlightSection-border">
          <InfoSection
            title={zonesSection.title}
            terms={zonesSection.terms.slice(0, 2)} // First 2: What Are Zones & Importance
            gridCols="grid-cols-1 md:grid-cols-2"
          />
          
          {/* Rotation & Serving Strategy (1 card each, full-width) */}
          {zonesSection.terms.slice(2).map((section, index) => (
            <InfoSection
              key={index}
              title=""
              terms={[section]}
              gridCols="grid-cols-1"
            />
          ))}
        </section>

      </div>
    </div>
  );
};

export default PositionsPage;
