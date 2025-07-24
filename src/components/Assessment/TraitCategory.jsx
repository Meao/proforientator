import React from 'react';
import TraitItem from './TraitItem.jsx';
import { getIconForCategory } from '../../utils/icons.jsx';

const TraitCategory = ({ mainCategory, subCategory, traits, profile, handleChange }) => {
  const categoryKey = `${mainCategory} - ${subCategory}`;
  
  return (
    <div className="trait-category">
      <div className="trait-category-header">
        {getIconForCategory(categoryKey)}
        <h4 className="trait-category-title">{subCategory}</h4>
      </div>

      <div className="traits-list">
        {traits.map(trait => (
          <TraitItem 
            key={trait}
            trait={trait}
            value={profile[trait] || 5}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default TraitCategory;