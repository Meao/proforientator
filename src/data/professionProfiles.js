import { allTraits } from "./dimensions.js";

export const genericProfession = {
  name: "GENERIC TEST PROFILE",
  traitRanges: Object.fromEntries(allTraits.map(trait => [trait, [0, 9]]))
};

export const professionProfiles = {
  "Software Engineer": {
    corePattern: {
      "Logical thinking": [7, 10],
      "Technical proficiency": [6, 10],
      "Problem solving": [6, 10],
      "Self-starter": [5, 10],
      "Attention to detail": [7, 9],
      "Fast learner": [7, 9],
      "Pattern recognition": [6, 8],
      "Technical writing": [5, 8],
      "Quality assurance": [6, 8],
      "Decisive": [6, 8],
      "Switches tasks easily": [5, 7],
      "Creative thinking": [5, 7],
      "Works well remotely": [8, 10],
      "Sitting work comfort": [9, 10],
      "Energy levels": [5, 7],
    },
    synergies: [
      {
        traits: ["Creative thinking", "Abstract thinking"],
        bonus: 0.2,
      },
      {
        traits: ["Systematic", "Quality assurance"],
        bonus: 0.15,
      },
      {
        traits: ["Fast learner", "Technical proficiency"],
        bonus: 0.2,
      },
      {
        traits: ["Pattern recognition", "Logical thinking"],
        bonus: 0.15,
      },
    ],
  },
  "UX/UI Designer": {
    corePattern: {
      "Creative thinking": [6, 8],
      "Abstract thinking": [6, 9],
      "Emotional intelligence": [6, 10],
      "Good vision": [5, 10],
      "Design and aesthetics": [7, 10],
      "Cultural awareness": [6, 8],
      "Helping others": [7, 9],
      "Collaborative": [6, 8],
      "Switches tasks easily": [6, 8],
      "Light variation tolerance": [5, 7],
    },
    synergies: [
      {
        traits: ["Works well remotely", "Creative thinking"],
        bonus: 0.2,
      },
      {
        traits: ["Creative thinking", "Abstract thinking"],
        bonus: 0.25,
      },
      {
        traits: ["Helping others", "Cultural awareness"],
        bonus: 0.2,
      },
      {
        traits: ["Creative thinking", "Design and aesthetics"],
        bonus: 0.2,
      },
      {
        traits: ["Emotional intelligence", "Collaborative"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Math skills", "Data analysis capability"],
        penalty: 0.1,
      },
      {
        traits: ["Systematic", "Prefers stability"],
        penalty: 0.1,
      },
    ],
  },
  "Data Scientist": {
    corePattern: {
      "Logical thinking": [8, 10],
      "Math skills": [7, 10],
      "Data analysis capability": [8, 10],
      "Research and analysis": [7, 10],
      "Pattern recognition": [7, 10],
      "Switches tasks easily": [7, 9],
      "Good memory": [6, 8],
      "Documentation skills": [6, 8],
      "Strategic thinking": [6, 8],
      "Quality assurance": [5, 7],
      "Loves learning": [6, 8],
      "Sitting work comfort": [6, 8],
    },
    synergies: [
      {
        traits: ["Problem solving", "Strategic thinking"],
        bonus: 0.3,
      },
      {
        traits: ["Technical proficiency", "Documentation skills"],
        bonus: 0.2,
      },
      {
        traits: ["Switches tasks easily", "Good memory"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Public speaking"],
        penalty: 0.1,
      },
      {
        traits: ["Creative thinking", "Design and aesthetics"],
        penalty: 0.1,
      },
      {
        traits: ["Helping others", "Public relations"],
        penalty: 0.15,
      },
    ],
  },
  "Product Manager": {
    corePattern: {
      "Big picture thinker": [7, 10],
      "Strategic thinking": [7, 10],
      "Leadership capability": [6, 10],
      "Presentation skills": [6, 10],
      Decisive: [6, 10],
      Systematic: [7, 9],
      "Project management": [7, 9],
      Persuasion: [6, 8],
      Collaborative: [6, 8],
      "Loves learning": [6, 8],
      "Switches tasks easily": [7, 9],
      "Purpose-driven": [5, 7],
    },
    synergies: [
      {
        traits: ["Systematic", "Project management"],
        bonus: 0.25,
      },
      {
        traits: ["Persuasion", "Collaborative"],
        bonus: 0.2,
      },
      {
        traits: ["Loves learning", "Switches tasks easily"],
        bonus: 0.2,
      },
      {
        traits: ["Collaborative", "Persuasion"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Attention to detail", "Technical proficiency"],
        penalty: 0.15,
      },
      {
        traits: ["Likes routine", "Systematic"],
        penalty: 0.2,
      },
      {
        traits: ["Self-starter", "Decisive"],
        penalty: 0.1,
      },
    ],
  },
  "Clinical Psychologist": {
    corePattern: {
      "Emotional intelligence": [8, 10],
      "Patience and persistence": [7, 10],
      "Helping others": [6, 10],
    },
    synergies: [
      {
        traits: ["Thoughtful", "Cultural awareness"],
        bonus: 0.3,
      },
      {
        traits: ["Training and development", "Loves learning"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Competitive", "Money"],
        penalty: 0.2,
      },
    ],
  },
  "Financial Analyst": {
    corePattern: {
      "Logical thinking": [7, 10],
      "Math skills": [7, 10],
      "Attention to detail": [7, 10],
      "Quality assurance": [6, 10],
      "Prefers stability": [5, 10],
      Systematic: [6, 10],
    },
    synergies: [
      {
        traits: ["Systematic", "Time management"],
        bonus: 0.25,
      },
      {
        traits: ["Calculated risk-taking", "Strategic thinking"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  "Marketing Director": {
    corePattern: {
      "Creative thinking": [7, 10],
      Persuasion: [8, 10],
      "Strategic thinking": [7, 10],
      "Leadership capability": [6, 10],
      Collaborative: [6, 10],
    },
    synergies: [
      {
        traits: ["Creative thinking", "Persuasion"],
        bonus: 0.3,
      },
      {
        traits: ["Cultural awareness", "Public relations"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Technical proficiency", "Likes routine"],
        penalty: 0.15,
      },
    ],
  },
  "Environmental Scientist": {
    corePattern: {
      "Research and analysis": [7, 10],
      "Logical thinking": [7, 10],
      "Environmental stewardship": [8, 10],
      "Physical endurance": [5, 10],
      "Switches tasks easily": [6, 10],
    },
    synergies: [
      {
        traits: ["Systematic", "Problem solving"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Likes routine", "Prefers stability"],
        penalty: 0.15,
      },
    ],
  },
  "Human Resources Manager": {
    corePattern: {
      "Emotional intelligence": [7, 10],
      Persuasion: [7, 10],
      "Conflict resolution": [6, 10],
      "Cultural awareness": [6, 10],
    },
    synergies: [
      {
        traits: ["Emotional intelligence", "Diplomatic"],
        bonus: 0.3,
      },
    ],
    antiPatterns: [
      {
        traits: ["Autonomy & independence", "Technical proficiency"],
        penalty: 0.2,
      },
    ],
  },
  "Emergency Room Physician": {
    corePattern: {
      "Logical thinking": [7, 10],
      "Fast learner": [8, 10],
      Decisive: [8, 10],
      "Handles crises": [8, 10],
      "Physical endurance": [6, 10],
      "Switches tasks easily": [6, 10],
    },
    synergies: [
      {
        traits: ["Pattern recognition", "Problem solving"],
        bonus: 0.35,
      },
      {
        traits: ["Helping others", "Collaborative"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Likes routine", "Prefers stability"],
        penalty: 0.3,
      },
    ],
  },
  Architect: {
    corePattern: {
      "Creative thinking": [7, 10],
      "Design and aesthetics": [6, 10],
      "Technical proficiency": [6, 10],
      "Project management": [5, 10],
    },
    synergies: [
      {
        traits: ["Creative thinking", "Systematic"],
        bonus: 0.3,
      },
      {
        traits: ["Attention to detail", "Quality assurance"],
        bonus: 0.25,
      },
    ],
  },
  "Corporate Lawyer": {
    corePattern: {
      "Logical thinking": [8, 10],
      "Attention to detail": [8, 10],
      Persuasion: [7, 10],
      "Writing skills": [7, 10],
      Competitive: [5, 10],
    },
    synergies: [
      {
        traits: ["Logical thinking", "Problem solving"],
        bonus: 0.3,
      },
      {
        traits: ["Negotiation", "Calculated risk-taking"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.25,
      },
    ],
  },
  "Elementary School Teacher": {
    corePattern: {
      "Training and development": [8, 10],
      "Patience and persistence": [8, 10],
      "Public speaking": [7, 10],
      "Helping others": [7, 10],
      Multitasking: [6, 10],
    },
    synergies: [
      {
        traits: ["Creative thinking", "Training and development"],
        bonus: 0.3,
      },
      {
        traits: ["Cultural awareness", "Emotional intelligence"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Autonomy & independence", "Technical proficiency"],
        penalty: 0.2,
      },
    ],
  },
  "Research Scientist": {
    corePattern: {
      "Logical thinking": [8, 10],
      "Research and analysis": [8, 10],
      "Attention to detail": [7, 10],
      "Patience and persistence": [7, 10],
      "Loves learning": [7, 10],
    },
    synergies: [
      {
        traits: ["Problem solving", "Creative thinking"],
        bonus: 0.3,
      },
      {
        traits: ["Documentation skills", "Quality assurance"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Public speaking", "Sales and persuasion"],
        penalty: 0.25,
      },
    ],
  },
  "Construction Manager": {
    corePattern: {
      "Project management": [7, 10],
      "Leadership capability": [6, 10],
      Decisive: [6, 10],
      "Physical endurance": [6, 10],
      "Quality assurance": [6, 10],
    },
    synergies: [
      {
        traits: ["Systematic", "Time management"],
        bonus: 0.25,
      },
      {
        traits: ["Calculated risk-taking", "Handles crises"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Sitting work comfort", "Attention to detail"],
        penalty: 0.15,
      },
    ],
  },
  "Graphic Designer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Design and aesthetics": [8, 10],
      "Good vision": [6, 10],
      "Switches tasks easily": [5, 10],
    },
    synergies: [
      {
        traits: ["Creative thinking", "Abstract thinking"],
        bonus: 0.3,
      },
      {
        traits: ["Cultural awareness", "Helping others"],
        bonus: 0.2,
      },
    ],
  },
  "Nonprofit Director": {
    corePattern: {
      "Leadership capability": [7, 10],
      "Public speaking": [7, 10],
      "Helping others": [8, 10],
      "Social impact": [8, 10],
      "Strategic thinking": [6, 10],
      "Purpose-driven": [6, 10],
    },
    synergies: [
      {
        traits: ["Sales and persuasion", "Public relations"],
        bonus: 0.3,
      },
      {
        traits: ["Collaborative", "Cultural awareness"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Money", "Competitive"],
        penalty: 0.2,
      },
    ],
  },
  "Cybersecurity Specialist": {
    corePattern: {
      "Logical thinking": [8, 10],
      "Technical proficiency": [6, 10],
      "Attention to detail": [7, 10],
      "Calculated risk-taking": [7, 10],
      "Problem solving": [7, 10],
    },
    synergies: [
      {
        traits: ["Systematic", "Pattern recognition"],
        bonus: 0.35,
      },
      {
        traits: ["Documentation skills", "Quality assurance"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Public speaking", "Helping others"],
        penalty: 0.15,
      },
    ],
  },
  "Executive Coach": {
    corePattern: {
      "Emotional intelligence": [8, 10],
      Persuasion: [7, 10],
      "Leadership capability": [7, 10],
      "Cultural awareness": [6, 10],
    },
    synergies: [
      {
        traits: ["Thoughtful", "Loves learning"],
        bonus: 0.3,
      },
      {
        traits: ["Strategic thinking", "Training and development"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Technical proficiency", "Attention to detail"],
        penalty: 0.2,
      },
    ],
  },
  "Industrial Designer": {
    corePattern: {
      "Design and aesthetics": [7, 10],
      "Creative thinking": [7, 10],
      "Manual dexterity": [7, 10],
      "Good vision": [6, 9],
      "Problem solving": [6, 9],
    },
    synergies: [
      {
        traits: ["Abstract thinking", "Design and aesthetics"],
        bonus: 0.3,
      },
      {
        traits: ["Manual dexterity", "Creative thinking"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Likes routine", "Systematic"],
        penalty: 0.2,
      },
    ],
  },
  Tattooer: {
    corePattern: {
      "Creative thinking": [8, 10],
      "Manual dexterity": [7, 10],
      "Attention to detail": [7, 10],
      "Helping others": [6, 9],
    },
    synergies: [
      {
        traits: ["Design and aesthetics", "Manual dexterity"],
        bonus: 0.25,
      },
      {
        traits: ["Cultural awareness", "Emotional intelligence"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Likes routine", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  "Shop Assistant": {
    corePattern: {
      "Helping others": [6, 9],
      "Patience and persistence": [5, 8],
      "Switches tasks easily": [5, 8],
    },
    synergies: [
      {
        traits: ["Sales and persuasion", "Technical proficiency"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Self-starter", "Decisive"],
        penalty: 0.15,
      },
    ],
  },
  Cashier: {
    corePattern: {
      "Attention to detail": [6, 9],
      "Math skills": [4, 7],
      "Helping others": [5, 9],
      "Likes routine": [5, 9],
    },
    synergies: [
      {
        traits: ["Systematic", "Likes routine"],
        bonus: 0.2,
      },
      {
        traits: ["Patience and persistence", "Switches tasks easily"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Switches tasks easily"],
        penalty: 0.2,
      },
    ],
  },
  "Data Entry Clerk": {
    corePattern: {
      "Attention to detail": [7, 10],
      "Likes routine": [7, 10],
      "Stays focused": [6, 9],
    },
    synergies: [
      {
        traits: ["Systematic", "Quality assurance"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Switches tasks easily"],
        penalty: 0.25,
      },
    ],
  },
  Secretary: {
    corePattern: {
      "Time management": [6, 9],
      "Writing skills": [6, 9],
      Multitasking: [5, 9],
      "Attention to detail": [5, 8],
    },
    synergies: [
      {
        traits: ["Time management", "Likes routine"],
        bonus: 0.25,
      },
      {
        traits: ["Diplomatic", "Cultural awareness"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-directed"],
        penalty: 0.15,
      },
    ],
  },
  "Language Tutor": {
    corePattern: {
      "Training and development": [7, 10],
      Persuasion: [7, 10],
      "Patience and persistence": [6, 9],
      "Cultural awareness": [6, 9],
    },
    synergies: [
      {
        traits: ["Training and development", "Emotional intelligence"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.1,
      },
    ],
  },
  "Programming Tutor": {
    corePattern: {
      "Technical proficiency": [7, 10],
      "Training and development": [6, 9],
      "Problem solving": [6, 9],
      "Patience and persistence": [5, 8],
    },
    synergies: [
      {
        traits: ["Logical thinking", "Logical thinking"],
        bonus: 0.3,
      },
      {
        traits: ["Documentation skills", "Quality assurance"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Public speaking", "Collaborative"],
        penalty: 0.15,
      },
    ],
  },
  Babysitter: {
    corePattern: {
      "Patience and persistence": [7, 10],
      "Emotional intelligence": [6, 9],
      "Energy levels": [5, 8],
      "Calculated risk-taking": [7, 10],
    },
    synergies: [
      {
        traits: ["Creative thinking", "Emotional intelligence"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.1,
      },
    ],
  },
  Counselor: {
    corePattern: {
      "Emotional intelligence": [8, 10],
      "Patience and persistence": [7, 10],
    },
    synergies: [
      {
        traits: ["Thoughtful", "Cultural awareness"],
        bonus: 0.3,
      },
      {
        traits: ["Helping others", "Helping others"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Competitive", "Money"],
        penalty: 0.3,
      },
    ],
  },
  "Backend Programmer": {
    corePattern: {
      "Logical thinking": [8, 10],
      "Technical proficiency": [8, 10],
      "Problem solving": [7, 10],
      Systematic: [6, 9],
    },
    synergies: [
      {
        traits: ["Logical thinking", "Pattern recognition"],
        bonus: 0.35,
      },
      {
        traits: ["Documentation skills", "Quality assurance"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Public speaking", "Helping others"],
        penalty: 0.15,
      },
    ],
  },
  "Frontend Programmer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Technical proficiency": [7, 10],
      "Attention to detail": [6, 9],
      "Design and aesthetics": [5, 8],
    },
    synergies: [
      {
        traits: ["Emotional intelligence", "Helping others"],
        bonus: 0.3,
      },
      {
        traits: ["Creative thinking", "Abstract thinking"],
        bonus: 0.25,
      },
    ],
  },
  "QA Specialist": {
    corePattern: {
      "Attention to detail": [8, 10],
      "Logical thinking": [6, 9],
      "Patience and persistence": [6, 9],
      "Quality assurance": [7, 10],
    },
    synergies: [
      {
        traits: ["Systematic", "Likes routine"],
        bonus: 0.3,
      },
      {
        traits: ["Documentation skills", "Technical writing"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.25,
      },
    ],
  },
  "Manual Tester": {
    corePattern: {
      "Attention to detail": [7, 10],
      "Logical thinking": [6, 9],
      "Works well remotely": [6, 9],
      "Documentation skills": [5, 8],
    },
    synergies: [
      {
        traits: ["Writing skills", "Likes routine"],
        bonus: 0.25,
      },
      {
        traits: ["Time management", "Systematic"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Switches tasks easily"],
        penalty: 0.2,
      },
    ],
  },
  "Prompt Engineer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Logical thinking": [6, 9],
      "Technical proficiency": [5, 8],
      "Writing skills": [6, 9],
    },
    synergies: [
      {
        traits: ["Abstract thinking", "Creative thinking"],
        bonus: 0.3,
      },
      {
        traits: ["Loves learning", "Switches tasks easily"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Likes routine", "Systematic"],
        penalty: 0.2,
      },
    ],
  },
  "Business Analyst": {
    corePattern: {
      "Logical thinking": [7, 10],
      Persuasion: [6, 9],
      "Problem solving": [6, 9],
      "Strategic thinking": [5, 8],
    },
    synergies: [
      {
        traits: ["Systematic", "Big picture thinker"],
        bonus: 0.3,
      },
      {
        traits: ["Presentation skills", "Persuasion"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.1,
      },
    ],
  },
  "Systems Analyst": {
    corePattern: {
      "Logical thinking": [7, 10],
      "Technical proficiency": [6, 9],
      "Problem solving": [6, 9],
      Systematic: [6, 9],
    },
    synergies: [
      {
        traits: ["Strategic thinking", "Big picture thinker"],
        bonus: 0.3,
      },
      {
        traits: ["Documentation skills", "Quality assurance"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  "Sales Manager": {
    corePattern: {
      "Leadership capability": [6, 9],
      Persuasion: [7, 10],
      Competitive: [6, 9],
      "Helping others": [7, 10],
    },
    synergies: [
      {
        traits: ["Collaborative", "Collaborative"],
        bonus: 0.3,
      },
      {
        traits: ["Strategic thinking", "Goal-driven"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.1,
      },
    ],
  },
  Telemarketer: {
    corePattern: {
      "Sales and persuasion": [6, 9],
      "Patience and persistence": [6, 9],
      "Helping others": [5, 8],
      Collaborative: [5, 8],
    },
    synergies: [
      {
        traits: ["Emotional intelligence", "Persuasion"],
        bonus: 0.2,
      },
      {
        traits: ["Sales and persuasion", "Presentation skills"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.1,
      },
    ],
  },
  "Tourist Guide": {
    corePattern: {
      "Public speaking": [7, 10],
      "Cultural awareness": [6, 9],
      Collaborative: [6, 9],
      "Training and development": [5, 8],
      "Physical endurance": [5, 8],
    },
    synergies: [
      {
        traits: ["Presentation skills", "Helping others"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.1,
      },
    ],
  },
  "Financial Advisor": {
    corePattern: {
      "Logical thinking": [7, 10],
      "Sales and persuasion": [6, 9],
      "Strategic thinking": [6, 9],
      "Helping others": [6, 9],
    },
    synergies: [
      {
        traits: ["Sales and persuasion", "Presentation skills"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  "Agile Coach": {
    corePattern: {
      "Training and development": [7, 10],
      "Leadership capability": [6, 9],
      "Sales and persuasion": [7, 10],
      Collaborative: [7, 10],
      "Conflict resolution": [6, 9],
    },
    synergies: [
      {
        traits: ["Emotional intelligence", "Conflict resolution"],
        bonus: 0.3,
      },
      {
        traits: ["Strategic thinking", "Big picture thinker"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.2,
      },
    ],
  },
  "3D Designer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Design and aesthetics": [7, 10],
      "Technical proficiency": [6, 9],
      "Attention to detail": [6, 9],
    },
    synergies: [
      {
        traits: ["Creative thinking", "Abstract thinking"],
        bonus: 0.3,
      },
      {
        traits: ["Good vision", "Environmental stewardship"],
        bonus: 0.2,
      },
    ],
  },
  "Technical Writer": {
    corePattern: {
      "Writing skills": [8, 10],
      "Technical proficiency": [6, 9],
      "Attention to detail": [7, 10],
      "Documentation skills": [7, 10],
    },
    synergies: [
      {
        traits: ["Logical thinking", "Problem solving"],
        bonus: 0.3,
      },
      {
        traits: ["Quality assurance", "Systematic"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  Translator: {
    corePattern: {
      "Writing skills": [8, 10],
      "Cultural awareness": [7, 10],
      "Attention to detail": [7, 10],
      "Loves learning": [6, 9],
    },
    synergies: [
      {
        traits: ["Good memory", "Switches tasks easily"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.1,
      },
    ],
  },
  "Localization Manager": {
    corePattern: {
      "Project management": [7, 10],
      "Cultural awareness": [7, 10],
      "Writing skills": [6, 9],
      Collaborative: [5, 8],
    },
    synergies: [
      {
        traits: ["Strategic thinking", "Big picture thinker"],
        bonus: 0.3,
      },
      {
        traits: ["Conflict resolution", "Collaborative"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Self-starter", "Self-directed"],
        penalty: 0.1,
      },
    ],
  },
  "Translation Quality Specialist": {
    corePattern: {
      "Attention to detail": [8, 10],
      "Logical thinking": [7, 10],
      "Likes routine": [7, 10],
      "Cultural awareness": [6, 9],
    },
    synergies: [
      {
        traits: ["Systematic", "Likes routine"],
        bonus: 0.3,
      },
      {
        traits: ["Documentation skills", "Writing skills"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Switches tasks easily"],
        penalty: 0.25,
      },
    ],
  },
  "Diplomas Writer": {
    corePattern: {
      "Writing skills": [8, 10],
      "Research and analysis": [7, 10],
      "Logical thinking": [7, 10],
      "Attention to detail": [7, 10],
    },
    synergies: [
      {
        traits: ["Problem solving", "Logical thinking"],
        bonus: 0.3,
      },
      {
        traits: ["Documentation skills", "Quality assurance"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  "Software Implementation Specialist": {
    corePattern: {
      "Technical proficiency": [7, 10],
      "Problem solving": [6, 9],
      "Writing skills": [6, 9],
      "Helping others": [5, 8],
    },
    synergies: [
      {
        traits: ["Training and development", "Emotional intelligence"],
        bonus: 0.3,
      },
      {
        traits: ["Quality assurance", "Systematic"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.1,
      },
    ],
  },
  "Software Support Specialist": {
    corePattern: {
      "Technical proficiency": [6, 9],
      "Emotional intelligence": [6, 9],
      "Patience and persistence": [6, 9],
      "Helping others": [5, 8],
    },
    synergies: [
      {
        traits: ["Emotional intelligence", "Cultural awareness"],
        bonus: 0.3,
      },
      {
        traits: ["Documentation skills", "Likes routine"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Self-starter", "Decisive"],
        penalty: 0.1,
      },
    ],
  },
  Researcher: {
    corePattern: {
      "Logical thinking": [8, 10],
      "Research and analysis": [8, 10],
      "Attention to detail": [7, 10],
      "Patience and persistence": [7, 10],
    },
    synergies: [
      {
        traits: ["Problem solving", "Logical thinking"],
        bonus: 0.35,
      },
      {
        traits: ["Documentation skills", "Quality assurance"],
        bonus: 0.3,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.25,
      },
    ],
  },
  "Taxi Driver": {
    corePattern: {
      "Helping others": [6, 9],
      "Switches tasks easily": [6, 9],
      "Conflict resolution": [5, 8],
      "Patience and persistence": [5, 8],
    },
    synergies: [
      {
        traits: ["Emotional intelligence", "Cultural awareness"],
        bonus: 0.2,
      },
      {
        traits: ["Patience and persistence", "Helping others"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Self-starter"],
        penalty: 0.1,
      },
    ],
  },
  "Vending Machine Owner": {
    corePattern: {
      "Strategic thinking": [5, 8],
      "Research and analysis": [4, 8],
      "Technical proficiency": [3, 7],
      Money: [4, 8],
      "Travel tolerance": [4, 8],
    },
    synergies: [
      {
        traits: ["Problem solving", "Decisive"],
        bonus: 0.2,
      },
      {
        traits: ["Quality assurance", "Systematic"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  "Content Creator": {
    corePattern: {
      "Creative thinking": [6, 9],
      "Writing skills": [5, 9],
      "Presentation skills": [5, 8],
      "Goal-driven": [4, 8],
    },
    synergies: [
      {
        traits: ["Helping others", "Cultural awareness"],
        bonus: 0.2,
      },
      {
        traits: ["Creative thinking", "Design and aesthetics"],
        bonus: 0.15,
      },
    ],
  },
  "Virtual Assistant": {
    corePattern: {
      "Time management": [5, 9],
      "Presentation skills": [5, 9],
      "Technical proficiency": [4, 8],
      Multitasking: [5, 9],
    },
    synergies: [
      {
        traits: ["Time management", "Attention to detail"],
        bonus: 0.2,
      },
      {
        traits: ["Quality assurance", "Systematic"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Decisive", "Creative thinking"],
        penalty: 0.2,
      },
    ],
  },
  "Event Coordinator": {
    corePattern: {
      "Time management": [6, 9],
      Collaborative: [6, 9],
      Multitasking: [5, 9],
      "Switches tasks easily": [5, 9],
    },
    synergies: [
      {
        traits: ["Creative thinking", "Collaborative"],
        bonus: 0.2,
      },
      {
        traits: ["Leadership capability", "Project management"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Self-starter", "Decisive"],
        penalty: 0.3,
      },
    ],
  },
  "Social Media Manager": {
    corePattern: {
      "Creative thinking": [5, 8],
      "Presentation skills": [6, 9],
      "Data analysis capability": [4, 8],
    },
    synergies: [
      {
        traits: ["Cultural awareness", "Helping others"],
        bonus: 0.2,
      },
      {
        traits: ["Design and aesthetics", "Presentation skills"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Technical proficiency", "Likes routine"],
        penalty: 0.2,
      },
    ],
  },
  "Remote Software Engineer": {
    corePattern: {
      "Logical thinking": [7, 10],
      "Technical proficiency": [6, 10],
      "Works well remotely": [8, 10],
      "Self-starter": [7, 10],
    },
    synergies: [
      {
        traits: ["Creative thinking", "Abstract thinking"],
        bonus: 0.2,
      },
      {
        traits: ["Systematic", "Time management"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Noise tolerance", "Collaborative"],
        penalty: 0.15,
      },
    ],
  },
  "Open Office UX Designer": {
    corePattern: {
      "Creative thinking": [7, 10],
      "Design and aesthetics": [7, 10],
      "Noise tolerance": [5, 8],
      Collaborative: [6, 9],
    },
    synergies: [
      {
        traits: ["Helping others", "Cultural awareness"],
        bonus: 0.25,
      },
      {
        traits: ["Good vision", "Environmental stewardship"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Works well remotely", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  "Management Consultant": {
    corePattern: {
      "Strategic thinking": [8, 10],
      "Travel tolerance": [7, 10],
      Assertive: [7, 10],
      "Work-life balance": [3, 6],
      Recognition: [6, 9],
    },
    synergies: [
      {
        traits: ["Problem solving", "Big picture thinker"],
        bonus: 0.3,
      },
      {
        traits: ["Presentation skills", "Helping others"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Likes routine", "Prefers stability"],
        penalty: 0.3,
      },
    ],
  },
  "Hospital Nurse": {
    corePattern: {
      "Emotional intelligence": [8, 10],
      "Physical endurance": [7, 10],
      "Temperature adaptability": [6, 9],
      "Helping others": [7, 10],
      "Work-life balance": [4, 7],
    },
    synergies: [
      {
        traits: ["Patience and persistence", "Handles crises"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Sitting work comfort", "Works well remotely"],
        penalty: 0.25,
      },
    ],
  },
  "Online Teacher": {
    corePattern: {
      "Training and development": [7, 10],
      "Works well remotely": [7, 10],
      "Good hearing": [6, 9],
      "Autonomy & independence": [6, 9],
      "Flexible schedule": [8, 10],
    },
    synergies: [
      {
        traits: ["Presentation skills", "Technical proficiency"],
        bonus: 0.25,
      },
      {
        traits: ["Light variation tolerance", "Switches tasks easily"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Noise tolerance", "Physical endurance"],
        penalty: 0.2,
      },
    ],
  },
  "Laboratory Researcher": {
    corePattern: {
      "Research and analysis": [8, 10],
      "Attention to detail": [8, 10],
      "Sitting work comfort": [7, 10],
      "Light variation tolerance": [6, 9],
      "Purpose-driven": [6, 9],
    },
    synergies: [
      {
        traits: ["Logical thinking", "Problem solving"],
        bonus: 0.35,
      },
      {
        traits: ["Patience and persistence", "Quality assurance"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Physical endurance", "Collaborative"],
        penalty: 0.25,
      },
    ],
  },
  "Risk Analyst": {
    corePattern: {
      "Logical thinking": [7, 10],
      "Pattern recognition": [7, 10],
      "Problem solving": [7, 10],
    },
    synergies: [
      {
        traits: ["Math skills", "Prefers stability"],
        bonus: 0.3,
      },
      {
        traits: ["Systematic", "Attention to detail"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  "Corporate Trainer": {
    corePattern: {
      "Presentation skills": [7, 10],
      "Training and development": [7, 10],
      "Emotional intelligence": [6, 9],
      Assertive: [6, 9],
    },
    synergies: [
      {
        traits: ["Diplomatic", "Collaborative"],
        bonus: 0.3,
      },
      {
        traits: ["Training and development", "Loves learning"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Self-starter", "Decisive"],
        penalty: 0.2,
      },
    ],
  },
  "Policy Advisor": {
    corePattern: {
      "Research and analysis": [8, 10],
      "Strategic thinking": [7, 10],
      "Helping others": [7, 10],
      "Writing skills": [7, 10],
      "Big picture thinker": [6, 9],
    },
    synergies: [
      {
        traits: ["Social impact", "Justice commitment"],
        bonus: 0.3,
      },
      {
        traits: ["Thoughtful", "Switches tasks easily"],
        bonus: 0.2,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Switches tasks easily"],
        penalty: 0.2,
      },
    ],
  },
  "Emergency Response Coordinator": {
    corePattern: {
      "Handles crises": [8, 10],
      Decisive: [8, 10],
      "Switches tasks easily": [7, 10],
      Collaborative: [7, 10],
      Multitasking: [6, 9],
      "Physical endurance": [8, 10],
      "Energy levels": [9, 10],
      "Calm under pressure": [9, 10],
    },
    synergies: [
      {
        traits: ["Leadership capability", "Conflict resolution"],
        bonus: 0.3,
      },
      {
        traits: ["Switches tasks easily", "Physical endurance"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Likes routine", "Systematic"],
        penalty: 0.3,
      },
    ],
  },
  "Sustainability Consultant": {
    corePattern: {
      "Environmental stewardship": [8, 10],
      "Strategic thinking": [7, 10],
      "Research and analysis": [7, 10],
      "Cultural awareness": [6, 9],
      Collaborative: [6, 9],
    },
    synergies: [
      {
        traits: ["Abstract thinking", "Creative thinking"],
        bonus: 0.3,
      },
      {
        traits: ["Collaborative", "Helping others"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Likes routine", "Works well remotely"],
        penalty: 0.2,
      },
    ],
  },
  "Air Traffic Controller": {
    corePattern: {
      "Attention to detail": [8, 10],
      "Stays focused": [8, 10],
      "Fast learner": [7, 10],
      "Good hearing": [7, 10],
      "Switches tasks easily": [7, 10],
    },
    synergies: [
      {
        traits: ["Decisive", "Switches tasks easily"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Collaborative", "Social impact"],
        penalty: 0.2,
      },
    ],
  },
  "Business Development Executive": {
    corePattern: {
      "Sales and persuasion": [8, 10],
      Negotiation: [7, 10],
      Collaborative: [7, 10],
      Competitive: [7, 10],
      Money: [6, 9],
      Persuasion: [8, 10],
      "Helping others": [5, 9],
      "Strategic thinking": [6, 8],
      "Switches tasks easily": [7, 9],
      "Environmental stewardship": [7, 9],
      "Purpose-driven": [6, 9],
      "Loves learning": [6, 8],
      Decisive: [6, 8],
    },
    synergies: [
      {
        traits: ["Public speaking", "Presentation skills"],
        bonus: 0.3,
      },
      {
        traits: ["Strategic thinking", "Loves learning"],
        bonus: 0.25,
      },
      {
        traits: ["Persuasion", "Helping others"],
        bonus: 0.2,
      },
      {
        traits: ["Switches tasks easily", "Environmental stewardship"],
        bonus: 0.15,
      },
    ],
    antiPatterns: [
      {
        traits: ["Prefers stability", "Likes routine"],
        penalty: 0.25,
      },
      {
        traits: ["Systematic", "Systematic"],
        penalty: 0.2,
      },
      {
        traits: ["Self-directed", "Thoughtful"],
        penalty: 0.15,
      },
    ],
  },
  "Lab Technician": {
    corePattern: {
      "Attention to detail": [8, 10],
      "Quality assurance": [7, 10],
      "Manual dexterity": [7, 10],
      "Good memory": [6, 9],
      Systematic: [6, 9],
    },
    synergies: [
      {
        traits: ["Research and analysis", "Pattern recognition"],
        bonus: 0.3,
      },
      {
        traits: ["Collaborative", "Documentation skills"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Creative thinking", "Prefers stability"],
        penalty: 0.2,
      },
    ],
  },
  "AI Ethics Officer": {
    corePattern: {
      "Justice commitment": [7, 10],
      "Logical thinking": [7, 10],
      "Research and analysis": [7, 10],
      "Loves learning": [6, 9],
    },
    synergies: [
      {
        traits: ["Strategic thinking", "Social impact"],
        bonus: 0.3,
      },
      {
        traits: ["Writing skills", "Diplomatic"],
        bonus: 0.25,
      },
    ],
    antiPatterns: [
      {
        traits: ["Money", "Competitive"],
        penalty: 0.2,
      },
    ],
  },
};
