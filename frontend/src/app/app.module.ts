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
import { LoginPageComponent } from './shared/components/pages/login-page/login-page.component';
import { HomePageComponent } from './shared/components/pages/home-page/home-page.component';
import { HeaderComponent } from './shared/components/partials/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './shared/components/partials/title/title.component';
import { NgToastModule } from 'ng-angular-popup';
import { InputContainerComponent } from './shared/components/partials/input-container/input-container.component';
import { InputValidationComponent } from './shared/components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './shared/components/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './shared/components/partials/default-button/default-button.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SkillBarComponent,
    PlayerCardComponent,
    FormationPlayerCardComponent,
    SkillsViewComponent,
    SquadListComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    TitleComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
