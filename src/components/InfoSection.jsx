

// This component will be responsible for how the all the Information Cards are presented in a section

import React from 'react';
import InfoCard from './InfoCard';

const InfoSection = ({ title, terms, showIcon = false, gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }) => {
  return (
    <section className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-4 text-infoSection-title">{title}</h2>
      <div className={`grid ${gridCols} gap-6`}>
        {terms.map((termObj, index) => (
          <InfoCard
            key={index}
            title={termObj.term}
            description={termObj.description}
            showIcon={showIcon}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;



