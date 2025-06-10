import React, { useState } from 'react';
import { Star, TrendingUp, User, Brain, Heart, Target } from 'lucide-react';

const HolisticProfessionPredictor = () => {
  const [profile, setProfile] = useState({});
  const [prediction, setPrediction] = useState(null);

  // Holistic trait dimensions
  const dimensions = {
    "Cognitive Style": [
      "Analytical reasoning",
      "Creative thinking",
      "Pattern recognition",
      "Systems thinking"
    ],
    "Social Orientation": [
      "Collaboration preference",
      "Communication comfort",
      "Leadership inclination",
      "Helping others drive"
    ],
    "Work Environment": [
      "Structure preference",
      "Autonomy need",
      "Variety seeking",
      "Risk tolerance"
    ],
    "Energy & Focus": [
      "Detail orientation",
      "Big picture focus",
      "Deadline pressure handling",
      "Multitasking ability"
    ]
  };

  // Holistic profession profiles with synergies and anti-patterns
  const professionProfiles = {
    "Software Engineer": {
      corePattern: {
        "Analytical reasoning": [3, 5],
        "Systems thinking": [3, 5],
        "Detail orientation": [3, 5],
        "Autonomy need": [2, 5]
      },
      synergies: [
        {traits: ["Creative thinking", "Pattern recognition"], bonus: 0.2},
        {traits: ["Structure preference", "Detail orientation"], bonus: 0.15}
      ],
      antiPatterns: [
        {traits: ["Helping others drive", "Communication comfort"], penalty: 0.1}
      ],
      environment: "Structured, autonomous, problem-solving focused"
    },
    "UX Designer": {
      corePattern: {
        "Creative thinking": [4, 5],
        "Systems thinking": [3, 5],
        "Communication comfort": [3, 5],
        "Big picture focus": [3, 5]
      },
      synergies: [
        {traits: ["Creative thinking", "Analytical reasoning"], bonus: 0.25},
        {traits: ["Communication comfort", "Helping others drive"], bonus: 0.2}
      ],
      antiPatterns: [
        {traits: ["Structure preference", "Detail orientation"], penalty: 0.15}
      ],
      environment: "Collaborative, user-centered, iterative"
    },
    "Sales Manager": {
      corePattern: {
        "Communication comfort": [4, 5],
        "Leadership inclination": [3, 5],
        "Risk tolerance": [3, 5],
        "Deadline pressure handling": [3, 5]
      },
      synergies: [
        {traits: ["Communication comfort", "Helping others drive"], bonus: 0.2},
        {traits: ["Leadership inclination", "Risk tolerance"], bonus: 0.18}
      ],
      antiPatterns: [
        {traits: ["Autonomy need", "Detail orientation"], penalty: 0.12}
      ],
      environment: "People-focused, results-driven, dynamic"
    },
    "Data Scientist": {
      corePattern: {
        "Analytical reasoning": [4, 5],
        "Pattern recognition": [4, 5],
        "Systems thinking": [3, 5],
        "Detail orientation": [3, 5]
      },
      synergies: [
        {traits: ["Analytical reasoning", "Creative thinking"], bonus: 0.25},
        {traits: ["Pattern recognition", "Big picture focus"], bonus: 0.2}
      ],
      antiPatterns: [
        {traits: ["Variety seeking", "Multitasking ability"], penalty: 0.1}
      ],
      environment: "Research-oriented, data-driven, methodical"
    }
  };

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
        maxBase += 5;
      });
      
      // Apply synergy bonuses
      let synergyBonus = 0;
      profProfile.synergies.forEach(({traits, bonus}) => {
        const traitValues = traits.map(t => getUserTraitValue(t));
        const avgValue = traitValues.reduce((a, b) => a + b, 0) / traitValues.length;
        if (avgValue >= 3) {
          synergyBonus += bonus * avgValue;
        }
      });
      
      // Apply anti-pattern penalties
      let antiPenalty = 0;
      profProfile.antiPatterns.forEach(({traits, penalty}) => {
        const traitValues = traits.map(t => getUserTraitValue(t));
        const avgValue = traitValues.reduce((a, b) => a + b, 0) / traitValues.length;
        if (avgValue >= 4) {
          antiPenalty += penalty * avgValue;
        }
      });
      
      // Calculate score
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

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px',
      backgroundColor: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      marginBottom: '32px'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    subtitle: {
      color: '#6b7280',
      lineHeight: '1.5'
    },
    dimensionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    dimensionCard: {
      background: 'linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%)',
      padding: '24px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb'
    },
    dimensionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    traitsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    traitCard: {
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    traitName: {
      fontWeight: '500',
      color: '#374151',
      fontSize: '0.875rem',
      marginBottom: '8px'
    },
    sliderContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    sliderLabel: {
      fontSize: '0.75rem',
      color: '#6b7280'
    },
    slider: {
      flex: 1,
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      appearance: 'none',
      cursor: 'pointer'
    },
    sliderValue: {
      width: '32px',
      textAlign: 'center',
      fontWeight: '600',
      color: '#7c3aed',
      fontSize: '0.875rem'
    },
    buttonContainer: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    calculateButton: {
      background: 'linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '8px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    },
    resultsContainer: {
      background: 'linear-gradient(90deg, #faf5ff 0%, #eff6ff 100%)',
      padding: '24px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb'
    },
    resultsTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    resultsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    resultCard: {
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      border: '1px solid #e5e7eb'
    },
    resultHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    professionName: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    environmentText: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginTop: '4px'
    },
    percentageScore: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#7c3aed',
      textAlign: 'right'
    },
    traitsMatched: {
      fontSize: '0.75rem',
      color: '#6b7280',
      textAlign: 'right'
    },
    progressBar: {
      width: '100%',
      height: '16px',
      backgroundColor: '#e5e7eb',
      borderRadius: '8px',
      marginBottom: '16px',
      overflow: 'hidden'
    },
    metricsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      fontSize: '0.875rem'
    },
    metricCard: {
      textAlign: 'center',
      padding: '8px',
      borderRadius: '4px'
    },
    baseScoreCard: {
      backgroundColor: '#eff6ff'
    },
    synergyCard: {
      backgroundColor: '#f0fdf4'
    },
    penaltyCard: {
      backgroundColor: '#fef2f2'
    },
    metricLabel: {
      fontWeight: '600',
      marginBottom: '4px'
    },
    baseScoreLabel: {
      color: '#1d4ed8'
    },
    synergyLabel: {
      color: '#059669'
    },
    penaltyLabel: {
      color: '#dc2626'
    },
    baseScoreValue: {
      color: '#2563eb'
    },
    synergyValue: {
      color: '#10b981'
    },
    penaltyValue: {
      color: '#ef4444'
    },
    algorithmInfo: {
      marginTop: '24px',
      padding: '16px',
      backgroundColor: '#f3e8ff',
      borderRadius: '8px'
    },
    algorithmTitle: {
      fontWeight: '600',
      color: '#6b21a8',
      marginBottom: '8px'
    },
    algorithmList: {
      fontSize: '0.875rem',
      color: '#7c2d92',
      lineHeight: '1.5'
    },
    algorithmItem: {
      marginBottom: '4px'
    }
  };

  const getProgressBarColor = (percentage) => {
    if (percentage >= 80) return 'linear-gradient(90deg, #10b981 0%, #059669 100%)';
    if (percentage >= 60) return 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)';
    return 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
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
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          Profession Fit Test
        </h1>
        <p style={styles.subtitle}>
          Rate yourself across dimensions. Our algorithm considers trait interactions, synergies, and overall patterns.
        </p>
      </div>

      <div style={styles.dimensionsGrid}>
        {Object.entries(dimensions).map(([category, traits]) => (
          <div key={category} style={styles.dimensionCard}>
            <h3 style={styles.dimensionTitle}>
              {getIconForCategory(category)}
              {category}
            </h3>
            <div style={styles.traitsList}>
              {traits.map(trait => (
                <div key={trait} style={styles.traitCard}>
                  <div style={styles.traitName}>
                    {trait}
                  </div>
                  <div style={styles.sliderContainer}>
                    <span style={styles.sliderLabel}>Low</span>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="0.5"
                      value={profile[`${category}-${trait}`] || 1}
                      onChange={(e) => handleChange(category, trait, e.target.value)}
                      style={styles.slider}
                    />
                    <span style={styles.sliderLabel}>High</span>
                    <span style={styles.sliderValue}>
                      {profile[`${category}-${trait}`] || 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.buttonContainer}>
        <button
          onClick={calculateHolisticFit}
          style={styles.calculateButton}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          <TrendingUp size={20} />
          Analyze Holistic Fit
        </button>
      </div>

      {prediction && (
        <div style={styles.resultsContainer}>
          <h2 style={styles.resultsTitle}>
            <Star size={24} style={{color: '#fbbf24'}} />
            Your Profession Fit Test Results
          </h2>
          
          <div style={styles.resultsList}>
            {prediction.map(([profession, data], index) => (
              <div key={profession} style={styles.resultCard}>
                <div style={styles.resultHeader}>
                  <div>
                    <h3 style={styles.professionName}>
                      #{index + 1} {profession}
                    </h3>
                    <p style={styles.environmentText}>{data.environment}</p>
                  </div>
                  <div>
                    <div style={styles.percentageScore}>
                      {data.percentage}%
                    </div>
                    <div style={styles.traitsMatched}>
                      {data.matchedTraits}/{data.totalTraits} core traits aligned
                    </div>
                  </div>
                </div>
                
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      height: '100%',
                      background: getProgressBarColor(data.percentage),
                      width: `${Math.min(data.percentage, 100)}%`,
                      transition: 'width 0.7s ease-in-out',
                      borderRadius: '8px'
                    }}
                  ></div>
                </div>

                <div style={styles.metricsGrid}>
                  <div style={{...styles.metricCard, ...styles.baseScoreCard}}>
                    <div style={{...styles.metricLabel, ...styles.baseScoreLabel}}>Base Score</div>
                    <div style={styles.baseScoreValue}>{data.baseScore.toFixed(1)}</div>
                  </div>
                  <div style={{...styles.metricCard, ...styles.synergyCard}}>
                    <div style={{...styles.metricLabel, ...styles.synergyLabel}}>Synergy Bonus</div>
                    <div style={styles.synergyValue}>+{data.synergyBonus}</div>
                  </div>
                  <div style={{...styles.metricCard, ...styles.penaltyCard}}>
                    <div style={{...styles.metricLabel, ...styles.penaltyLabel}}>Pattern Penalty</div>
                    <div style={styles.penaltyValue}>-{data.antiPenalty}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={styles.algorithmInfo}>
            <h4 style={styles.algorithmTitle}>Algorithm Features:</h4>
            <div style={styles.algorithmList}>
              <div style={styles.algorithmItem}><strong>Core Pattern Matching:</strong> Evaluates if your traits fall within optimal ranges for each profession</div>
              <div style={styles.algorithmItem}><strong>Synergy Detection:</strong> Bonus points when complementary traits work together (e.g., creativity + analysis)</div>
              <div style={styles.algorithmItem}><strong>Anti-Pattern Recognition:</strong> Identifies potentially conflicting trait combinations</div>
              <div style={styles.algorithmItem}><strong>Environmental Fit:</strong> Considers how your profile matches work environment needs</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HolisticProfessionPredictor;
