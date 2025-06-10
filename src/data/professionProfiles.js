export const professionProfiles = {
    "Software Engineer": {
      corePattern: {
        "Analytical reasoning": [5, 9],
        "Systems thinking": [5, 9],
        "Detail orientation": [5, 9],
        "Autonomy need": [3, 9]
      },
      synergies: [
        {traits: ["Creative thinking", "Pattern recognition"], bonus: 0.2},
        {traits: ["Structure preference", "Detail orientation"], bonus: 0.15}
      ],
      antiPatterns: [
        {traits: ["Helping others drive", "Communication comfort"], penalty: 0.1}
      ],
      environment: "Structured, autonomous, problem-solving focused"
    },
    "UX Designer": {
      corePattern: {
        "Creative thinking": [6, 9],
        "Systems thinking": [5, 9],
        "Communication comfort": [5, 9],
        "Big picture focus": [5, 9]
      },
      synergies: [
        {traits: ["Creative thinking", "Analytical reasoning"], bonus: 0.25},
        {traits: ["Communication comfort", "Helping others drive"], bonus: 0.2}
      ],
      antiPatterns: [
        {traits: ["Structure preference", "Detail orientation"], penalty: 0.15}
      ],
      environment: "Collaborative, user-centered, iterative"
    },
    "Sales Manager": {
      corePattern: {
        "Communication comfort": [6, 9],
        "Leadership inclination": [5, 9],
        "Risk tolerance": [5, 9],
        "Deadline pressure handling": [5, 9]
      },
      synergies: [
        {traits: ["Communication comfort", "Helping others drive"], bonus: 0.2},
        {traits: ["Leadership inclination", "Risk tolerance"], bonus: 0.18}
      ],
      antiPatterns: [
        {traits: ["Autonomy need", "Detail orientation"], penalty: 0.12}
      ],
      environment: "People-focused, results-driven, dynamic"
    },
    "Data Scientist": {
      corePattern: {
        "Analytical reasoning": [6, 9],
        "Pattern recognition": [6, 9],
        "Systems thinking": [5, 9],
        "Detail orientation": [5, 9]
      },
      synergies: [
        {traits: ["Analytical reasoning", "Creative thinking"], bonus: 0.25},
        {traits: ["Pattern recognition", "Big picture focus"], bonus: 0.2}
      ],
      antiPatterns: [
        {traits: ["Variety seeking", "Multitasking ability"], penalty: 0.1}
      ],
      environment: "Research-oriented, data-driven, methodical"
    }
  };
