import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-formation-player-card',
  templateUrl: './formation-player-card.component.html',
  styleUrl: './formation-player-card.component.scss'
})
export class FormationPlayerCardComponent {
  @Input() playerId : number = 0;

  player: Player | undefined;
  avatarUrl: string = '';

  constructor(private playerService: PlayerService, private avatarService: AvatarService) {}

  ngOnInit(): void {
    this.player = this.playerService.getPlayerById(this.playerId); //TODO - get the player from the server and not hard coded like now
    this.avatarUrl = this.avatarService.generateAvatar(this.player);
  }
}
