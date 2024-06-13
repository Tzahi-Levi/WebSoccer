import { Component, Input } from '@angular/core';
import { sample_players } from '../../../../data';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent {

  @Input() player: Player | undefined;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.player = this.playerService.getPlayerById(1); //TODO - get the player from the server and not hard coded like now
  }
}
