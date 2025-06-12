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
      {traits: ["Creative thinking", "Abstract thinking"], bonus: 0.2},
      {traits: ["Systematic execution", "Quality assurance"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Extroverted energy", "Public speaking ability"], penalty: 0.1}
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
      {traits: ["Innovative problem-solving", "Conceptual thinking"], bonus: 0.25},
      {traits: ["User-centered focus", "Cultural adaptability"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Routine work satisfaction", "Process-focused approach"], penalty: 0.15}
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
      "Creative thinking": [7, 10],
      "Systems thinking": [6, 10],
      "Design and aesthetics": [7, 10],
      "Technical proficiency": [6, 10],
      "Problem-solving expertise": [6, 10]
    },
    synergies: [
      {traits: ["Innovative problem-solving", "Conceptual thinking"], bonus: 0.3},
      {traits: ["User-centered focus", "Functional design sense"], bonus: 0.25}
    ],
    antiPatterns: [
      {traits: ["Routine work satisfaction", "Process-focused approach"], penalty: 0.2}
    ],
    environment: "Product development teams blending form and function"
  },

  // Retail & Customer Service
  "Shop Assistant": {
    corePattern: {
      "Helping others drive": [4, 9],
      "Communication comfort": [4, 8],
      "Patience": [4, 8],
      "Adaptability": [3, 8]
    },
    synergies: [
      {traits: ["Empathy", "Active listening"], bonus: 0.2},
      {traits: ["Product knowledge", "Sales skills"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Introversion", "Conflict avoidance"], penalty: 0.1}
    ],
    environment: "Customer-focused, social, varied daily tasks"
  },

  "Cashier": {
    corePattern: {
      "Attention to detail": [5, 9],
      "Math skills": [3, 7],
      "Customer service": [3, 8],
      "Routine tolerance": [4, 9]
    },
    synergies: [
      {traits: ["Speed", "Accuracy"], bonus: 0.2},
      {traits: ["Patience", "Stress management"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Creativity need", "Variety seeking"], penalty: 0.15}
    ],
    environment: "Fast-paced, repetitive, customer interaction"
  },

  // Administrative & Data
  "Data Entry": {
    corePattern: {
      "Attention to detail": [6, 9],
      "Typing speed": [5, 9],
      "Concentration": [5, 9],
      "Routine tolerance": [5, 9]
    },
    synergies: [
      {traits: ["Accuracy", "Speed"], bonus: 0.25},
      {traits: ["Organization", "Systematic approach"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Social interaction need", "Creativity need"], penalty: 0.2}
    ],
    environment: "Quiet, focused, repetitive, computer-based"
  },

  "Secretary": {
    corePattern: {
      "Organization": [5, 9],
      "Communication skills": [4, 8],
      "Multitasking": [4, 8],
      "Attention to detail": [4, 8]
    },
    synergies: [
      {traits: ["Time management", "Prioritization"], bonus: 0.2},
      {traits: ["Interpersonal skills", "Diplomacy"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Disorganization", "Poor communication"], penalty: 0.2}
    ],
    environment: "Office-based, varied tasks, interpersonal interaction"
  },

  // Education & Training
  "Language Tutor": {
    corePattern: {
      "Teaching ability": [5, 9],
      "Language skills": [6, 9],
      "Patience": [5, 9],
      "Communication skills": [5, 9]
    },
    synergies: [
      {traits: ["Cultural awareness", "Empathy"], bonus: 0.2},
      {traits: ["Adaptability", "Creativity"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Impatience", "Poor listening"], penalty: 0.2}
    ],
    environment: "Educational, one-on-one or small groups, flexible"
  },

  "Programming Tutor": {
    corePattern: {
      "Technical knowledge": [6, 9],
      "Teaching ability": [5, 9],
      "Problem-solving": [5, 9],
      "Patience": [5, 8]
    },
    synergies: [
      {traits: ["Analytical thinking", "Communication"], bonus: 0.2},
      {traits: ["Mentoring", "Technical writing"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Impatience", "Poor explanation skills"], penalty: 0.2}
    ],
    environment: "Educational, technical, problem-solving focused"
  },

  "Babysitter": {
    corePattern: {
      "Patience": [6, 9],
      "Responsibility": [6, 9],
      "Energy level": [4, 8],
      "Safety awareness": [7, 9]
    },
    synergies: [
      {traits: ["Creativity", "Playfulness"], bonus: 0.2},
      {traits: ["Communication", "Problem-solving"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Impatience", "Irresponsibility"], penalty: 0.3}
    ],
    environment: "Home-based, child-focused, varied activities"
  },

  // Counseling & Mental Health
  "Counselor": {
    corePattern: {
      "Empathy": [6, 9],
      "Active listening": [6, 9],
      "Emotional intelligence": [6, 9],
      "Patience": [6, 9]
    },
    synergies: [
      {traits: ["Psychology knowledge", "Communication skills"], bonus: 0.25},
      {traits: ["Non-judgmental attitude", "Problem-solving"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Judgmental attitude", "Emotional instability"], penalty: 0.3}
    ],
    environment: "Supportive, confidential, emotionally demanding"
  },

  // Tech Specialized
  "Backend Programmer": {
    corePattern: {
      "Logical thinking": [6, 9],
      "Systems architecture": [5, 9],
      "Database knowledge": [5, 9],
      "Problem-solving": [5, 9]
    },
    synergies: [
      {traits: ["Analytical reasoning", "Detail orientation"], bonus: 0.2},
      {traits: ["Performance optimization", "Security awareness"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["UI/UX focus", "Visual design"], penalty: 0.1}
    ],
    environment: "Technical, logic-focused, system architecture"
  },

  "Frontend Programmer": {
    corePattern: {
      "Visual design sense": [4, 8],
      "User experience focus": [5, 9],
      "Technical skills": [5, 9],
      "Creativity": [4, 8]
    },
    synergies: [
      {traits: ["Aesthetic sense", "User empathy"], bonus: 0.2},
      {traits: ["Problem-solving", "Detail orientation"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Backend focus only", "Poor visual sense"], penalty: 0.15}
    ],
    environment: "Visual, user-focused, creative-technical hybrid"
  },

  "QA Specialist": {
    corePattern: {
      "Attention to detail": [7, 9],
      "Analytical thinking": [5, 9],
      "Persistence": [5, 9],
      "Communication skills": [4, 8]
    },
    synergies: [
      {traits: ["Critical thinking", "Documentation"], bonus: 0.2},
      {traits: ["Process orientation", "Problem identification"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Impatience", "Poor documentation"], penalty: 0.2}
    ],
    environment: "Detail-oriented, process-driven, quality-focused"
  },

  "Manual Tester": {
    corePattern: {
      "Attention to detail": [6, 9],
      "Patience": [5, 9],
      "Following procedures": [5, 9],
      "Documentation": [4, 8]
    },
    synergies: [
      {traits: ["Systematic approach", "Persistence"], bonus: 0.2},
      {traits: ["Bug reporting", "Process adherence"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Impatience", "Procedure avoidance"], penalty: 0.2}
    ],
    environment: "Structured, procedural, detail-focused"
  },

  "Prompt Engineer": {
    corePattern: {
      "Language skills": [6, 9],
      "Analytical thinking": [5, 9],
      "Creativity": [5, 8],
      "Technical understanding": [4, 8]
    },
    synergies: [
      {traits: ["AI knowledge", "Experimentation"], bonus: 0.25},
      {traits: ["Problem-solving", "Communication"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor language skills", "Lack of curiosity"], penalty: 0.2}
    ],
    environment: "Emerging field, experimental, AI-focused"
  },

  // Business & Analysis
  "Business Analyst": {
    corePattern: {
      "Analytical thinking": [5, 9],
      "Communication skills": [5, 9],
      "Problem-solving": [5, 9],
      "Documentation": [4, 8]
    },
    synergies: [
      {traits: ["Requirements gathering", "Stakeholder management"], bonus: 0.2},
      {traits: ["Process mapping", "Critical thinking"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor communication", "Lack of analysis"], penalty: 0.2}
    ],
    environment: "Business-focused, analytical, communication-heavy"
  },

  "Systems Analyst": {
    corePattern: {
      "Systems thinking": [6, 9],
      "Technical knowledge": [5, 9],
      "Problem-solving": [5, 9],
      "Documentation": [5, 8]
    },
    synergies: [
      {traits: ["Analytical reasoning", "Process optimization"], bonus: 0.2},
      {traits: ["Technical communication", "Requirements analysis"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor technical skills", "Lack of systems view"], penalty: 0.2}
    ],
    environment: "Technical, systems-focused, analytical"
  },

  // Sales & Marketing
  "Sales Manager": {
    corePattern: {
      "Leadership": [5, 9],
      "Communication skills": [6, 9],
      "Motivation": [5, 9],
      "Results orientation": [5, 9]
    },
    synergies: [
      {traits: ["Persuasion", "Team building"], bonus: 0.2},
      {traits: ["Strategic thinking", "Customer focus"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Introversion", "Conflict avoidance"], penalty: 0.2}
    ],
    environment: "Leadership, results-driven, people-focused"
  },

  "Telemarketer": {
    corePattern: {
      "Communication skills": [5, 9],
      "Persistence": [6, 9],
      "Rejection resilience": [6, 9],
      "Persuasion": [4, 8]
    },
    synergies: [
      {traits: ["Sales skills", "Product knowledge"], bonus: 0.2},
      {traits: ["Voice quality", "Enthusiasm"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Sensitivity to rejection", "Poor communication"], penalty: 0.3}
    ],
    environment: "Phone-based, sales-focused, high rejection rate"
  },

  // Tourism & Hospitality
  "Tourist Guide": {
    corePattern: {
      "Communication skills": [6, 9],
      "Cultural knowledge": [5, 9],
      "Public speaking": [5, 9],
      "Energy level": [5, 8]
    },
    synergies: [
      {traits: ["Storytelling", "Enthusiasm"], bonus: 0.2},
      {traits: ["Language skills", "Cultural sensitivity"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Introversion", "Poor knowledge"], penalty: 0.2}
    ],
    environment: "Outdoor, social, educational, cultural"
  },

  // Finance
  "Financial Advisor": {
    corePattern: {
      "Analytical thinking": [5, 9],
      "Communication skills": [5, 9],
      "Trustworthiness": [7, 9],
      "Financial knowledge": [6, 9]
    },
    synergies: [
      {traits: ["Empathy", "Long-term thinking"], bonus: 0.2},
      {traits: ["Risk assessment", "Client relationships"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Unethical behavior", "Poor math skills"], penalty: 0.3}
    ],
    environment: "Advisory, analytical, relationship-based"
  },

  // Agile & Coaching
  "Agile Coach": {
    corePattern: {
      "Coaching ability": [6, 9],
      "Agile knowledge": [6, 9],
      "Communication skills": [6, 9],
      "Change management": [5, 9]
    },
    synergies: [
      {traits: ["Facilitation", "Team dynamics"], bonus: 0.2},
      {traits: ["Continuous improvement", "Adaptability"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Rigid mindset", "Poor interpersonal skills"], penalty: 0.2}
    ],
    environment: "Team-focused, change-oriented, coaching"
  },

  // Creative & Design
  "3D Designer": {
    corePattern: {
      "Creativity": [6, 9],
      "Visual skills": [6, 9],
      "Technical proficiency": [5, 9],
      "Attention to detail": [5, 8]
    },
    synergies: [
      {traits: ["Spatial reasoning", "Artistic ability"], bonus: 0.25},
      {traits: ["Software proficiency", "Problem-solving"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor visual sense", "Lack of creativity"], penalty: 0.3}
    ],
    environment: "Creative, technical, visual-focused"
  },

  // Writing & Translation
  "Technical Writer": {
    corePattern: {
      "Writing skills": [6, 9],
      "Technical understanding": [5, 9],
      "Clarity of expression": [6, 9],
      "Attention to detail": [5, 8]
    },
    synergies: [
      {traits: ["Research skills", "User empathy"], bonus: 0.2},
      {traits: ["Documentation", "Process understanding"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor writing", "Technical confusion"], penalty: 0.3}
    ],
    environment: "Writing-focused, technical, documentation"
  },

  "Translator": {
    corePattern: {
      "Language skills": [7, 9],
      "Cultural knowledge": [6, 9],
      "Attention to detail": [6, 9],
      "Research skills": [4, 8]
    },
    synergies: [
      {traits: ["Writing ability", "Cultural sensitivity"], bonus: 0.2},
      {traits: ["Subject expertise", "Accuracy"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor language skills", "Cultural insensitivity"], penalty: 0.3}
    ],
    environment: "Language-focused, cultural, accuracy-critical"
  },

  "Localization Manager": {
    corePattern: {
      "Project management": [5, 9],
      "Cultural knowledge": [6, 9],
      "Language skills": [5, 9],
      "Quality focus": [5, 9]
    },
    synergies: [
      {traits: ["Cross-cultural communication", "Team coordination"], bonus: 0.2},
      {traits: ["Process management", "Quality assurance"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor coordination", "Cultural blindness"], penalty: 0.2}
    ],
    environment: "International, project-based, cultural coordination"
  },

  "Translation Quality Specialist": {
    corePattern: {
      "Language expertise": [7, 9],
      "Quality assessment": [6, 9],
      "Attention to detail": [7, 9],
      "Critical thinking": [5, 9]
    },
    synergies: [
      {traits: ["Linguistic analysis", "Error detection"], bonus: 0.25},
      {traits: ["Cultural accuracy", "Consistency checking"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Inaccuracy", "Poor judgment"], penalty: 0.3}
    ],
    environment: "Quality-focused, linguistic, accuracy-critical"
  },

  "Diplomas Writer": {
    corePattern: {
      "Academic writing": [6, 9],
      "Research skills": [6, 9],
      "Subject expertise": [5, 9],
      "Analytical thinking": [5, 9]
    },
    synergies: [
      {traits: ["Critical analysis", "Citation skills"], bonus: 0.2},
      {traits: ["Time management", "Academic standards"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor research", "Plagiarism tendency"], penalty: 0.4}
    ],
    environment: "Academic, research-focused, writing-intensive"
  },

  // Support & Implementation
  "Software Implementation Specialist": {
    corePattern: {
      "Technical knowledge": [5, 9],
      "Problem-solving": [5, 9],
      "Communication skills": [5, 8],
      "Customer focus": [4, 8]
    },
    synergies: [
      {traits: ["Training ability", "Process understanding"], bonus: 0.2},
      {traits: ["Patience", "Troubleshooting"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor technical skills", "Impatience"], penalty: 0.2}
    ],
    environment: "Client-facing, technical, implementation-focused"
  },

  "Software Support Specialist": {
    corePattern: {
      "Technical troubleshooting": [5, 9],
      "Patience": [6, 9],
      "Communication skills": [5, 9],
      "Problem-solving": [5, 9]
    },
    synergies: [
      {traits: ["Empathy", "Persistence"], bonus: 0.2},
      {traits: ["Documentation", "Process following"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Impatience", "Poor communication"], penalty: 0.2}
    ],
    environment: "Support-focused, problem-solving, customer service"
  },

  // Research
  "Researcher": {
    corePattern: {
      "Analytical thinking": [6, 9],
      "Research methodology": [6, 9],
      "Attention to detail": [6, 9],
      "Persistence": [5, 9]
    },
    synergies: [
      {traits: ["Critical thinking", "Data analysis"], bonus: 0.2},
      {traits: ["Writing skills", "Statistical knowledge"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Impatience", "Poor methodology"], penalty: 0.2}
    ],
    environment: "Academic, analytical, detail-oriented"
  },

  // Transportation
  "Taxi Driver": {
    corePattern: {
      "Driving skills": [6, 9],
      "Navigation": [5, 9],
      "Customer service": [3, 8],
      "Stress tolerance": [4, 8]
    },
    synergies: [
      {traits: ["Local knowledge", "Communication"], bonus: 0.15},
      {traits: ["Patience", "Safety awareness"], bonus: 0.2}
    ],
    antiPatterns: [
      {traits: ["Poor driving", "Anger issues"], penalty: 0.3}
    ],
    environment: "Driving-based, customer interaction, flexible hours"
  },

  // Entrepreneurship
  "Vending Machine Owner": {
    corePattern: {
      "Business sense": [4, 8],
      "Location analysis": [4, 8],
      "Maintenance skills": [3, 7],
      "Financial management": [4, 8]
    },
    synergies: [
      {traits: ["Market research", "Customer understanding"], bonus: 0.2},
      {traits: ["Efficiency", "Cost management"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor business sense", "Neglect"], penalty: 0.2}
    ],
    environment: "Entrepreneurial, location-dependent, maintenance-required"
  },

  // Additional Roles
  "Content Creator": {
    corePattern: {
      "Creativity": [6, 9],
      "Communication skills": [5, 9],
      "Social media savvy": [5, 9],
      "Consistency": [4, 8]
    },
    synergies: [
      {traits: ["Audience understanding", "Storytelling"], bonus: 0.2},
      {traits: ["Visual skills", "Trend awareness"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Inconsistency", "Poor communication"], penalty: 0.2}
    ],
    environment: "Creative, digital, audience-focused"
  },

  "Virtual Assistant": {
    corePattern: {
      "Organization": [5, 9],
      "Communication skills": [5, 9],
      "Technology proficiency": [4, 8],
      "Multitasking": [5, 9]
    },
    synergies: [
      {traits: ["Time management", "Attention to detail"], bonus: 0.2},
      {traits: ["Reliability", "Proactive approach"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Disorganization", "Poor communication"], penalty: 0.2}
    ],
    environment: "Remote, varied tasks, client-focused"
  },

  "Event Coordinator": {
    corePattern: {
      "Organization": [6, 9],
      "Communication skills": [6, 9],
      "Stress management": [5, 9],
      "Attention to detail": [6, 9]
    },
    synergies: [
      {traits: ["Creativity", "Problem-solving"], bonus: 0.2},
      {traits: ["Vendor management", "Timeline coordination"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Disorganization", "Poor stress management"], penalty: 0.3}
    ],
    environment: "Event-focused, high-pressure, coordination-heavy"
  },

  "Social Media Manager": {
    corePattern: {
      "Social media expertise": [6, 9],
      "Communication skills": [6, 9],
      "Creativity": [5, 8],
      "Analytics understanding": [4, 8]
    },
    synergies: [
      {traits: ["Trend awareness", "Community building"], bonus: 0.2},
      {traits: ["Visual design", "Content strategy"], bonus: 0.15}
    ],
    antiPatterns: [
      {traits: ["Poor communication", "Lack of creativity"], penalty: 0.2}
    ],
    environment: "Digital, creative, community-focused"
  }

};