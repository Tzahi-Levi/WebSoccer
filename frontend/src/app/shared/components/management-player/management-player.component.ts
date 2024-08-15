import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerSelectionService } from '../../services/player-selection.service';

@Component({
  selector: 'app-management-player',
  templateUrl: './management-player.component.html',
  styleUrl: './management-player.component.scss'
})
export class ManagementPlayerComponent implements OnInit{
  @Input() selectedPlayer!: Player;

  constructor(private playerSelectionService: PlayerSelectionService){}

  ngOnInit() {
    this.playerSelectionService.currentSelectedPlayer.subscribe(selectedPlayer => this.selectedPlayer = selectedPlayer);
  }
}
