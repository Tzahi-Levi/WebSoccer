export interface Player {
  id: string;
  name: string;
  age: number;
  img: string;
  salary: number;
  contractExp: string;
  position: 'GK' | 'CB' | 'SW' | 'FB' | 'LB' | 'RB' | 'WB' | 'LWB' | 'RWB' | 'DM' | 'CDM' | 'CM' | 'AM' | 'CAM' | 'LAM' | 'RAM' | 'WM' | 'LM' | 'RM' | 'ST' | 'CF' | 'SS' | 'LW' | 'RW' ;
  overallRating: number;
  skills: {
       // Physical Attributes
       pace: number;             // Speed of the player
       stamina: number;          // Ability to sustain physical efforts over a match
       strength: number;         // Physical power in duels
       agility: number;          // Ability to change direction quickly
       balance: number;          // Ability to stay stable and on their feet

       // Technical Skills
       shooting: number;         // Accuracy and power of shots
       passing: number;          // Accuracy and range of passes
       dribbling: number;        // Ability to maneuver the ball past opponents
       ballControl: number;      // Ability to control the ball first touch
       crossing: number;         // Accuracy and quality of crosses
       heading: number;          // Ability to win headers and accuracy of headed shots

       // Defensive Skills
       tackling: number;         // Ability to dispossess opponents
       marking: number;          // Ability to mark opponents and restrict their movement
       interception: number;     // Ability to intercept passes

       // Goalkeeping Skills (for goalkeepers)
       diving: number;           // Ability to dive and reach the ball
       handling: number;         // Ability to catch and hold onto the ball
       kicking: number;          // Accuracy and distance of goal kicks
       reflexes: number;         // Ability to react quickly to shots
       positioning: number;      // Ability to position themselves effectively in goal

       // Mental Attributes
       vision: number;           // Ability to see and make key passes
       composure: number;        // Ability to remain calm under pressure
       leadership: number;       // Ability to lead and inspire teammates
       teamwork: number;         // Ability to work well with teammates
       workRate: {
           attack: number;       // Effort put into attacking plays
           defense: number;      // Effort put into defensive plays
       };
  };
  form: number;
  isInjured: boolean;
  teamId: number;
}