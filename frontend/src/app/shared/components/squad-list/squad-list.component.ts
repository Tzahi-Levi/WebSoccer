import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Squad } from '../../models/squad.model';

@Component({
  selector: 'app-squad-list',
  templateUrl: './squad-list.component.html',
  styleUrl: './squad-list.component.scss'
})
export class SquadListComponent {
  user!:User;
  squad!: Squad;
  players: Player[] = [];

  constructor(private playerService: PlayerService, private userService:UserService){
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
    let playersObservable: Observable<Squad[]>;
    playersObservable = this.playerService.getPlayers(this.user.id);

    playersObservable.subscribe((serverPlayers) => {
      this.squad = serverPlayers[0];
      this.players = this.squad.squad;
      console.log(this.players);
    })
  }

}
