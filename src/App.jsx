import React, { useState } from 'react';
import { Star, TrendingUp, User, Brain, Heart, Target } from 'lucide-react';
import './App.css';
import './index.css';
import { dimensions } from './data/dimensions';
import { professionProfiles } from './data/professionProfiles';
const HolisticProfessionPredictor = () => {
  const [profile, setProfile] = useState({});
  const [prediction, setPrediction] = useState(null);

  const handleChange = (category, trait, value) => {
    const key = `${category}-${trait}`;
    setProfile(prev => ({
      ...prev,
      [key]: parseFloat(value)
    }));
  };

  const calculateHolisticFit = () => {
    const results = {};
    
    Object.entries(professionProfiles).forEach(([profession, profProfile]) => {
      let baseScore = 0;
      let maxBase = 0;
      let matchedTraits = 0;

      // Calculate base compatibility from core patterns
      Object.entries(profProfile.corePattern).forEach(([trait, [min, max]]) => {
        const userValue = getUserTraitValue(trait);
        if (userValue >= min && userValue <= max) {
          baseScore += userValue;
          matchedTraits++;
        } else {
          // Penalty for being outside optimal range
          const distance = userValue < min ? min - userValue : userValue - max;
          baseScore += Math.max(0, userValue - distance * 0.5);
        }
        maxBase += 9;
      });
      
      // Apply synergy bonuses
      let synergyBonus = 0;
      profProfile.synergies.forEach(({traits, bonus}) => {
        const traitValues = traits.map(t => getUserTraitValue(t));
        const avgValue = traitValues.reduce((a, b) => a + b, 0) / traitValues.length;
        if (avgValue >= 5) {
          synergyBonus += bonus * avgValue;
        }
      });
      
      // Apply anti-pattern penalties
      let antiPenalty = 0;
      profProfile.antiPatterns.forEach(({traits, penalty}) => {
        const traitValues = traits.map(t => getUserTraitValue(t));
        const avgValue = traitValues.reduce((a, b) => a + b, 0) / traitValues.length;
        if (avgValue >= 7) {
          antiPenalty += penalty * avgValue;
        }
      });
      
      // Calculate holistic score
      const rawScore = baseScore + synergyBonus - antiPenalty;
      const percentage = Math.min(100, Math.max(0, (rawScore / maxBase) * 100));
      
      results[profession] = {
        percentage: Math.round(percentage * 100) / 100,
        baseScore,
        synergyBonus: Math.round(synergyBonus * 100) / 100,
        antiPenalty: Math.round(antiPenalty * 100) / 100,
        matchedTraits,
        totalTraits: Object.keys(profProfile.corePattern).length,
        environment: profProfile.environment
      };
    });
    
    const sortedResults = Object.entries(results)
      .sort(([,a], [,b]) => b.percentage - a.percentage);
    
    setPrediction(sortedResults);
  };

  const getUserTraitValue = (trait) => {
    for (const [category, traits] of Object.entries(dimensions)) {
      if (traits.includes(trait)) {
        const key = `${category}-${trait}`;
        return profile[key] || 0;
      }
    }
    return 0;
  };

  const getProgressBarClass = (percentage) => {
    if (percentage >= 80) return 'high';
    if (percentage >= 60) return 'medium';
    return 'low';
  };

  const getIconForCategory = (category) => {
    switch (category) {
      case "Cognitive Style": return <Brain size={20} style={{color: '#8b5cf6'}} />;
      case "Social Orientation": return <User size={20} style={{color: '#3b82f6'}} />;
      case "Work Environment": return <Target size={20} style={{color: '#10b981'}} />;
      case "Energy & Focus": return <Heart size={20} style={{color: '#ef4444'}} />;
      default: return null;
    }
  };

  return (
    <div>
      <div className="header">
        <h1 className="title">
          Profession Fit Test
        </h1>
        <p className="subtitle">
          Rate yourself across key dimensions. Our algorithm considers trait interactions, synergies, and overall patterns rather than isolated scores.
        </p>
      </div>

      <div className="dimensions-grid">
        {Object.entries(dimensions).map(([category, traits]) => (
          <div key={category} className="dimension-card">
            <h3 className="dimension-title">
              {getIconForCategory(category)}
              {category}
            </h3>
            <div className="traits-list">
              {traits.map(trait => (
                <div key={trait} className="trait-card">
                  <div className="trait-name">
                    {trait}
                  </div>
                  <div className="slider-container">
                    <span className="slider-label">Low</span>
                    <input
                      type="range"
                      min="0"
                      max="9"
                      step="1"
                      value={profile[`${category}-${trait}`] || 0}
                      onChange={(e) => handleChange(category, trait, e.target.value)}
                      className="slider"
                    />
                    <span className="slider-label">High</span>
                    <span className="slider-value">
                      {profile[`${category}-${trait}`] || 0}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button
          onClick={calculateHolisticFit}
          className="calculate-button"
        >
          <TrendingUp size={20} />
          Analyze Fit
        </button>
      </div>

      {prediction && (
        <div className="results-container">
          <h2 className="results-title">
            <Star size={24} style={{color: '#fbbf24'}} />
            Your Profession Fit Test Results
          </h2>
          
          <div className="results-list">
            {prediction.map(([profession, data], index) => (
              <div key={profession} className="result-card">
                <div className="result-header">
                  <div>
                    <h3 className="profession-name">
                      #{index + 1} {profession}
                    </h3>
                    <p className="environment-text">{data.environment}</p>
                  </div>
                  <div>
                    <div className="percentage-score">
                      {data.percentage}%
                    </div>
                    <div className="traits-matched">
                      {data.matchedTraits}/{data.totalTraits} core traits aligned
                    </div>
                  </div>
                </div>
                
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${getProgressBarClass(data.percentage)}`}
                    style={{ width: `${Math.min(data.percentage, 100)}%` }}
                  ></div>
                </div>

                <div className="metrics-grid">
                  <div className="metric-card base-score-card">
                    <div className="metric-label base-score-label">Base Score</div>
                    <div className="base-score-value">{data.baseScore.toFixed(1)}</div>
                  </div>
                  <div className="metric-card synergy-card">
                    <div className="metric-label synergy-label">Synergy Bonus</div>
                    <div className="synergy-value">+{data.synergyBonus}</div>
                  </div>
                  <div className="metric-card penalty-card">
                    <div className="metric-label penalty-label">Pattern Penalty</div>
                    <div className="penalty-value">-{data.antiPenalty}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="algorithm-info">
            <h4 className="algorithm-title">Fit Algorithm Features:</h4>
            <div className="algorithm-list">
              <div className="algorithm-item"><strong>Core Pattern Matching:</strong> Evaluates if your traits fall within optimal ranges for each profession</div>
              <div className="algorithm-item"><strong>Synergy Detection:</strong> Bonus points when complementary traits work together (e.g., creativity + analysis)</div>
              <div className="algorithm-item"><strong>Anti-Pattern Recognition:</strong> Identifies potentially conflicting trait combinations</div>
              <div className="algorithm-item"><strong>Environmental Fit:</strong> Considers how your profile matches work environment needs</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HolisticProfessionPredictor;
