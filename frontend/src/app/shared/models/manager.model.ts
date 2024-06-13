export interface Manager {
  id: number;
  name: string;
  age: number;
  nationality: string;
  experienceLevel: 'Novice' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Master';
  tacticalKnowledge: number; // Ability to devise effective strategies
  motivationalSkill: number; // Ability to inspire and motivate players
  trainingAbility: number; // Ability to improve player skills through training
  adaptability: number; // Ability to adjust tactics and strategies during a match
  decisionMaking: number; // Ability to make effective decisions under pressure
  communicationSkill: number; // Ability to communicate tactics and instructions clearly
  scoutingAbility: number; // Ability to identify and evaluate potential talent
  discipline: number; // Ability to maintain order and discipline within the team
  contractDuration: number; // Duration of the manager's contract in years
  previousTeams: string[]; // List of previous teams managed by the manager
  teamId: number; // The ID of the team currently managed
}
