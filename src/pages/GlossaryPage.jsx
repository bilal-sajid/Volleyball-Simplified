import React from 'react';
import Navbar from '../components/Navbar';

// To Display the Cards
import InfoSection from '../components/InfoSection';

// Information to Display
import glossarySections from '../data/glossaryData';

const GlossaryPage = () => {
  return (
    <div className="bg-page-bg min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-headerSection-title">Volleyball Glossary</h1>
          <p className="text-lg text-headerSection-text mt-4 max-w-2xl mx-auto">
            A comprehensive glossary of volleyball terms to expand your knowledge and help you communicate effectively on the court.
          </p>
        </header>

        {/* Displaying all the Information Cards */}
        {glossarySections.map((section, index) => (
          <InfoSection key={index} title={section.title} terms={section.terms} />
        ))}
      </div>


    </div>
  );
};

export default GlossaryPage;
