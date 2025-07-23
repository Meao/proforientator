import React, { useState } from 'react';
import { Brain, Users, Briefcase, Award, Heart, Target, Activity, TrendingUp } from 'lucide-react';
import './App.css';
import './index.css';
import { dimensions, allTraits, categoryDescriptions } from './data/dimensions';
import { professionProfiles, genericProfession } from './data/professionProfiles';

const TOTAL_POSSIBLE = allTraits.length * 9;

const HolisticProfessionPredictor = () => {
  // Initialize state with all traits set to 5
  const [profile, setProfile] = useState(() => {
    const defaultProfile = {};
    allTraits.forEach(trait => {
      defaultProfile[trait] = 5;
    });
    return defaultProfile;
  });

  const [prediction, setPrediction] = useState(null);

const handleChange = (trait, value) => {
  setProfile(prev => ({
    ...prev,
    [trait]: parseFloat(value)
  }));
};

  const calculateHolisticFit = () => {
    const results = {};
    
    Object.entries(professionProfiles).forEach(([profession, profProfile]) => {
      let baseScore = 0;
      // let matchedTraits = 0;

      // Object.entries(profProfile.corePattern).forEach(([trait, [min, max]]) => {
      //   const userValue = profile[trait] ?? 5;
      //   if (userValue >= max) {
      //     baseScore += max;  // Cap at maximum
      //     matchedTraits++;
      //   } else if (userValue >= min) {
      //     baseScore += userValue;  // Full points within range
      //     matchedTraits++;
      //   } else {
      //     const distance = min - userValue;
      //     baseScore += Math.max(0, userValue - distance * 0.5);  // 50% penalty
      //   }
      // });

    // Combine generic and core traits
    const scoringTraits = {
      ...genericProfession.traitRanges, // All traits [0,9]
      ...profProfile.corePattern        // Override with core ranges
    };

    // Rest of your scoring logic...
    const matchedTraits = [];

    Object.entries(scoringTraits).forEach(([trait, [min, max]]) => {
      const userValue = profile[trait] ?? 5;
      const isCoreTrait = profProfile.corePattern[trait];
      // Your existing scoring logic
      if (userValue >= max) baseScore += max;
      else if (userValue >= min) baseScore += userValue;
      else baseScore += Math.max(0, userValue - (min - userValue) * 0.5);
      
      if (isCoreTrait && userValue >= min) {
        matchedTraits.push(trait);
      }
    });

      let synergyBonus = 0;
      profProfile.synergies?.forEach(({traits, bonus}) => {
        const traitValues = traits.map(t => profile[t] ?? 5);
        const avgValue = traitValues.reduce((a, b) => a + b, 0) / traitValues.length;
        if (avgValue >= 5) {
          synergyBonus += bonus * avgValue;
        }
      });
      
      let antiPenalty = 0;
      profProfile.antiPatterns?.forEach(({traits, penalty}) => {
        const traitValues = traits.map(t => profile[t] ?? 5);
        const avgValue = traitValues.reduce((a, b) => a + b, 0) / traitValues.length;
        if (avgValue >= 7) {
          antiPenalty += penalty * avgValue;
        }
      });
      
      const rawScore = baseScore + synergyBonus - antiPenalty;
      const percentage = Math.min(100, Math.max(0, (rawScore / TOTAL_POSSIBLE) * 100));
      
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
    
    setPrediction(Object.entries(results).sort(([,a], [,b]) => b.percentage - a.percentage));
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
        <h1 className="title">AI Profession Fit Test</h1>
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
<div className="trait-name">
  {trait}
  {trait.includes("detail") && " 🔬"}
  {trait.includes("Physical") && " 💪"}
  {trait.includes("Visual") && " 👀"}
  {trait.includes("Auditory") && " 👂"}
  {/* {trait.includes("Cultural" or "Language" or 'language' or 'big') && " 🌍"}
  {trait.includes("Creative" or "Artistic" or "Design" or 'design') && " 🎨"} */}
  {trait.includes("Analytical") && " 🔍"}
  {trait.includes("Communication") && " 💬"}
</div>
                            <div className="slider-container">
                              <span className="slider-label">Low</span>
                                <input
                                  type="range"
                                  min="1"
                                  max="10"
                                  value={profile[trait] || 5}
                                  onChange={(e) => handleChange(trait, e.target.value)}
                                  className="slider"
                                />
                              <span className="slider-label">High</span>
                              <span className="slider-value">
                                {profile[trait] || 5}
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
                    <span className="metric-label">Key Strengths:</span>
                    <span className="metric-value">{data.matchedTraits}</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Base Score:</span>
                    <span className="metric-value">{data.baseScore.toFixed(1)}</span>
                  </div>
                  <div className="metric-row positive">
                    <span className="metric-label">Synergy Bonus:</span>
                    <span className="metric-value">+{data.synergyBonus}</span>
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
              <div className="algorithm-item"><strong>Anti-Pattern Recognition:</strong> Identifies potentially conflicting trait combinations. This doesn't account for assistive technologies. This role may require more [trait] than you prefer. Consider asking about accommodations.</div>
              <div className="algorithm-item"><strong>Environmental Fit:</strong> Considers how your profile matches work environment needs</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HolisticProfessionPredictor;