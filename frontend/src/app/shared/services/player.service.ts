import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { sample_players } from '../../../data';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: Player[] = sample_players;

  getPlayers(): Player[] {
    return this.players;
  }

  getPlayerById(id: number): Player | undefined {
    return this.players.find(player => player.id === id);
  }
}
