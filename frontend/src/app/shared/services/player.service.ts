import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { SQUAD_PLAYER_BY_ID_URL, SQUAD_URL } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient){}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(SQUAD_URL);
  }

  getPlayerById(id: number): Observable<Player> {
    return this.http.get<Player>(SQUAD_PLAYER_BY_ID_URL + id);
  }
}
