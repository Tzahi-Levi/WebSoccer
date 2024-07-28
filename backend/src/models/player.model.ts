import { Schema, model } from "mongoose";

export interface WorkRate {
  attack: number;
  defense: number; 
}
export const workRateSchema = new Schema<WorkRate>(
  {
    attack: {type: Number, required: true},
    defense: {type: Number, required: true},
  }
)

export interface Skills {
       pace: number;
       stamina: number;
       strength: number;
       agility: number;
       balance: number;
       shooting: number;
       passing: number;
       dribbling: number;
       ballControl: number;
       crossing: number;
       heading: number;
       tackling: number;
       marking: number;
       interception: number;
       diving: number;
       handling: number;
       kicking: number;
       reflexes: number;
       positioning: number;
       vision: number;
       composure: number;
       leadership: number;
       teamwork: number;
       workRate: WorkRate;
}

export const SkillsSchema = new Schema<Skills>(
  {
    pace: {type: Number, required: true},
    stamina: {type: Number, required: true},
    strength: {type: Number, required: true},
    agility: {type: Number, required: true},
    balance: {type: Number, required: true},
    shooting: {type: Number, required: true},
    passing: {type: Number, required: true},
    dribbling: {type: Number, required: true},
    ballControl: {type: Number, required: true},
    crossing: {type: Number, required: true},
    heading: {type: Number, required: true},
    tackling: {type: Number, required: true},
    marking: {type: Number, required: true},
    interception: {type: Number, required: true},
    diving: {type: Number, required: true},
    handling: {type: Number, required: true},
    kicking: {type: Number, required: true},
    reflexes: {type: Number, required: true},
    positioning: {type: Number, required: true},
    vision: {type: Number, required: true},
    composure: {type: Number, required: true},
    leadership: {type: Number, required: true},
    teamwork: {type: Number, required: true},
    workRate: {type: workRateSchema, required: true},
  }
)

export interface Player {
  id: string;
  name: string;
  age: number;
  img: string;
  position: 'GK' | 'CB' | 'SW' | 'FB' | 'LB' | 'RB' | 'WB' | 'LWB' | 'RWB' | 'DM' | 'CDM' | 'CM' | 'AM' | 'CAM' | 'LAM' | 'RAM' | 'WM' | 'LM' | 'RM' | 'ST' | 'CF' | 'SS' | 'LW' | 'RW' ;
  overallRating: number;
  skills: Skills;
  form: number;
  isInjured: boolean;
  teamId: number;
}

export const PlayerSchema = new Schema<Player>(
  {
    name: {type: String, required: true},
    age: {type: Number, required: true},
    img: {type: String},
    position: {
      type: String, 
      enum:['GK' , 'CB' , 'SW' , 'FB' , 'LB' , 'RB' , 'WB' , 'LWB' , 'RWB' , 'DM' , 'CDM' , 'CM' , 'AM' , 'CAM' , 'LAM' , 'RAM' , 'WM' , 'LM' , 'RM' , 'ST' , 'CF' , 'SS' , 'LW' , 'RW'], 
      required: true},
    overallRating: {type: Number, required: true},
    skills: {type: SkillsSchema, required: true},
    form: {type: Number, required: true},
    isInjured: {type: Boolean, default: false},
    teamId: {type: Number, required: true},
  },{
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    timestamps: true
  }
)

export const PlayerModel = model<Player>('player', PlayerSchema);

