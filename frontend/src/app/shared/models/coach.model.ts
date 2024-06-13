export interface Coach {
  id: number;
  name: string;
  age: number;

  // Experience Levels
  // Novice: Just starting out, minimal experience.
  // Beginner: Some experience, but still learning the basics.
  // Intermediate: Moderate experience, understanding of fundamental principles.
  // Advanced: Significant experience, capable of handling complex scenarios.
  // Expert: High level of experience, well-versed in advanced strategies and tactics.
  // Master: Exceptional experience, renowned for strategic mastery and leadership.
  experienceLevel: 'Novice' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Master';
  tacticalKnowledge: number; // Ability to devise effective strategies
  motivationalSkill: number; // Ability to inspire and motivate players
  trainingAbility: number; // Ability to improve player skills through training
  communicationSkill: number; // Ability to communicate tactics and instructions clearly
  scoutingAbility: number; // Ability to identify and evaluate potential talent
  expertise: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward' | 'Mentality' | 'Fitness' | 'Data Scientist'; // The expertise of the coach
  teamId: number;
}
