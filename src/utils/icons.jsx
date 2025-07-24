import { Brain, Users, Briefcase, Award, Heart, Target, Activity } from 'lucide-react';

export const getIconForCategory = (category) => {
  const iconMap = {
    "Thinking Style": <Brain className="category-icon" />,
    "Social & Communication": <Users className="category-icon" />,
    "Work Style & Environment": <Briefcase className="category-icon" />,
    "Professional Skills": <Award className="category-icon" />,
    "Personal Traits": <Heart className="category-icon" />,
    "Values & Motivations": <Target className="category-icon" />,
    "Physical & Practical": <Activity className="category-icon" />
  };
  const mainCategory = category.split(' - ')[0];
  return iconMap[mainCategory] || <Brain className="category-icon" />;
};