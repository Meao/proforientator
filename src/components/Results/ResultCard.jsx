import React from 'react';
import { getTraitEmoji } from '../../utils/emojis.js';
import { professionProfiles } from '../../data/professionProfiles.js';

const ResultCard = ({ profession, data, index, profile }) => (
  <div className="result-card">
    <div className="result-rank-container">
      <span className="result-rank">#{index + 1}</span>
      <div className="result-percentage-container">
        <div className="result-percentage">{data.percentage}%</div>
        <div className="result-match-label">Match</div>
      </div>
    </div>

    <h3 className="profession-name">{profession}</h3>

    <div className="result-metrics">
      {Object.keys(professionProfiles[profession].corePattern)
        .filter(trait => profile[trait] >= professionProfiles[profession].corePattern[trait][0])
        .map(trait => (
          <span key={trait} className="metric-row">
            ✓ {trait} {getTraitEmoji(trait)}
          </span>
        ))}

      {data.synergyBonus > 0 && (
        <span className="metric-row">
          ★ Trait synergies (+{data.synergyBonus} points)
        </span>
      )}
    </div>
  </div>
);

export default ResultCard;