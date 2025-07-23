import { traitMappings } from './traitMappings.js';
import { professionProfiles } from './professionProfiles.js';
import { writeFileSync } from 'fs';

function migrateProfile(profile) {
  // Migrate core pattern
  const newCore = {};
  Object.entries(profile.corePattern).forEach(([trait, score]) => {
    newCore[traitMappings[trait] || trait] = score;
  });
  profile.corePattern = newCore;

  // Migrate synergies
  profile.synergies?.forEach(synergy => {
    synergy.traits = synergy.traits.map(trait => traitMappings[trait] || trait);
  });

  // Migrate anti-patterns
  profile.antiPatterns?.forEach(anti => {
    anti.traits = anti.traits.map(trait => traitMappings[trait] || trait);
  });

  return profile;
}

// Process all profiles
const migratedProfiles = {};
Object.entries(professionProfiles).forEach(([name, profile]) => {
  migratedProfiles[name] = migrateProfile(profile);
});

// Save to new file
writeFileSync(
  'migratedProfiles.js',
  `export const professionProfiles = ${JSON.stringify(migratedProfiles, null, 2)};`
);

console.log('Migration complete! Saved to migratedProfiles.js');