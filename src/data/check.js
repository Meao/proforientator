import { allTraits } from './dimensions.js';
import { professionProfiles } from './migratedProfiles.js';
// import { professionProfiles } from './professionProfiles.js';

/**
 * Validates that all traits in profession profiles exist in dimensions.js
 * @param {object} professionProfiles - Your professions data
 * @param {Array} allTraits - Array of valid traits from dimensions
 * @returns {object} Validation results with missing traits and error counts
 */
function validateTraits(professionProfiles, allTraits) {
  const results = {
    missingTraits: {},
    totalErrors: 0,
    professionsChecked: 0,
    hasErrors: false
  };

  // Convert to Set for faster lookups
  const validTraits = new Set(allTraits);

  Object.entries(professionProfiles).forEach(([profession, data]) => {
    const missing = [];
    
    const checkTrait = (trait) => {
      if (!validTraits.has(trait)) {
        const suggestions = allTraits.filter(validTrait => 
          validTrait.toLowerCase().includes(trait.split(' ')[0].toLowerCase())
        );
        missing.push({
          invalid: trait,
          suggestions: suggestions.length ? suggestions : null
        });
      }
    };

    // Check core pattern
    Object.keys(data.corePattern).forEach(checkTrait);

    // Check synergies
    data.synergies?.forEach(synergy => {
      synergy.traits.forEach(checkTrait);
    });

    // Check anti-patterns
    data.antiPatterns?.forEach(anti => {
      anti.traits.forEach(checkTrait);
    });

    if (missing.length > 0) {
      results.missingTraits[profession] = missing;
      results.totalErrors += missing.length;
      results.hasErrors = true;
      
      console.error(`❌ Invalid traits in ${profession}:`);
      missing.forEach(err => {
        console.error(`  - ${err.invalid}`);
        if (err.suggestions) {
          console.error(`    ↳ Suggestions: ${err.suggestions.join(', ')}`);
        }
      });
    }
    
    results.professionsChecked++;
  });

  if (!results.hasErrors) {
    console.log('✅ All profession profiles are valid!');
  } else {
    console.log(`\nFound ${results.totalErrors} invalid trait references across ${Object.keys(results.missingTraits).length} professions`);
  }

  return results;
}

// Run validation
const validation = validateTraits(professionProfiles, allTraits);