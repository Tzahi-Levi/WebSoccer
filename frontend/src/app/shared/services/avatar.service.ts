// avatar.service.ts
import { Injectable } from '@angular/core';
import * as Avatars from '@dicebear/avatars';
import * as MaleSprite from '@dicebear/avatars-male-sprites';
import { saveAs } from 'file-saver';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  generateAvatar(player : Player | undefined): string {
    if(player){
      const playerName = player.name.split(" ");
      return `https://robohash.org/${playerName![0]}+${playerName![1]}`;
    } else {
      return `https://robohash.org/bird`;
    }
  }

  saveAvatar(svg: string, fileName: string): void {
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    saveAs(blob, `${fileName}.svg`);
  }
}
