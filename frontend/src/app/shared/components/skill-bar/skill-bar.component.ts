import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.scss'
})
export class SkillBarComponent {

  @Input() skillName: string = '';
  @Input() skillLevel: number = 0; // Value between 0 and 100
}
