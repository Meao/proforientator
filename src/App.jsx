import React, { useState } from 'react';
import Header from './components/Header.jsx';
import DimensionCard from './components/Assessment/DimensionCard.jsx';
import CalculateButton from './components/CalculateButton.jsx';
import Results from './components/Results/index.jsx';
import { dimensions, allTraits } from './data/dimensions.js';
import { professionProfiles } from './data/professionProfiles.js';
import { calculateHolisticFit } from './utils/calculations.js';

const TOTAL_POSSIBLE = allTraits.length * 9;

const HolisticProfessionPredictor = () => {
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

  return (
    <div className="app-container">
      <Header />
      <div className="assessment-section">
        <h2 className="section-title">Assessment</h2>
        {Object.entries(dimensions).map(([mainCategory, subCategories]) => (
          <DimensionCard
            key={mainCategory}
            mainCategory={mainCategory}
            subCategories={subCategories}
            profile={profile}
            handleChange={handleChange}
          />
        ))}
      </div>

      <CalculateButton onClick={() => setPrediction(
        calculateHolisticFit(profile, professionProfiles, TOTAL_POSSIBLE)
      )} />

      {prediction && <Results prediction={prediction} profile={profile} />}
    </div>
  );
};

export default HolisticProfessionPredictor;