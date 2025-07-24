import React from 'react';
import { TrendingUp } from 'lucide-react';

const CalculateButton = ({ onClick }) => (
  <div className="button-container">
    <button onClick={onClick} className="calculate-button">
      <TrendingUp size={20} />
      Analyze Fit
    </button>
  </div>
);

export default CalculateButton;