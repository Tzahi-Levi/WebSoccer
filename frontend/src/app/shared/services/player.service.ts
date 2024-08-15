import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { SQUAD_PLAYER_BY_ID_URL, SQUAD_URL } from '../constants/urls';
import { Squad } from '../models/squad.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient){}

  getPlayers(userId: string): Observable<Squad[]> {
    return this.http.get<Squad[]>(SQUAD_URL + '/' + userId);
  }

  getPlayerById(userId: string, playerId: string): Observable<Player[]> {
    return this.http.get<Player[]>(SQUAD_PLAYER_BY_ID_URL + userId + '/' + playerId);
  }
}
