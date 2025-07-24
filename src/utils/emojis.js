export const getTraitEmoji = (trait) => {
  const emojiMap = [

    // Cognitive Abilities
    [["logical thinking", "pattern recognition", "math skills"], "🧮"],
    [["creative thinking", "abstract thinking", "design and aesthetics"], "🎨"],
    [["fast learner", "good memory", "problem solving", "loves learning"], "📚"],
    [["detail-oriented", "stays focused", "attention to detail"], "🔍"],
    [["big picture thinker", "strategic thinking"], "🌐"],

    // Social Skills
    [["emotional intelligence", "helping others"], "❤️"],
    [["persuasion", "sales and persuasion", "negotiation"], "💬"],
    [["cultural awareness"], "🌎"],
    [["writing skills", "technical writing", "documentation skills"], "✍️"],
    [["public speaking", "presentation skills"], "🎤"],
    [["conflict resolution", "collaborative", "team player"], "🤝"],

    // Work Style
    [["likes routine", "systematic", "prefers stability"], "⏱️"],
    [["flexible schedule", "switches tasks easily", "handles change"], "🔄"],
    [["works well remotely", "travel tolerance"], "🏠"],
    [["self-starter", "self-directed", "autonomy & independence"], "🦸"],
    [["decisive", "assertive"], "⚡"],

    // Professional Skills
    [["time management", "project management"], "⏳"],
    [["technical proficiency", "research and analysis", "data analysis capability"], "💻"],
    [["leadership capability", "training and development"], "👔"],
    [["quality assurance"], "✅"],
    [["public relations"], "📢"],

    // Personal Traits
    [["goal-driven", "competitive", "deadline-driven", "purpose-driven"], "🎯"],
    [["optimistic", "patience and persistence"], "☀️"],
    [["diplomatic", "thoughtful"], "⚖️"],
    [["calculated risk-taking"], "🎲"],
    [["calm under pressure", "handles crises"], "🧘"],

    // Values
    [["social impact", "justice commitment"], "🌍"],
    [["environmental stewardship"], "🌱"],
    [["work-life balance"], "⚖️"],
    [["money", "recognition"], "💰"],

    // Physical
    [["physical endurance", "outdoor resilience"], "💪"],
    [["manual dexterity", "mobility and movement"], "✋"],
    [["good vision", "light variation tolerance"], "👀"],
    [["good hearing", "noise tolerance"], "👂"],
    [["smell tolerance"], "👃"],
    [["sitting work comfort"], "🪑"],
    [["temperature adaptability"], "🌡️"],
    [["energy levels"], "⚡"],
    [["handles interruptions", "multitasking"], "🔀"]
  ];

  const lowerTrait = trait.toLowerCase();
  const match = emojiMap.find(([keywords]) =>
    keywords.some(keyword => lowerTrait.includes(keyword))
  );

  return match ? match[1] : "";
};