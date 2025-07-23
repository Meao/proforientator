import { allTraits } from "./dimensions";

export const genericProfession = {
  name: "GENERIC TEST PROFILE",
  traitRanges: Object.fromEntries(allTraits.map(trait => [trait, [0, 9]]))
};

export const professionProfiles = {
  "Software Engineer": {
    corePattern: {
      "Analytical reasoning": [7, 10],
      "Logical reasoning": [7, 10],
      "Technical proficiency": [6, 10],
      "Complex problem handling": [6, 10],
      "Autonomous work capability": [5, 10]
    },
    synergies: [
      { traits: ["Creative thinking", "Abstract thinking"], bonus: 0.2 },
      { traits: ["Systematic execution", "Quality assurance"], bonus: 0.15 }
    ],
    antiPatterns: [
      { traits: ["Extroverted energy", "Public speaking ability"], penalty: 0.1 }
    ],
    environment: "Structured technical environment with problem-solving focus"
  },

  "UX/UI Designer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Abstract thinking": [6, 10],
      "Empathy and understanding": [6, 10],
      "Visual acuity": [5, 10],
      "Design and aesthetics": [7, 10]
    },
    synergies: [
      { traits: ["Innovative problem-solving", "Conceptual thinking"], bonus: 0.25 },
      { traits: ["User-centered focus", "Cultural adaptability"], bonus: 0.2 }
    ],
    antiPatterns: [
      { traits: ["Routine work satisfaction", "Process-focused approach"], penalty: 0.15 }
    ],
    environment: "Creative, collaborative spaces with user research components"
  },

  "Data Scientist": {
    corePattern: {
      "Analytical reasoning": [8, 10],
      "Mathematical skills": [7, 10],
      "Data analysis capability": [8, 10],
      "Research and analysis": [7, 10],
      "Pattern recognition": [7, 10]
    },
    synergies: [
      {traits: ["Complex problem handling", "Strategic thinking"], bonus: 0.3},
      {traits: ["Technical proficiency", "Documentation skills"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Public speaking ability"], penalty: 0.1}
    ],
    environment: "Research-driven settings with access to large datasets"
  },

  "Product Manager": {
    corePattern: {
      "Big picture thinking": [7, 10],
      "Strategic thinking": [7, 10],
      "Leadership capability": [6, 10],
      "Communication comfort": [6, 10],
      "Decision-making confidence": [6, 10]
    },
    synergies: [
      {traits: ["Systems thinking", "Project management"], bonus: 0.25},
      {traits: ["Persuasive abilities", "Networking comfort"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Detail orientation", "Technical proficiency"], penalty: 0.15}
    ],
    environment: "Cross-functional teams with strategic business focus"
  },

  "Clinical Psychologist": {
    corePattern: {
      "Empathy and understanding": [8, 10],
      "Active listening skills": [8, 10],
      "Emotional intelligence": [8, 10],
      "Patience and persistence": [7, 10],
      "Service orientation": [6, 10]
    },
    synergies: [
      {traits: ["Reflective depth", "Cultural adaptability"], bonus: 0.3},
      {traits: ["Teaching and mentoring", "Growth mindset"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Competitive motivation", "Financial motivation"], penalty: 0.2}
    ],
    environment: "Therapeutic settings requiring deep interpersonal connection"
  },

  "Financial Analyst": {
    corePattern: {
      "Analytical reasoning": [7, 10],
      "Mathematical skills": [7, 10],
      "Detail orientation": [7, 10],
      "Quality assurance": [6, 10],
      "Stability preference": [5, 10]
    },
    synergies: [
      {traits: ["Systematic execution", "Organization and planning"], bonus: 0.25},
      {traits: ["Risk assessment", "Strategic thinking"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Variety seeking"], penalty: 0.2}
    ],
    environment: "Structured financial environments with clear metrics"
  },

  "Marketing Director": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Communication comfort": [8, 10],
      "Strategic thinking": [7, 10],
      "Leadership capability": [6, 10],
      "Networking comfort": [6, 10]
    },
    synergies: [
      {traits: ["Innovative problem-solving", "Persuasive abilities"], bonus: 0.3},
      {traits: ["Cultural adaptability", "Public relations"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Technical proficiency", "Process-focused approach"], penalty: 0.15}
    ],
    environment: "Dynamic, creative environments with cross-team collaboration"
  },

  "Environmental Scientist": {
    corePattern: {
      "Analytical reasoning": [7, 10],
      "Research and analysis": [7, 10],
      "Environmental stewardship": [8, 10],
      "Physical endurance": [5, 10],
      "Adaptability to change": [6, 10]
    },
    synergies: [
      {traits: ["Systems thinking", "Complex problem handling"], bonus: 0.25},
      {traits: ["Learning orientation", "Intellectual stimulation"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Routine work satisfaction", "Structured environment thriving"], penalty: 0.15}
    ],
    environment: "Field research combined with laboratory analysis"
  },

  "Human Resources Manager": {
    corePattern: {
      "Interpersonal skills": [8, 10],
      "Communication comfort": [7, 10],
      "Emotional intelligence": [7, 10],
      "Conflict resolution ability": [6, 10],
      "Cultural adaptability": [6, 10]
    },
    synergies: [
      {traits: ["Active listening", "Diplomatic communication"], bonus: 0.3},
      {traits: ["Organizational development", "Training expertise"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Autonomous work preference", "Technical focus"], penalty: 0.2}
    ],
    environment: "People-centered organizations with diverse workforces"
  },

  "Emergency Room Physician": {
    corePattern: {
      "Analytical reasoning": [7, 10],
      "Quick learning ability": [8, 10],
      "Decision-making confidence": [8, 10],
      "Crisis management": [8, 10],
      "Physical endurance": [6, 10],
      "Adaptability to change": [7, 10]
    },
    synergies: [
      {traits: ["Pattern recognition", "Complex problem handling"], bonus: 0.35},
      {traits: ["Service orientation", "Team collaboration"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Routine preference", "Structured environment need"], penalty: 0.3}
    ],
    environment: "High-pressure medical settings with unpredictable caseloads"
  },

  "Architect": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Spatial reasoning": [8, 10],
      "Design and aesthetics": [8, 10],
      "Technical proficiency": [6, 10],
      "Project management": [5, 10]
    },
    synergies: [
      {traits: ["Innovative problem-solving", "Systems thinking"], bonus: 0.3},
      {traits: ["Detail orientation", "Quality assurance"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Routine work satisfaction", "Process-focused approach"], penalty: 0.2}
    ],
    environment: "Design studios with both creative and technical demands"
  },

  "Corporate Lawyer": {
    corePattern: {
      "Analytical reasoning": [8, 10],
      "Detail orientation": [8, 10],
      "Persuasive abilities": [7, 10],
      "Written communication strength": [7, 10],
      "Competitive motivation": [5, 10]
    },
    synergies: [
      {traits: ["Logical reasoning", "Complex problem handling"], bonus: 0.3},
      {traits: ["Negotiation expertise", "Risk assessment"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Variety seeking"], penalty: 0.25}
    ],
    environment: "High-stakes legal environments with complex cases"
  },

  "Elementary School Teacher": {
    corePattern: {
      "Teaching and mentoring": [8, 10],
      "Patience and persistence": [8, 10],
      "Communication comfort": [7, 10],
      "Service orientation": [7, 10],
      "Multitasking capability": [6, 10]
    },
    synergies: [
      {traits: ["Creative thinking", "Educational passion"], bonus: 0.3},
      {traits: ["Cultural adaptability", "Emotional intelligence"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Autonomous work preference", "Technical focus"], penalty: 0.2}
    ],
    environment: "Dynamic classroom settings with diverse learning needs"
  },

  "Research Scientist": {
    corePattern: {
      "Analytical reasoning": [8, 10],
      "Research and analysis": [8, 10],
      "Detail orientation": [7, 10],
      "Patience and persistence": [7, 10],
      "Intellectual stimulation": [7, 10]
    },
    synergies: [
      {traits: ["Complex problem handling", "Innovative thinking"], bonus: 0.3},
      {traits: ["Documentation skills", "Quality assurance"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Public speaking ability", "Sales orientation"], penalty: 0.25}
    ],
    environment: "Laboratory and academic settings with research focus"
  },

  "Construction Manager": {
    corePattern: {
      "Project management": [7, 10],
      "Leadership capability": [6, 10],
      "Decision-making confidence": [6, 10],
      "Physical endurance": [5, 10],
      "Quality assurance": [6, 10]
    },
    synergies: [
      {traits: ["Systems thinking", "Organization and planning"], bonus: 0.25},
      {traits: ["Risk assessment", "Crisis management"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Sedentary work preference", "Detail focus"], penalty: 0.15}
    ],
    environment: "Active construction sites with multiple moving parts"
  },

  "Graphic Designer": {
    corePattern: {
      "Creative thinking": [8, 10],
      "Design and aesthetics": [8, 10],
      "Artistic abilities": [7, 10],
      "Visual acuity": [6, 10],
      "Adaptability to change": [5, 10]
    },
    synergies: [
      {traits: ["Innovative problem-solving", "Conceptual thinking"], bonus: 0.3},
      {traits: ["Cultural adaptability", "Client-facing confidence"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Routine work satisfaction", "Process-focused approach"], penalty: 0.25}
    ],
    environment: "Creative studios with visual communication focus"
  },

  "Nonprofit Director": {
    corePattern: {
      "Leadership capability": [7, 10],
      "Communication comfort": [7, 10],
      "Service orientation": [8, 10],
      "Social impact drive": [8, 10],
      "Strategic thinking": [6, 10]
    },
    synergies: [
      {traits: ["Fundraising ability", "Public relations"], bonus: 0.3},
      {traits: ["Community building", "Cultural adaptability"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Financial motivation", "Competitive drive"], penalty: 0.2}
    ],
    environment: "Mission-driven organizations with diverse stakeholders"
  },

  "Cybersecurity Specialist": {
    corePattern: {
      "Analytical reasoning": [8, 10],
      "Technical proficiency": [8, 10],
      "Detail orientation": [7, 10],
      "Risk assessment": [7, 10],
      "Complex problem handling": [7, 10]
    },
    synergies: [
      {traits: ["Systems thinking", "Pattern recognition"], bonus: 0.35},
      {traits: ["Documentation skills", "Quality assurance"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Public speaking comfort", "Client-facing focus"], penalty: 0.15}
    ],
    environment: "Technical security operations with evolving threats"
  },

  "Executive Coach": {
    corePattern: {
      "Emotional intelligence": [8, 10],
      "Active listening skills": [8, 10],
      "Communication comfort": [7, 10],
      "Leadership insight": [7, 10],
      "Cultural adaptability": [6, 10]
    },
    synergies: [
      {traits: ["Reflective depth", "Growth mindset"], bonus: 0.3},
      {traits: ["Strategic thinking", "Organizational development"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Technical focus", "Detail orientation"], penalty: 0.2}
    ],
    environment: "One-on-one leadership development settings"
  },

  "Industrial Designer": {
    corePattern: {
      "Design and aesthetics": [7, 10],
      "Creative thinking": [7, 10],
      "Fine motor coordination": [7, 10],
      "Visual acuity": [6, 9],
      "Problem-solving expertise": [6, 9]
    },
    synergies: [
      { "traits": ["Abstract thinking", "Spatial reasoning"], "bonus": 0.3 },
      { "traits": ["Manual dexterity", "Artistic and creative abilities"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Prefers routine tasks", "Structured environments"], "penalty": 0.2 }
    ],
    environment: "Design studios, manufacturing plants, hands-on prototyping"
  },

  // Retail & Customer Service
   "Tattooer": {
    corePattern: {
      "Artistic and creative abilities": [8, 10],
      "Manual dexterity": [7, 10],
      "Attention to detail": [7, 10],
      "Client-facing confidence": [6, 9]
    },
    synergies: [
      {traits: ["Design and aesthetics", "Fine motor coordination"], bonus: 0.25},
      {traits: ["Cultural adaptability", "Empathy and understanding"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Routine work satisfaction", "Structured environment thriving"], penalty: 0.2}
    ],
    environment: "Creative studio environment with client interaction"
  },

  "Shop Assistant": {
    corePattern: {
      "Helping others drive": [6, 9],
      "Client-facing confidence": [6, 9],
      "Patience and persistence": [5, 8],
      "Adaptability to change": [5, 8]
    },
    synergies: [
      {traits: ["Empathy and understanding", "Active listening skills"], bonus: 0.2},
      {traits: ["Sales and persuasion", "Product knowledge"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Autonomous work capability", "Independent judgment"], penalty: 0.15}
    ],
    environment: "Customer-focused, social, varied daily tasks"
  },

  "Cashier": {
    corePattern: {
      "Attention to detail": [6, 9],
      "Mathematical skills": [4, 7],
      "Customer service excellence": [5, 8],
      "Routine work satisfaction": [5, 9]
    },
    synergies: [
      {traits: ["Systematic execution", "Process-focused approach"], bonus: 0.2},
      {traits: ["Patience and persistence", "Stress management"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Variety and change comfort"], penalty: 0.2}
    ],
    environment: "Fast-paced, repetitive, customer interaction"
  },

  // Administrative & Data
  "Data Entry Clerk": {
    corePattern: {
      "Attention to detail": [7, 10],
      "Focuses on processes": [6, 9],
      "Sustained concentration": [6, 9],
      "Prefers routine tasks": [6, 9]
    },
    synergies: [
      { "traits": ["Works systematically", "Quality assurance"], "bonus": 0.25 },
      { "traits": ["Time management", "Organization and planning"], "bonus": 0.2 }
    ],
    antiPatterns: [
      { "traits": ["Creative thinking", "Variety and change comfort"], "penalty": 0.25 }
    ],
    environment: "Quiet, focused, repetitive, computer-based"
  },

  "Secretary": {
    corePattern: {
      "Organization and planning": [6, 9],
      "Written communication strength": [6, 9],
      "Multitasking capability": [5, 9],
      "Attention to detail": [5, 8]
    },
    synergies: [
      { "traits": ["Time management", "Focuses on processes"], "bonus": 0.25 },
      { "traits": ["Diplomatic communication", "Cultural adaptability"], "bonus": 0.2 }
    ],
    antiPatterns: [
      { "traits": ["Independent judgment", "Self-directed work"], "penalty": 0.15 }
    ],
    environment: "Office-based, varied tasks, interpersonal interaction"
  },

  // Education & Training
  "Language Tutor": {
    corePattern: {
      "Teaching and mentoring": [7, 10],
      "Communication abilities": [7, 10],
      "Patience and persistence": [6, 9],
      "Cultural adaptability": [6, 9]
    },
    synergies: [
      {traits: ["Educational passion", "Learning orientation"], bonus: 0.25},
      {traits: ["Active listening skills", "Empathy and understanding"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.1}
    ],
    environment: "Educational, one-on-one or small groups, flexible"
  },

  "Programming Tutor": {
    corePattern: {
      "Technical proficiency": [7, 10],
      "Teaching and mentoring": [6, 9],
      "Complex problem handling": [6, 9],
      "Patience and persistence": [5, 8]
    },
    synergies: [
      {traits: ["Analytical reasoning", "Logical reasoning"], bonus: 0.3},
      {traits: ["Documentation skills", "Quality assurance"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Public speaking ability", "Extroverted energy"], penalty: 0.15}
    ],
    environment: "Educational, technical, problem-solving focused"
  },

  "Babysitter": {
    corePattern: {
      "Patience and persistence": [7, 10],
      "Empathy and understanding": [6, 9],
      "Energy sustainability": [5, 8],
      "Safety awareness": [7, 10]
    },
    synergies: [
      {traits: ["Creative thinking", "Teaching and mentoring"], bonus: 0.2},
      {traits: ["Active listening skills", "Emotional intelligence"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.1}
    ],
    environment: "Home-based, child-focused, varied activities"
  },

  // Counseling & Mental Health
  "Counselor": {
    corePattern: {
      "Empathy and understanding": [8, 10],
      "Active listening skills": [8, 10],
      "Emotional intelligence": [8, 10],
      "Patience and persistence": [7, 10]
    },
    synergies: [
      {traits: ["Reflective depth", "Cultural adaptability"], bonus: 0.3},
      {traits: ["Service orientation", "Helping others drive"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Competitive motivation", "Financial motivation"], penalty: 0.3}
    ],
    environment: "Supportive, confidential, emotionally demanding"
  },

  // Tech Specialized
  "Backend Programmer": {
    corePattern: {
      "Logical reasoning": [8, 10],
      "Technical proficiency": [8, 10],
      "Complex problem handling": [7, 10],
      "Systematic execution": [6, 9]
    },
    synergies: [
      { traits: ["Analytical reasoning", "Pattern recognition"], bonus: 0.35 },
      { traits: ["Documentation skills", "Quality assurance"], bonus: 0.25 }
    ],
    antiPatterns: [
      { traits: ["Public speaking ability", "Client-facing confidence"], penalty: 0.15 }
    ],
    environment: "Technical, logic-focused, system architecture"
  },

  "Frontend Programmer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Technical proficiency": [7, 10],
      "Attention to detail": [6, 9],
      "Design and aesthetics": [5, 8]
    },
    synergies: [
      {traits: ["User empathy", "Client-facing confidence"], bonus: 0.3},
      {traits: ["Innovative problem-solving", "Conceptual thinking"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Routine work satisfaction", "Process-focused approach"], penalty: 0.2}
    ],
    environment: "Visual, user-focused, creative-technical hybrid"
  },

  "QA Specialist": {
    corePattern: {
      "Attention to detail": [8, 10],
      "Analytical reasoning": [6, 9],
      "Patience and persistence": [6, 9],
      "Quality assurance": [7, 10]
    },
    synergies: [
      {traits: ["Systematic execution", "Process-focused approach"], bonus: 0.3},
      {traits: ["Documentation skills", "Technical writing"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Variety seeking"], penalty: 0.25}
    ],
    environment: "Detail-oriented, process-driven, quality-focused"
  },

  "Manual Tester": {
    corePattern: {
      "Attention to detail": [7, 10],
      "Analytical reasoning": [6, 9],
      "Effective at remote work": [6, 9],
      "Documentation skills": [5, 8]
    },
    synergies: [
      { "traits": ["Written communication strength", "Focuses on processes"], "bonus": 0.25 },
      { "traits": ["Time management", "Works systematically"], "bonus": 0.2 }
    ],
    antiPatterns: [
      { "traits": ["Creative thinking", "Variety and change comfort"], "penalty": 0.2 }
    ],
    environment: "Detail-oriented, process-driven, quality-focused"
  },

  "Prompt Engineer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Analytical reasoning": [6, 9],
      "Technical proficiency": [5, 8],
      "Written communication strength": [6, 9]
    },
    synergies: [
      { "traits": ["Conceptual thinking", "Innovative problem-solving"], "bonus": 0.3 },
      { "traits": ["Learning orientation", "Intellectual stimulation"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Prefers routine tasks", "Thrives in structured environments"], "penalty": 0.2 }
    ],
    environment: "Emerging field, experimental, AI-focused"
  },

  // Business & Analysis
  "Business Analyst": {
    corePattern: {
      "Analytical reasoning": [7, 10],
      "Communication abilities": [6, 9],
      "Problem-solving expertise": [6, 9],
      "Strategic thinking": [5, 8]
    },
    synergies: [
      {traits: ["Systems thinking", "Big picture thinking"], bonus: 0.3},
      {traits: ["Presentation skills", "Persuasive abilities"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.1}
    ],
    environment: "Business-focused, analytical, communication-heavy"
  },

  "Systems Analyst": {
    corePattern: {
      "Analytical reasoning": [7, 10],
      "Technical proficiency": [6, 9],
      "Complex problem handling": [6, 9],
      "Systems thinking": [6, 9]
    },
    synergies: [
      {traits: ["Strategic thinking", "Big picture thinking"], bonus: 0.3},
      {traits: ["Documentation skills", "Quality assurance"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Variety seeking"], penalty: 0.2}
    ],
    environment: "Technical, systems-focused, analytical"
  },

  // Sales & Marketing
  "Sales Manager": {
    corePattern: {
      "Leadership inclination": [7, 10],
      "Persuasive abilities": [7, 10],
      "Competitive motivation": [6, 9],
      "Client-facing confidence": [7, 10]
    },
    synergies: [
      {traits: ["Networking comfort", "Extroverted energy"], bonus: 0.3},
      {traits: ["Strategic thinking", "Achievement orientation"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.1}
    ],
    environment: "Leadership, results-driven, people-focused"
  },

  "Telemarketer": {
    corePattern: {
      "Sales and persuasion": [6, 9],
      "Patience and persistence": [6, 9],
      "Client-facing confidence": [5, 8],
      "Extroverted energy": [5, 8]
    },
    synergies: [
      {traits: ["Active listening skills", "Communication abilities"], bonus: 0.2},
      {traits: ["Sales and persuasion", "Presentation skills"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.1}
    ],
    environment: "Phone-based, sales-focused, high rejection rate"
  },

  // Tourism & Hospitality
  "Tourist Guide": {
    corePattern: {
      "Public speaking ability": [7, 10],
      "Cultural adaptability": [6, 9],
      "Extroverted energy": [6, 9],
      "Teaching and mentoring": [5, 8]
    },
    synergies: [
      {traits: ["Active listening skills", "Empathy and understanding"], bonus: 0.25},
      {traits: ["Presentation skills", "Client-facing confidence"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.1}
    ],
    environment: "Outdoor, social, educational, cultural"
  },

  // Finance
  "Financial Advisor": {
    corePattern: {
      "Analytical reasoning": [7, 10],
      "Sales and persuasion": [6, 9],
      "Strategic thinking": [6, 9],
      "Client-facing confidence": [6, 9]
    },
    synergies: [
      {traits: ["Active listening skills", "Empathy and understanding"], bonus: 0.3},
      {traits: ["Sales and persuasion", "Presentation skills"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Variety seeking"], penalty: 0.2}
    ],
    environment: "Advisory, analytical, relationship-based"
  },

  // Agile & Coaching
  "Agile Coach": {
    corePattern: {
      "Teaching and mentoring": [7, 10],
      "Leadership inclination": [6, 9],
      "Sales and persuasion": [7, 10],
      "Collaborative spirit": [7, 10]
    },
    synergies: [
      {traits: ["Active listening skills", "Conflict resolution ability"], bonus: 0.3},
      {traits: ["Strategic thinking", "Big picture thinking"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.2}
    ],
    environment: "Team-focused, change-oriented, coaching"
  },

  // Creative & Design
  "3D Designer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Design and aesthetics": [7, 10],
      "Technical proficiency": [6, 9],
      "Attention to detail": [6, 9]
    },
    synergies: [
      { traits: ["Innovative problem-solving", "Conceptual thinking"], bonus: 0.3 },
      { traits: ["Visual acuity", "Environmental adaptability"], bonus: 0.2 }
    ],
    antiPatterns: [
      { traits: ["Routine work satisfaction", "Process-focused approach"], penalty: 0.25 }
    ],
    environment: "Creative, technical, visual-focused"
  },

  // Writing & Translation
  "Technical Writer": {
    corePattern: {
      "Written communication strength": [8, 10],
      "Technical proficiency": [6, 9],
      "Attention to detail": [7, 10],
      "Documentation skills": [7, 10]
    },
    synergies: [
      {traits: ["Analytical reasoning", "Complex problem handling"], bonus: 0.3},
      {traits: ["Quality assurance", "Systematic execution"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Variety seeking"], penalty: 0.2}
    ],
    environment: "Writing-focused, technical, documentation"
  },

  "Translator": {
    corePattern: {
      "Written communication strength": [8, 10],
      "Cultural adaptability": [7, 10],
      "Attention to detail": [7, 10],
      "Learning orientation": [6, 9]
    },
    synergies: [
      {traits: ["Active listening skills", "Empathy and understanding"], bonus: 0.25},
      {traits: ["Memory retention", "Information processing speed"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.1}
    ],
    environment: "Language-focused, cultural, accuracy-critical"
  },

  "Localization Manager": {
    corePattern: {
      "Project management": [7, 10],
      "Cultural adaptability": [7, 10],
      "Communication abilities": [6, 9],
      "Team collaboration skills": [5, 8]
    },
    synergies: [
      { "traits": ["Strategic thinking", "Big picture thinking"], "bonus": 0.3 },
      { "traits": ["Conflict resolution ability", "Collaborative spirit"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Autonomous work capability", "Self-directed work"], "penalty": 0.1 }
    ],
    environment: "International, project-based, cultural coordination"
  },

  "Translation Quality Specialist": {
    corePattern: {
      "Attention to detail": [8, 10],
      "Analytical reasoning": [7, 10],
      "Focuses on processes": [7, 10],
      "Cultural adaptability": [6, 9]
    },
    synergies: [
      { "traits": ["Works systematically", "Focuses on processes"], "bonus": 0.3 },
      { "traits": ["Documentation skills", "Written communication strength"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Creative spontaneity", "Variety and change comfort"], "penalty": 0.25 }
    ],
    environment: "Quality-focused, linguistic, accuracy-critical"
  },

  "Diplomas Writer": {
    corePattern: {
      "Written communication strength": [8, 10],
      "Research and analysis": [7, 10],
      "Analytical reasoning": [7, 10],
      "Attention to detail": [7, 10]
    },
    synergies: [
      {traits: ["Complex problem handling", "Critical thinking"], bonus: 0.3},
      {traits: ["Documentation skills", "Quality assurance"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Variety seeking"], penalty: 0.2}
    ],
    environment: "Academic, research-focused, writing-intensive"
  },

  // Support & Implementation
  "Software Implementation Specialist": {
    corePattern: {
      "Technical proficiency": [7, 10],
      "Problem-solving expertise": [6, 9],
      "Communication abilities": [6, 9],
      "Client-facing confidence": [5, 8]
    },
    synergies: [
      {traits: ["Teaching and mentoring", "Active listening skills"], bonus: 0.3},
      {traits: ["Quality assurance", "Systematic execution"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.1}
    ],
    environment: "Client-facing, technical, implementation-focused"
  },

"Software Support Specialist": {
  corePattern: {
    "Technical proficiency": [6, 9],
    "Active listening skills": [6, 9],
    "Patience and persistence": [6, 9],
    "Client-facing confidence": [5, 8]
  },
  synergies: [
    { "traits": ["Empathy and understanding", "Cultural adaptability"], "bonus": 0.3 },
    { "traits": ["Documentation skills", "Focuses on processes"], "bonus": 0.25 }
  ],
  antiPatterns: [
    { "traits": ["Autonomous work capability", "Independent judgment"], "penalty": 0.1 }
  ],
  environment: "Support-focused, problem-solving, customer service"
},

  // Research
  "Researcher": {
    corePattern: {
      "Analytical reasoning": [8, 10],
      "Research and analysis": [8, 10],
      "Attention to detail": [7, 10],
      "Patience and persistence": [7, 10]
    },
    synergies: [
      {traits: ["Complex problem handling", "Critical thinking"], bonus: 0.35},
      {traits: ["Documentation skills", "Quality assurance"], bonus: 0.3}
    ],
    antiPatterns: [
      {traits: ["Creative spontaneity", "Variety seeking"], penalty: 0.25}
    ],
    environment: "Academic, analytical, detail-oriented"
  },

  // Transportation
  "Taxi Driver": {
    corePattern: {
      "Client-facing confidence": [6, 9],
      "Adaptability to change": [6, 9],
      "Conflict resolution ability": [5, 8],
      "Patience and persistence": [5, 8]
    },
    synergies: [
      {traits: ["Active listening skills", "Cultural adaptability"], bonus: 0.2},
      {traits: ["Patience and persistence", "Service orientation"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Autonomous work capability"], penalty: 0.1}
    ],
    environment: "Driving-based, customer interaction, flexible hours"
  },

  // Entrepreneurship
  "Vending Machine Owner": {
    corePattern: {
      "Strategic thinking": [5, 8],
      "Research and analysis": [4, 8],
      "Technical proficiency": [3, 7],
      "Financial motivation": [4, 8]
    },
    synergies: [
      { traits: ["Problem-solving expertise", "Decision-making confidence"], bonus: 0.2 },
      { traits: ["Quality assurance", "Systematic execution"], bonus: 0.15 }
    ],
    antiPatterns: [
      { traits: ["Creative spontaneity", "Variety seeking"], penalty: 0.2 }
    ],
    environment: "Entrepreneurial, location-dependent, maintenance-required"
  },

  // Additional Roles
  "Content Creator": {
    corePattern: {
      "Creative thinking": [6, 9],
      "Communication abilities": [5, 9],
      "Presentation skills": [5, 8],
      "Achievement orientation": [4, 8]
    },
    synergies: [
      {traits: ["Client-facing confidence", "Cultural adaptability"], bonus: 0.2},
      {traits: ["Artistic and creative abilities", "Design and aesthetics"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Routine work satisfaction", "Process-focused approach"], penalty: 0.2}
    ],
    environment: "Creative, digital, audience-focused"
  },

  "Virtual Assistant": {
    corePattern: {
      "Organization and planning": [5, 9],
      "Communication abilities": [5, 9],
      "Technical proficiency": [4, 8],
      "Multitasking capability": [5, 9]
    },
    synergies: [
      {traits: ["Time management", "Attention to detail"], bonus: 0.2},
      {traits: ["Quality assurance", "Systematic execution"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Independent judgment", "Creative spontaneity"], penalty: 0.2}
    ],
    environment: "Remote, varied tasks, client-focused"
  },

  "Event Coordinator": {
    corePattern: {
      "Organization and planning": [6, 9],
      "Networking comfort": [6, 9],
      "Multitasking capability": [5, 9],
      "Adaptability to change": [5, 9]
    },
    synergies: [
      { "traits": ["Creative thinking", "Team collaboration skills"], "bonus": 0.2 },
      { "traits": ["Leadership capability", "Project management"], "bonus": 0.15 }
    ],
    antiPatterns: [
      { "traits": ["Autonomous work capability", "Independent judgment"], "penalty": 0.3 }
    ],
    environment: "Event-focused, high-pressure, coordination-heavy"
  },

  "Social Media Manager": {
    corePattern: {
      "Creative thinking": [6, 9],
      "Communication abilities": [6, 9],
      "Artistic and creative abilities": [5, 8],
      "Data analysis capability": [4, 8]
    },
    synergies: [
      {traits: ["Cultural adaptability", "Client-facing confidence"], bonus: 0.2},
      {traits: ["Design and aesthetics", "Presentation skills"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Technical proficiency", "Process-focused approach"], penalty: 0.2}
    ],
    environment: "Digital, creative, community-focused"
  },

  "Remote Software Engineer": {
    corePattern: {
      "Analytical reasoning": [7, 10],
      "Logical reasoning": [7, 10],
      "Technical proficiency": [6, 10],
      "Remote work effectiveness": [8, 10],
      "Autonomous work capability": [7, 10]
    },
    synergies: [
      {traits: ["Creative thinking", "Abstract thinking"], bonus: 0.2},
      {traits: ["Systematic execution", "Time management"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Open office comfort", "Extroverted energy"], penalty: 0.15}
    ],
    environment: "Fully remote technical environment requiring self-direction"
  },

  "Open Office UX Designer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Design and aesthetics": [7, 10],
      "Open office comfort": [6, 9],
      "Noise resilience": [5, 8],
      "Collaborative spirit": [6, 9]
    },
    synergies: [
      {traits: ["Client-facing confidence", "Cultural adaptability"], bonus: 0.25},
      {traits: ["Visual acuity", "Environmental adaptability"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Remote work effectiveness", "Structured environment thriving"], penalty: 0.2}
    ],
    environment: "Collaborative open office with frequent team interactions"
  },

  "Management Consultant": {
    corePattern: {
      "Strategic thinking": [8, 10],
      "Travel adaptability": [7, 10],
      "Assertive communication": [7, 10],
      "Work-life integration": [3, 6],
      "Recognition seeking": [6, 9]
    },
    synergies: [
      {traits: ["Problem-solving expertise", "Big picture thinking"], bonus: 0.3},
      {traits: ["Presentation skills", "Client-facing confidence"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Routine work satisfaction", "Security consciousness"], penalty: 0.3}
    ],
    environment: "High-travel advisory role with demanding schedule"
  },

  "Hospital Nurse": {
    corePattern: {
      "Empathy and understanding": [8, 10],
      "Physical endurance": [7, 10],
      "Temperature adaptability": [6, 9],
      "Service orientation": [7, 10],
      "Work-life integration": [4, 7]
    },
    synergies: [
      {traits: ["Active listening skills", "Emotional intelligence"], bonus: 0.3},
      {traits: ["Patience and persistence", "Crisis management"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Sedentary work comfort", "Remote work effectiveness"], penalty: 0.25}
    ],
    environment: "Fast-paced hospital setting with shift work"
  },

  "Online Teacher": {
    corePattern: {
      "Teaching and mentoring": [8, 10],
      "Remote work effectiveness": [7, 10],
      "Auditory processing": [6, 9],
      "Educational passion": [7, 10],
      "Autonomy valuing": [6, 9]
    },
    synergies: [
      {traits: ["Presentation skills", "Technical proficiency"], bonus: 0.25},
      {traits: ["Light variation tolerance", "Adaptability to change"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Open office comfort", "Physical activity integration"], penalty: 0.2}
    ],
    environment: "Virtual classroom with flexible scheduling"
  },

  "Government Analyst": {
    corePattern: {
      "Analytical reasoning": [7, 10],
      "Security consciousness": [8, 10],
      "Stability preference": [7, 10],
      "Reflective depth": [6, 9]
    },
    synergies: [
      { "traits": ["Attention to detail", "Focuses on processes"], "bonus": 0.3 },
      { "traits": ["Documentation skills", "Works systematically"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Creative spontaneity", "Variety seeking"], "penalty": 0.3 }
    ],
    environment: "Stable government office with structured processes"
  },

  "Commission Sales Agent": {
    corePattern: {
      "Sales and persuasion": [8, 10],
      "Financial motivation": [9, 10],
      "Recognition seeking": [8, 10],
      "Client-facing confidence": [7, 10]
    },
    synergies: [
      { "traits": ["Extroverted energy", "Networking comfort"], "bonus": 0.3 },
      { "traits": ["Competitive motivation", "Achievement orientation"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Security consciousness", "Stability preference"], "penalty": 0.3 }
    ],
    environment: "Performance-based sales with variable income"
  },

  "Laboratory Researcher": {
    corePattern: {
      "Research and analysis": [8, 10],
      "Attention to detail": [8, 10],
      "Sedentary work comfort": [7, 10],
      "Light variation tolerance": [6, 9],
      "Purpose-driven work": [6, 9]
    },
    synergies: [
      {traits: ["Analytical reasoning", "Complex problem handling"], bonus: 0.35},
      {traits: ["Patience and persistence", "Quality assurance"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Physical activity integration", "Extroverted energy"], penalty: 0.25}
    ],
    environment: "Controlled laboratory setting with precise measurements"
  },

    "Risk Analyst": {
    corePattern: {
      "Analytical reasoning": [8, 10],
      "Logical reasoning": [7, 10],
      "Pattern recognition": [7, 10],
      "Complex problem handling": [7, 10]
    },
    synergies: [
      { "traits": ["Mathematical skills", "Stability preference"], "bonus": 0.3 },
      { "traits": ["Systematic execution", "Attention to detail"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Creative spontaneity", "Variety seeking"], "penalty": 0.2 }
    ],
    environment: "Data-driven, risk-focused, financial institutions"
  },

  "Corporate Trainer": {
    corePattern: {
      "Presentation skills": [7, 10],
      "Teaching and mentoring": [7, 10],
      "Active listening skills": [6, 9],
      "Empathy and understanding": [6, 9],
      "Assertive communication": [6, 9]
    },
    synergies: [
      { "traits": ["Diplomatic communication", "Team collaboration skills"], "bonus": 0.3 },
      { "traits": ["Training and development", "Learning orientation"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Autonomous work capability", "Independent judgment"], "penalty": 0.2 }
    ],
    environment: "Workshops, corporate settings, team-based learning"
  },

  "Policy Advisor": {
    corePattern: {
      "Research and analysis": [8, 10],
      "Strategic thinking": [7, 10],
      "Service orientation": [7, 10],
      "Written communication strength": [7, 10],
      "Big picture thinking": [6, 9]
    },
    synergies: [
      { "traits": ["Social impact drive", "Justice commitment"], "bonus": 0.3 },
      { "traits": ["Reflective depth", "Information processing speed"], "bonus": 0.2 }
    ],
    antiPatterns: [
      { "traits": ["Creative spontaneity", "Variety and change comfort"], "penalty": 0.2 }
    ],
    environment: "Government offices, policy think tanks, structured environment"
  },

  "Emergency Response Coordinator": {
    corePattern: {
      "Crisis management": [8, 10],
      "Decision-making confidence": [8, 10],
      "Adaptability to change": [7, 10],
      "Team collaboration skills": [7, 10],
      "Multitasking capability": [6, 9]
    },
    synergies: [
      { "traits": ["Leadership capability", "Conflict resolution ability"], "bonus": 0.3 },
      { "traits": ["Stress management", "Physical endurance"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Prefers routine tasks", "Works systematically"], "penalty": 0.3 }
    ],
    environment: "High-pressure crisis centers with unpredictable demands"
  },

  "Sustainability Consultant": {
    corePattern: {
      "Environmental stewardship": [8, 10],
      "Strategic thinking": [7, 10],
      "Research and analysis": [7, 10],
      "Cultural adaptability": [6, 9],
      "Networking comfort": [6, 9]
    },
    synergies: [
      { "traits": ["Conceptual thinking", "Innovation passion"], "bonus": 0.3 },
      { "traits": ["Collaborative spirit", "Service orientation"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Routine work satisfaction", "Remote work effectiveness"], "penalty": 0.2 }
    ],
    environment: "Client-facing, environmental organizations, hybrid work"
  },

  "Air Traffic Controller": {
    corePattern: {
      "Attention to detail": [8, 10],
      "Sustained concentration": [8, 10],
      "Quick learning ability": [7, 10],
      "Auditory processing": [7, 10],
      "Stress management": [7, 10]
    },
    synergies: [
      { "traits": ["Decision-making confidence", "Team collaboration skills"], "bonus": 0.35 },
      { "traits": ["Task switching agility", "Adaptability to change"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Extroverted energy", "Social interaction focus"], "penalty": 0.2 }
    ],
    environment: "High-stakes control tower with intense monitoring duties"
  },

  "Business Development Executive": {
    corePattern: {
      "Sales and persuasion": [8, 10],
      "Negotiation expertise": [7, 10],
      "Networking comfort": [7, 10],
      "Competitive motivation": [7, 10],
      "Financial motivation": [6, 9]
    },
    synergies: [
      { "traits": ["Confident public speaking", "Presentation skills"], "bonus": 0.3 },
      { "traits": ["Strategic thinking", "Growth mindset"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Security consciousness", "Prefers routine tasks"], "penalty": 0.25 }
    ],
    environment: "Fast-paced, client-driven, target-oriented"
  },

  "Lab Technician": {
    corePattern: {
      "Attention to detail": [8, 10],
      "Quality assurance": [7, 10],
      "Precision manual dexterity": [7, 10],
      "Memory retention": [6, 9],
      "Systematic execution": [6, 9]
    },
    synergies: [
      { "traits": ["Scientific method application", "Pattern recognition"], "bonus": 0.3 },
      { "traits": ["Team collaboration skills", "Documentation skills"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Creative spontaneity", "Variety seeking"], "penalty": 0.2 }
    ],
    environment: "Laboratory setting with repetitive but precise procedures"
  },

  "AI Ethics Officer": {
    corePattern: {
      "Ethical reasoning": [8, 10],
      "Critical thinking": [7, 10],
      "Justice commitment": [7, 10],
      "Research and analysis": [7, 10],
      "Intellectual stimulation": [6, 9]
    },
    synergies: [
      { "traits": ["Strategic thinking", "Social impact drive"], "bonus": 0.3 },
      { "traits": ["Policy writing", "Diplomatic communication"], "bonus": 0.25 }
    ],
    antiPatterns: [
      { "traits": ["Financial motivation", "Competitive drive"], "penalty": 0.2 }
    ],
    environment: "Tech companies, research labs, ethics committees"
  }
};