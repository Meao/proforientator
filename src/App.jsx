import React, { useState } from 'react';
import { Brain, Users, Briefcase, Award, Heart, Target, Activity, TrendingUp } from 'lucide-react';
import './App.css';
import './index.css';
import { dimensions, flattenedDimensions, categoryDescriptions } from './data/dimensions';
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

      Object.entries(profProfile.corePattern).forEach(([trait, [min, max]]) => {
        const userValue = getUserTraitValue(trait);
        if (userValue >= min && userValue <= max) {
          baseScore += userValue;
          matchedTraits++;
        } else {
          const distance = userValue < min ? min - userValue : userValue - max;
          baseScore += Math.max(0, userValue - distance * 0.5);
        }
        maxBase += 9;
      });
      
      let synergyBonus = 0;
      profProfile.synergies.forEach(({traits, bonus}) => {
        const traitValues = traits.map(t => getUserTraitValue(t));
        const avgValue = traitValues.reduce((a, b) => a + b, 0) / traitValues.length;
        if (avgValue >= 5) {
          synergyBonus += bonus * avgValue;
        }
      });
      
      let antiPenalty = 0;
      profProfile.antiPatterns.forEach(({traits, penalty}) => {
        const traitValues = traits.map(t => getUserTraitValue(t));
        const avgValue = traitValues.reduce((a, b) => a + b, 0) / traitValues.length;
        if (avgValue >= 7) {
          antiPenalty += penalty * avgValue;
        }
      });
      
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
    for (const [category, traits] of Object.entries(flattenedDimensions)) {
      if (traits.includes(trait)) {
        const key = `${category}-${trait}`;
        return profile[key] || 0;
      }
    }
    return 0;
  };

  const getIconForCategory = (category) => {
    const iconMap = {
      "Thinking Style": <Brain className="category-icon" />,
      "Social & Communication": <Users className="category-icon" />,
      "Work Style & Environment": <Briefcase className="category-icon" />,
      "Professional Skills": <Award className="category-icon" />,
      "Personal Traits": <Heart className="category-icon" />,
      "Values & Motivations": <Target className="category-icon" />,
      "Physical & Practical": <Activity className="category-icon" />
    };
    const mainCategory = category.split(' - ')[0];
    return iconMap[mainCategory] || <Brain className="category-icon" />;
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Profession Fit Test</h1>
        <p className="subtitle">
          Rate yourself across key dimensions. Our algorithm considers trait interactions, synergies, and overall patterns.
        </p>
      </div>

      <div className="assessment-section">
        <h2 className="section-title">Assessment</h2>

        {Object.entries(dimensions).map(([mainCategory, subCategories]) => (
          <div key={mainCategory} className="dimension-card">
            <div className="dimension-header">
              <div className="dimension-title-container">
                {getIconForCategory(mainCategory)}
                <h3 className="dimension-title">{mainCategory}</h3>
              </div>
              <p className="dimension-description">{categoryDescriptions[mainCategory]}</p>
            </div>

            <div className="dimension-content">
              <div className="traits-grid">
                {Object.entries(subCategories).map(([subCategory, traits]) => {
                  const categoryKey = `${mainCategory} - ${subCategory}`;
                  return (
                    <div key={subCategory} className="trait-category">
                      <div className="trait-category-header">
                        {getIconForCategory(categoryKey)}
                        <h4 className="trait-category-title">{subCategory}</h4>
                      </div>

                      <div className="traits-list">
                        {traits.map(trait => (
                          <div key={trait} className="trait-item">
                            <div className="trait-name">{trait}</div>
                            <div className="slider-container">
                              <span className="slider-label">Low</span>
                              <input
                                type="range"
                                min="1"
                                max="10"
                                value={profile[`${categoryKey}-${trait}`] || 5}
                                onChange={(e) => handleChange(categoryKey, trait, e.target.value)}
                                className="slider"
                              />
                              <span className="slider-label">High</span>
                              <span className="slider-value">
                                {profile[`${categoryKey}-${trait}`] || 5}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button onClick={calculateHolisticFit} className="calculate-button">
          <TrendingUp size={20} />
          Analyze Fit
        </button>
      </div>

      {prediction && (
        <div className="results-container">
          <h2 className="section-title">Your Profession Fit Test Results</h2>
          
          <div className="results-grid">
            {prediction.map(([profession, data], index) => (
              <div key={profession} className="result-card">
                <div className="result-rank-container">
                  <span className="result-rank">#{index + 1}</span>
                  <div className="result-percentage-container">
                    <div className="result-percentage">{data.percentage}%</div>
                    <div className="result-match-label">Match</div>
                  </div>
                </div>
                
                <h3 className="profession-name">{profession}</h3>
                <p className="environment-text">{data.environment}</p>

                <div className="result-metrics">
                  <div className="metric-row">
                    <span className="metric-label">Core Traits:</span>
                    <span className="metric-value">{data.matchedTraits}/{data.totalTraits} aligned</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Base Score:</span>
                    <span className="metric-value">{data.baseScore.toFixed(1)}</span>
                  </div>
                  <div className="metric-row positive">
                    <span className="metric-label">Synergy Bonus:</span>
                    <span className="metric-value">+{data.synergyBonus}</span>
                  </div>
                  <div className="metric-row negative">
                    <span className="metric-label">Pattern Penalty:</span>
                    <span className="metric-value">-{data.antiPenalty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="algorithm-info">
            <h4 className="algorithm-title">Fit Algorithm Features:</h4>
            <div className="algorithm-list">
              <div className="algorithm-item"><strong>Core Pattern Matching:</strong> Evaluates if your traits fall within optimal ranges for each profession</div>
              <div className="algorithm-item"><strong>Synergy Detection:</strong> Bonus points when complementary traits work together</div>
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