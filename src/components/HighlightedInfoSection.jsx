import React from 'react';

const HighlightedInfoSection = ({ title, sections, gridCols = "grid-cols-1 md:grid-cols-2" }) => {
  return (
    <section className="mb-16 bg-highlightSection-bg text-highlightSection-text rounded-lg shadow-lg p-8 border-l-8 border-highlightSection-border">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      <div className={`grid ${gridCols} gap-8`}>
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600 hover:border-orange-400 transition-all duration-200"
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
  );
};

export default HighlightedInfoSection;
