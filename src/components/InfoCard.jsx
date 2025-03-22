
// This component will be responsible for how the a single Information Cards is presented

import React from 'react';
import { Link } from 'react-router-dom'; 

const InfoCard = ({ title, description, showIcon = false, icon = null, link = null }) => {
  const cardContent = (
    <div className={`bg-infoCard-bg h-full p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-infoCard-hoverBg transition-all duration-200 border border-gray-700 hover:border-infoCard-border flex flex-col ${showIcon ? 'items-start' : 'text-center'}`}>
      {showIcon && icon && (
        <span className="text-xl font-bold mr-4 mt-1">{icon}</span>
      )}
      <div>
        <h3 className="text-lg font-bold text-infoCard-title mb-2">{title}</h3>
        <p className="text-sm text-infoCard-text whitespace-pre-line mb-2">{description}</p>

        {/* Optional Link */}
        {link && (
          <span className="text-button-primary font-semibold hover:underline">
            Learn More →
          </span>
        )}
      </div>
    </div>
  );

  // If a link exists, wrap the card with the Link
  return link ? <Link to={link}>{cardContent}</Link> : cardContent;
};

export default InfoCard;




