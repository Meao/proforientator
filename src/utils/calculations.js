import { genericProfession } from '../data/professionProfiles.js';

export const calculateHolisticFit = (profile, professionProfiles, TOTAL_POSSIBLE) => {
  const results = {};
  
  Object.entries(professionProfiles).forEach(([profession, profProfile]) => {
    let baseScore = 0;
    const scoringTraits = {
      ...genericProfession.traitRanges,
      ...profProfile.corePattern
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
  
  return Object.entries(results).sort(([,a], [,b]) => b.percentage - a.percentage);
};