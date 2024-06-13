import { Player } from './player.model';
import { Coach } from './coach.model';

export interface Team {
    id: number;
    name: string;
    stadium: string;
    coaches: Coach[];
    players: Player[];
    formation: string;
    tactics: {
        defensiveStyle: 'Ultra Defensive' | 'Defensive' | 'Balanced' | 'Attacking' | 'Ultra Attacking';
        offensiveStyle: 'Possession' | 'Long Ball' | 'Fast Build Up' | 'Balanced';
        width: number;  // Value between 1-10
        depth: number;  // Value between 1-10
    };
    statistics: {
        matchesPlayed: number;
        wins: number;
        draws: number;
        losses: number;
        goalsFor: number;
        goalsAgainst: number;
    };
}
