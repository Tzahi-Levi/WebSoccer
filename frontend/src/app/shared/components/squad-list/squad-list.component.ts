import { Component } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-squad-list',
  templateUrl: './squad-list.component.html',
  styleUrl: './squad-list.component.scss'
})
export class SquadListComponent {
  players: Player[] = [];

  constructor(private playerService: PlayerService){
    this.players = this.playerService.getPlayers();
  }

}
