import React from 'react';
import ResultCard from './ResultCard';
import AlgorithmInfo from './AlgorithmInfo';

const Results = ({ prediction, profile }) => (
  <div className="results-container">
    <h2 className="section-title">Your Profession Fit Test Results</h2>
    
    <div className="results-grid">
      {prediction.map(([profession, data], index) => (
        <ResultCard 
          key={profession}
          profession={profession}
          data={data}
          index={index}
          profile={profile}
        />
      ))}
    </div>

    <AlgorithmInfo />
  </div>
);

export default Results;