import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillBarComponent } from './shared/components/skill-bar/skill-bar.component';
import { PlayerCardComponent } from './shared/components/player-card/player-card.component';
import { FormationPlayerCardComponent } from './shared/components/formation-player-card/formation-player-card.component';
import { SkillsViewComponent } from './shared/components/skills-view/skills-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquadListComponent } from './shared/components/squad-list/squad-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillBarComponent,
    PlayerCardComponent,
    FormationPlayerCardComponent,
    SkillsViewComponent,
    SquadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
