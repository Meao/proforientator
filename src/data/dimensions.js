const dimensions = {
  "Thinking Style": {
    "Analytical Skills": [
      "Logical thinking",
      "Pattern recognition",
      "Math skills"
    ],
    "Creativity": [
      "Creative thinking",
      "Abstract thinking"
    ],
    "Learning": [
      "Fast learner",
      "Good memory",
      "Problem solving"
    ],
    "Focus": [
      "Detail-oriented",
      "Big picture thinker",
      "Stays focused",
      "Multitasking"
    ]
  },
  "Social Skills": {
    "People Skills": [
      "Emotional intelligence",
      "Persuasion",
      "Cultural awareness"
    ],
    "Communication": [
      "Writing skills",
      "Public speaking",
      "Presentation skills"
    ],
    "Teamwork": [
      "Conflict resolution"
    ],
    "Social Energy": [
      "Helping others"
    ]
  },
  "Work Style": {
    "Structure": [
      "Likes routine",
      "Systematic"
    ],
    "Independence": [
      "Self-starter",
      "Self-directed",
      "Decisive"
    ],
    "Flexibility": [
      "Flexible schedule",
      "Switches tasks easily"
    ],
    "Environment": [
      "Works well remotely",
      "Travel tolerance",
      "Noise tolerance"
    ]
  },
  "Professional Skills": {
    "Core Skills": [
      "Time management",
      "Quality assurance"
    ],
    "Technical Skills": [
      "Technical proficiency",
      "Research and analysis",
      "Data analysis capability",
      "Documentation skills"
    ],
    "Leadership & Management": [
      "Leadership capability",
      "Project management",
      "Strategic thinking",
      "Training and development"
    ],
    "Customer & Sales": [
      "Sales and persuasion",
      "Negotiation",
      "Public relations"
    ]
  },
  "Personal Traits": {
    "Work Approach": [
      "Attention to detail"
    ],
    "Energy & Drive": [
      "Goal-driven",
      "Competitive",
      "Deadline-driven"
    ],
    "Personality Style": [
      "Optimistic",
      "Patience and persistence",
      "Calculated risk-taking"
    ],
    "Interpersonal Style": [
      "Assertive",
      "Diplomatic",
      "Collaborative",
      "Thoughtful"
    ]
  },
  "Values": {
    "Purpose": [
      "Social impact",
      "Justice commitment",
      "Environmental stewardship"
    ],
    "Growth & Learning": [
      "Loves learning"
    ],
    "Balance": [
      "Work-life balance",
      "Autonomy & independence",
      "Prefers stability"
    ],
    "Motivation": [
      "Money",
      "Recognition",
      "Purpose-driven"
    ]
  },
  "Physical": {
    "Body": [
      "Physical endurance",
      "Manual dexterity",
      "Mobility and movement",
      "Outdoor resilience"
    ],
    "Sensory Resilience": [
      "Good vision",
      "Good hearing",
      "Light variation tolerance",
      "Smell tolerance"
    ],
    "Work Conditions": [
      "Sitting work comfort",
      "Temperature adaptability",
      "Energy levels",
      "Handles interruptions",
      "Calm under pressure"
    ],
    "Special Abilities": [
      "Design and aesthetics",
      "Technical writing",
      "Handles crises"
    ]
  }
};

const categoryDescriptions = {
  "Thinking Style": "How you process information and approach problems",
  "Social & Communication": "How you interact with others and communicate",
  "Work Style & Environment": "Your preferred work settings and approaches",
  "Professional Skills": "Technical and professional capabilities",
  "Personal Traits": "Your personality and work characteristics",
  "Values & Motivations": "What drives and motivates you at work",
  "Physical & Practical": "Physical abilities and practical considerations"
};

// Extract ALL traits as a flat list (no categories)
function extractAllTraits(dimensionsData) {
  const traits = [];
  Object.values(dimensionsData).forEach(category => {
    Object.values(category).forEach(subCategory => {
      subCategory.forEach(trait => traits.push(trait));
    });
  });
  return traits;
}

const allTraits = extractAllTraits(dimensions);

export {
  dimensions,
  allTraits,
  categoryDescriptions
};
