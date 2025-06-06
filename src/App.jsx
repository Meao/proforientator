import React, { useState } from 'react';
import { Star, TrendingUp, User, Brain } from 'lucide-react';

const WeightedProfessionPredictor = () => {
  const [traitWeights, setTraitWeights] = useState({});
  const [prediction, setPrediction] = useState(null);

  // Simplified trait categories with both positive and negative traits
  const characteristics = {
    "Cognitive Traits": [
      "Analytical thinking",
      "Creative problem solving",
      "Attention to detail",
      "Focus and concentration"
    ],
    "Social Traits": [
      "Strong communication",
      "Team collaboration",
      "Social confidence",
      "Conflict resolution"
    ]
  };

  // Profession compatibility matrix with weighted requirements
  const professionMatrix = {
    "Software Engineer": {
      required: {
        "Analytical thinking": 3,
        "Attention to detail": 3
      },
      preferred: {
        "Creative problem solving": 2,
        "Focus and concentration": 1
      }
    },
    "Sales Manager": {
      required: {
        "Strong communication": 3,
        "Social confidence": 3
      },
      preferred: {
        "Team collaboration": 2,
        "Conflict resolution": 1
      }
    }
  };

  const handleWeightChange = (category, trait, weight) => {
    const key = `${category}-${trait}`;
    setTraitWeights(prev => ({
      ...prev,
      [key]: parseFloat(weight)
    }));
  };

  const calculateWeightedCompatibility = () => {
    const scores = {};
    
    Object.entries(professionMatrix).forEach(([profession, requirements]) => {
      let weightedScore = 0;
      let maxPossibleScore = 0;
      
      // Process required traits (weight 3x)
      Object.entries(requirements.required).forEach(([trait, professionWeight]) => {
        const userWeight = getUserTraitWeight(trait);
        const contribution = professionWeight * userWeight;
        weightedScore += contribution;
        maxPossibleScore += professionWeight * 5; // Max user weight is 5
      });
      
      // Process preferred traits (weight 1-2x)  
      Object.entries(requirements.preferred).forEach(([trait, professionWeight]) => {
        const userWeight = getUserTraitWeight(trait);
        const contribution = professionWeight * userWeight;
        weightedScore += contribution;
        maxPossibleScore += professionWeight * 5;
      });
      
      // Calculate percentage compatibility
      const percentage = maxPossibleScore > 0 ? (weightedScore / maxPossibleScore) * 100 : 0;
      
      scores[profession] = {
        score: weightedScore,
        maxScore: maxPossibleScore,
        percentage: Math.round(percentage * 100) / 100
      };
    });
    
    const sortedProfessions = Object.entries(scores)
      .sort(([,a], [,b]) => b.percentage - a.percentage);
    
    setPrediction(sortedProfessions);
  };

  const getUserTraitWeight = (trait) => {
    // Find the trait in our characteristics and get user's weight
    for (const [category, traits] of Object.entries(characteristics)) {
      if (traits.includes(trait)) {
        const key = `${category}-${trait}`;
        return traitWeights[key] || 0;
      }
    }
    return 0;
  };



  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <Brain className="text-blue-600" />
          Weighted Profession Compatibility
        </h1>
        <p className="text-gray-600">Rate how much each trait applies to you (1-5 scale). The algorithm weighs your ratings against profession requirements.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {Object.entries(characteristics).map(([category, traits]) => (
          <div key={category} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              {category}
            </h3>
            <div className="space-y-4">
              {traits.map(trait => (
                <div key={trait} className="bg-white p-4 rounded border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      {trait}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Not me</span>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.5"
                      value={traitWeights[`${category}-${trait}`] || 0}
                      onChange={(e) => handleWeightChange(category, trait, e.target.value)}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-500">Very me</span>
                    <span className="w-8 text-center font-semibold text-blue-600">
                      {traitWeights[`${category}-${trait}`] || 0}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <button
          onClick={calculateWeightedCompatibility}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
        >
          <TrendingUp className="w-5 h-5" />
          Calculate Compatibility
        </button>
      </div>

      {prediction && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Star className="text-yellow-500" />
            Your Profession Compatibility Results
          </h2>
          
          <div className="space-y-4">
            {prediction.map(([profession, data], index) => (
              <div key={profession} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    #{index + 1} {profession}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {data.percentage}%
                    </div>
                    <div className="text-sm text-gray-500">
                      Score: {data.score.toFixed(1)}/{data.maxScore}
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      data.percentage >= 70 ? 'bg-green-500' :
                      data.percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(data.percentage, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">How the Algorithm Works:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <strong>Weighted Scoring:</strong> Your trait ratings (0-5) are multiplied by each profession's trait importance weights</li>
              <li>• <strong>Required vs Preferred:</strong> Required traits have weight 3, preferred traits have weights 1-2</li>
              <li>• <strong>Final Score:</strong> Sum of (User Rating × Professional Weight) for all relevant traits</li>
              <li>• <strong>Percentage:</strong> (Total Weighted Score / Maximum Possible Score) × 100</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeightedProfessionPredictor;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
