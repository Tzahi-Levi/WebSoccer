import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillBarComponent } from './shared/components/skill-bar/skill-bar.component';
import { PlayerCardComponent } from './shared/components/player-card/player-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillBarComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
