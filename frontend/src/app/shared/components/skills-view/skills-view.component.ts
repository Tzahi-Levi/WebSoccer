import { Component, Input } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills-view',
  templateUrl: './skills-view.component.html',
  styleUrl: './skills-view.component.scss'
})
export class SkillsViewComponent {
  @Input() title: string = '';
  @Input() skills: Skill[] = [];
}
