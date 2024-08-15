import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { AvatarService } from '../../services/avatar.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-formation-player-card',
  templateUrl: './formation-player-card.component.html',
  styleUrl: './formation-player-card.component.scss'
})
export class FormationPlayerCardComponent {
  @Input() playerId : string = '';

  user!:User;
  player: Player | undefined;
  avatarUrl: string = '';

  constructor(private playerService: PlayerService, private avatarService: AvatarService, private userService:UserService){
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
    let playerObservable: Observable<Player[]>;
    playerObservable = this.playerService.getPlayerById(this.user.id, this.playerId);

    playerObservable.subscribe((serverPlayer) => {
      this.player = serverPlayer[0]
    })
  }

  ngOnInit(): void {
    this.avatarUrl = this.avatarService.generateAvatar(this.player);
  }
}
