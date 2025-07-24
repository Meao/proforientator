import React from 'react';
import { getTraitEmoji } from '../../utils/emojis.js';

const TraitItem = ({ trait, value, onChange }) => (
  <div className="trait-item">
    <div className="trait-name">
      {trait} {getTraitEmoji(trait)}
    </div>
    <div className="slider-container">
      <span className="slider-label">Low</span>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(trait, e.target.value)}
        className="slider"
      />
      <span className="slider-label">High</span>
      <span className="slider-value">{value}</span>
    </div>
  </div>
);

export default TraitItem;