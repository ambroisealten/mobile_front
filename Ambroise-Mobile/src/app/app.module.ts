import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompetenceSkillComponent } from './competence-skill/competence-skill.component';
import { CompetenceIdentityComponent } from './competence-identity/competence-identity.component';
import { CompetenceCvComponent } from './competence-cv/competence-cv.component';
import { CompetenMatriceComponent } from './competen-matrice/competen-matrice.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetenceSkillComponent,
    CompetenceIdentityComponent,
    CompetenceCvComponent,
    CompetenMatriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
