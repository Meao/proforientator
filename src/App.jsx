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
    // Combine generic and core traits
    const scoringTraits = {
      ...genericProfession.traitRanges, // All traits [0,9]
      ...profProfile.corePattern        // Override with core ranges
    };

    const matchedTraits = [];

    Object.entries(scoringTraits).forEach(([trait, [min, max]]) => {
      const userValue = profile[trait] ?? 5;
      const isCoreTrait = profProfile.corePattern[trait];

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

  const getTraitEmoji = (trait) => {const emojiMap = [

    // Cognitive Abilities
    [["logical thinking", "pattern recognition", "math skills"], "🧮"],
    [["creative thinking", "abstract thinking", "design and aesthetics"], "🎨"],
    [["fast learner", "good memory", "problem solving", "loves learning"], "📚"],
    [["detail-oriented", "stays focused", "attention to detail"], "🔍"],
    [["big picture thinker", "strategic thinking"], "🌐"],

    // Social Skills
    [["emotional intelligence", "helping others"], "❤️"],
    [["persuasion", "sales and persuasion", "negotiation"], "💬"],
    [["cultural awareness"], "🌎"],
    [["writing skills", "technical writing", "documentation skills"], "✍️"],
    [["public speaking", "presentation skills"], "🎤"],
    [["conflict resolution", "collaborative", "team player"], "🤝"],

    // Work Style
    [["likes routine", "systematic", "prefers stability"], "⏱️"],
    [["flexible schedule", "switches tasks easily", "handles change"], "🔄"],
    [["works well remotely", "travel tolerance"], "🏠"],
    [["self-starter", "self-directed", "autonomy & independence"], "🦸"],
    [["decisive", "assertive"], "⚡"],

    // Professional Skills
    [["time management", "project management"], "⏳"],
    [["technical proficiency", "research and analysis", "data analysis capability"], "💻"],
    [["leadership capability", "training and development"], "👔"],
    [["quality assurance"], "✅"],
    [["public relations"], "📢"],

    // Personal Traits
    [["goal-driven", "competitive", "deadline-driven", "purpose-driven"], "🎯"],
    [["optimistic", "patience and persistence"], "☀️"],
    [["diplomatic", "thoughtful"], "⚖️"],
    [["calculated risk-taking"], "🎲"],
    [["calm under pressure", "handles crises"], "🧘"],

    // Values
    [["social impact", "justice commitment"], "🌍"],
    [["environmental stewardship"], "🌱"],
    [["work-life balance"], "⚖️"],
    [["money", "recognition"], "💰"],

    // Physical
    [["physical endurance", "outdoor resilience"], "💪"],
    [["manual dexterity", "mobility and movement"], "✋"],
    [["good vision", "light variation tolerance"], "👀"],
    [["good hearing", "noise tolerance"], "👂"],
    [["smell tolerance"], "👃"],
    [["sitting work comfort"], "🪑"],
    [["temperature adaptability"], "🌡️"],
    [["energy levels"], "⚡"],
    [["handles interruptions", "multitasking"], "🔀"]
  ];

    const lowerTrait = trait.toLowerCase();
    const match = emojiMap.find(([keywords]) =>
      keywords.some(keyword => lowerTrait.includes(keyword))
    );

  return match ? match[1] : "";
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
                              {trait} {getTraitEmoji(trait)}
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
              <div className="result-card">
                <div className="result-rank-container">
                  <span className="result-rank">#{index + 1}</span>
                  <div className="result-percentage-container">
                    <div className="result-percentage">{data.percentage}%</div>
                    <div className="result-match-label">Match</div>
                  </div>
                </div>

                <h3 className="profession-name">{profession}</h3>

                {/* Show matched core traits */}
                <div className="result-metrics">
                  {Object.keys(professionProfiles[profession].corePattern)
                    .filter(trait => profile[trait] >= professionProfiles[profession].corePattern[trait][0])
                    .map(trait => (
                      <span key={trait} className="metric-row">
                        ✓ {trait} {getTraitEmoji(trait)}
                      </span>
                    ))}

                {/* Show synergy note if applicable */}
                {data.synergyBonus > 0 && (
                  <span className="metric-row">
                    ★ Trait synergies (+{data.synergyBonus} points)
                  </span>
                )}
                </div>
              </div>
            ))}
          </div>

          <div className="algorithm-info">
            <h4 className="algorithm-title">Fit Algorithm Features:</h4>
            <div className="algorithm-list">
              <div className="algorithm-item">
                <strong>Core Pattern Matching:</strong> Evaluates if your traits match optimal ranges for each profession
              </div>
              <div className="algorithm-item">
                <strong>Synergy Detection:</strong> Identifies beneficial trait combinations
              </div>
              <div className="algorithm-item">
                <strong>Potential Considerations:</strong> Flags trait mismatches where accommodations or adaptations may be needed
              </div>
              <div className="algorithm-item">
                <strong>Environmental Fit:</strong> Assesses alignment with physical/sensory work requirements
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HolisticProfessionPredictor;