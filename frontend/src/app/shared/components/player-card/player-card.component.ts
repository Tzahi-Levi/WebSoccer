import { Component, Input, SimpleChanges } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { AvatarService } from '../../services/avatar.service';
import { Skill } from '../../models/skill.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0px',
        overflow: 'hidden',
        opacity: 0
      })),
      state('expanded', style({
        height: '*',
        opacity: 1
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class PlayerCardComponent {

  @Input() playerId : string = '';

  isExpended = false;

  player: Player = {
    id: '',
    name: '',
    age: 0,
    img: '',
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
  };
  avatarUrl: string = '';
  generalSkills: Skill[] = [];
  physical: Skill[] = [];
  technical: Skill[] = [];
  mental: Skill[] = [];
  defensive: Skill[] = [];


  constructor(private playerService: PlayerService, private avatarService: AvatarService) {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['playerId'] && changes['playerId'].currentValue) {
      this.fetchPlayerData();
    }
  }

  fetchPlayerData(): void {
    this.playerService.getPlayerById(this.playerId).subscribe((serverPlayer) => {
      this.player = serverPlayer;
      this.avatarUrl = this.avatarService.generateAvatar(this.player);
      this.setSkills();
    });
  }

  setSkills(): void {
    const keeper = [
      { name: 'diving', level: this.player?.skills.diving },
      { name: 'handling', level: this.player?.skills.handling },
      { name: 'kicking', level: this.player?.skills.kicking },
      { name: 'reflexes', level: this.player?.skills.reflexes },
      { name: 'positioning', level: this.player?.skills.positioning },
    ];
    const defending = [
      { name: 'tackling', level: this.player?.skills.tackling },
      { name: 'marking', level: this.player?.skills.marking },
      { name: 'interception', level: this.player?.skills.interception }
    ];
    const playmaking = [
      { name: 'ballControl', level: this.player?.skills.ballControl },
      { name: 'dribbling', level: this.player?.skills.dribbling },
      { name: 'passing', level: this.player?.skills.passing },
      { name: 'crossing', level: this.player?.skills.crossing },
      { name: 'strength', level: this.player?.skills.strength },
      { name: 'stamina', level: this.player?.skills.stamina }
    ];
    const winger = [
      { name: 'crossing', level: this.player?.skills.crossing },
      { name: 'dribbling', level: this.player?.skills.dribbling },
      { name: 'passing', level: this.player?.skills.passing },
      { name: 'vision', level: this.player?.skills.vision },
      { name: 'stamina', level: this.player?.skills.stamina },
    ];
    const passing = [
      { name: 'passing', level: this.player?.skills.passing },
      { name: 'crossing', level: this.player?.skills.crossing },
      { name: 'vision', level: this.player?.skills.vision },
      { name: 'teamwork', level: this.player?.skills.teamwork }
    ];
    const scoring = [
      { name: 'shooting', level: this.player?.skills.shooting },
      { name: 'ballControl', level: this.player?.skills.ballControl },
      { name: 'heading', level: this.player?.skills.heading },
      { name: 'pace', level: this.player?.skills.pace },
      { name: 'composure', level: this.player?.skills.composure },
    ];
    const setPieces = [
      { name: 'shooting', level: this.player?.skills.shooting },
      { name: 'strength', level: this.player?.skills.strength },
      { name: 'ballControl', level: this.player?.skills.ballControl },
      { name: 'vision', level: this.player?.skills.vision },
      { name: 'composure', level: this.player?.skills.composure },
      { name: 'teamwork', level: this.player?.skills.teamwork },
    ];
    this.generalSkills = [
      { name: 'Keeper', level: this.averageSkills(keeper) },
      { name: 'Defending', level: this.averageSkills(defending) },
      { name: 'Playmaking', level: this.averageSkills(playmaking) },
      { name: 'Winger', level: this.averageSkills(winger) },
      { name: 'Passing', level: this.averageSkills(passing) },
      { name: 'Scoring', level: this.averageSkills(scoring) },
      { name: 'Set Pieces', level: this.averageSkills(setPieces) }
    ];
    this.physical = [
      { name: 'Pace', level: this.player?.skills.pace ?? 0 },
      { name: 'Stamina', level: this.player?.skills.stamina ?? 0 },
      { name: 'Strength', level: this.player?.skills.strength ?? 0 },
      { name: 'Agility', level: this.player?.skills.agility ?? 0 },
      { name: 'Balance', level: this.player?.skills.balance ?? 0 },
    ];
    this.technical = [
      { name: 'Shooting', level: this.player?.skills.shooting ?? 0 },
      { name: 'Passing', level: this.player?.skills.passing ?? 0 },
      { name: 'Dribbling', level: this.player?.skills.dribbling ?? 0 },
      { name: 'BallControl', level: this.player?.skills.ballControl ?? 0 },
      { name: 'Crossing', level: this.player?.skills.crossing ?? 0 },
      { name: 'Heading', level: this.player?.skills.heading ?? 0 },
    ];
    this.mental = [
      { name: 'Vision', level: this.player?.skills.vision ?? 0 },
      { name: 'Composure', level: this.player?.skills.composure ?? 0 },
      { name: 'Leadership', level: this.player?.skills.leadership ?? 0 },
      { name: 'Teamwork', level: this.player?.skills.teamwork ?? 0 },
      { name: 'Attak workRate', level: this.player?.skills.workRate.attack ?? 0 },
      { name: 'Defense workRate', level: this.player?.skills.workRate.defense ?? 0 },
    ];
    this.defensive = [
      { name: 'Tackling', level: this.player?.skills.tackling ?? 0 },
      { name: 'Marking', level: this.player?.skills.marking ?? 0 },
      { name: 'Interception', level: this.player?.skills.interception ?? 0 }
    ];
  }

  onChangeView(){
    this.isExpended = !this.isExpended;
  }
  averageSkills(skills: any[]){
    let sum = 0;
    skills.forEach(skill => {sum+=skill.level});

    return Math.round(sum / skills.length);
  }
}
