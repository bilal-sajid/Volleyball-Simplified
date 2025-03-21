
// This component will be responsible for how the a single Information Cards is presented

import React from 'react';

const InfoCard = ({ title, description, showIcon = false }) => {
  return (
    <div className={`bg-infoCard-bg p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-infoCard-hoverBg transition-all duration-200 border border-gray-700 hover:border-infoCard-border flex ${showIcon ? 'items-start' : 'flex-col text-center'}`}>
      {showIcon && (
        <span className="text-xl font-bold mr-4 mt-1">❌</span>
      )}
      <div>
        <h3 className="text-lg font-bold text-infoCard-title mb-2">{title}</h3>
        <p className="text-sm text-infoCard-text whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;


