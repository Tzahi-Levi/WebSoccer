import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerSelectionService {
  private selectedPlayer: BehaviorSubject<Player> = new BehaviorSubject<Player>({
    id: '',
    name: '',
    age: 0,
    img: '',
    salary: 0,
    contractExp: '1/1/1990',
    position: 'GK',
    overallRating: 0,
    skills: {
      pace: 0,
      stamina: 0,
      strength: 0,
      agility: 0,
      balance: 0,
      shooting: 0,
      passing: 0,
      dribbling: 0,
      ballControl: 0,
      crossing: 0,
      heading: 0,
      tackling: 0,
      marking: 0,
      interception: 0,
      diving: 0,
      handling: 0,
      kicking: 0,
      reflexes: 0,
      positioning: 0,
      vision: 0,
      composure: 0,
      leadership: 0,
      teamwork: 0,
      workRate: {
        attack: 0,
        defense: 0
      }
    },
    form: 0,
    isInjured: false,
    teamId: 0
  });

    currentSelectedPlayer = this.selectedPlayer.asObservable();

    changeSelected(player: Player){
      this.selectedPlayer.next(player);
    }
}
