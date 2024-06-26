import { Component, Input } from '@angular/core';
import { sample_players } from '../../../../data';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent {

  @Input() playerId : number = 0;

  player: Player | undefined;
  avatarUrl: string = '';

  constructor(private playerService: PlayerService, private avatarService: AvatarService) {}

  ngOnInit(): void {
    this.player = this.playerService.getPlayerById(this.playerId);
    this.avatarUrl = this.avatarService.generateAvatar(this.player);
  }
}
