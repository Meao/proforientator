const dimensions = {
  "Thinking Style": {
    "Analytical Processing": [
      "Analytical reasoning",
      "Logical reasoning",
      "Pattern recognition",
      "Mathematical skills"
    ],
    "Creative Processing": [
      "Creative thinking",
      "Abstract thinking",
      "Conceptual thinking"
    ],
    "Information Processing": [
      "Quick learning ability",
      "Memory retention",
      "Information processing speed",
      "Complex problem handling"
    ],
    "Focus & Attention": [
      "Attention to detail",
      "Big picture thinking",
      "Sustained concentration",
      "Multitasking capability"
    ]
  },
  "Social & Communication": {
    "Interpersonal Skills": [
      "Empathy and understanding",
      "Active listening skills",
      "Emotional intelligence",
      "Cultural adaptability"
    ],
    "Communication Abilities": [
      "Written communication strength",
      "Public speaking ability",
      "Persuasive abilities",
      "Presentation skills"
    ],
    "Collaboration Style": [
      "Team collaboration skills",
      "Conflict resolution ability",
      "Networking comfort"
    ],
    "Social Orientation": [
      "Extroverted energy",
      "Helping others drive",
      "Client-facing confidence",
      "Teaching and mentoring"
    ]
  },
  "Work Style & Environment": {
    "Structure Preferences": [
      "Thrives in structured environments",
      "Prefers routine tasks",
      "Focuses on processes",
      "Works systematically"
    ],
    "Independence & Autonomy": [
      "Autonomous work capability",
      "Self-directed work",
      "Independent judgment",
      "Decision-making confidence"
    ],
    "Adaptability": [
      "Variety and change comfort",
      "Schedule flexibility",
      "Task switching agility",
      "Adaptability to change"
    ],
    "Work Environment": [
      "Effective at remote work",
      "Comfortable in open offices",
      "Adaptable to travel",
      "Handles noisy environments"
    ]
  },
  "Professional Skills": {
    "Core Competencies": [
      "Organization and planning",
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
      "Customer service excellence",
      "Sales and persuasion",
      "Negotiation expertise",
      "Public relations"
    ]
  },
  "Personal Traits": {
    "Work Approach": [
      "Meticulous attention",
      "High standards maintenance",
      "Methodical approach",
      "Thoughtful planning"
    ],
    "Energy & Drive": [
      "Ambitious drive",
      "Achievement orientation",
      "Competitive motivation",
      "Deadline-driven performance"
    ],
    "Personality Style": [
      "Optimistic outlook",
      "Patience and persistence",
      "Calculated risk-taking"
    ],
    "Interpersonal Style": [
      "Assertive communication",
      "Diplomatic communication",
      "Collaborative spirit",
      "Reflective depth"
    ]
  },
  "Values & Motivations": {
    "Purpose & Impact": [
      "Service orientation",
      "Social impact drive",
      "Justice commitment",
      "Environmental stewardship"
    ],
    "Growth & Learning": [
      "Learning orientation",
      "Growth mindset",
      "Intellectual stimulation",
      "Educational passion"
    ],
    "Work-Life Values": [
      "Work-life integration",
      "Autonomy valuing",
      "Security consciousness",
      "Stability preference"
    ],
    "Achievement & Recognition": [
      "Financial motivation",
      "Recognition seeking",
      "Purpose-driven work",
      "Innovation passion"
    ]
  },
  "Physical & Practical": {
    "Physical Capabilities": [
      "Physical endurance",
      "Manual dexterity",
      "Fine motor coordination",
      "Mobility and movement"
    ],
    "Sensory Resilience": [
      "Visual acuity",
      "Auditory processing",
      "Environmental adaptability",
      "Light variation tolerance"
    ],
    "Work Conditions": [
      "Sedentary work comfort",
      "Physical activity integration",
      "Temperature adaptability",
      "Energy sustainability"
    ],
    "Specialized Abilities": [
      "Artistic and creative abilities",
      "Design and aesthetics",
      "Technical writing",
      "Crisis management"
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
