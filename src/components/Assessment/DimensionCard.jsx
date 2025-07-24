import React from 'react';
import TraitCategory from './TraitCategory.jsx';
import { getIconForCategory } from '../../utils/icons.jsx';
import { categoryDescriptions } from '../../data/dimensions.js';

const DimensionCard = ({ mainCategory, subCategories, profile, handleChange }) => (
  <div className="dimension-card">
    <div className="dimension-header">
      <div className="dimension-title-container">
        {getIconForCategory(mainCategory)}
        <h3 className="dimension-title">{mainCategory}</h3>
      </div>
      <p className="dimension-description">{categoryDescriptions[mainCategory]}</p>
    </div>

    <div className="dimension-content">
      <div className="traits-grid">
        {Object.entries(subCategories).map(([subCategory, traits]) => (
          <TraitCategory 
            key={subCategory}
            mainCategory={mainCategory}
            subCategory={subCategory}
            traits={traits}
            profile={profile}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  </div>
);

export default DimensionCard;