import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompetenceSkillComponent } from './competence-skill/competence-skill.component';
import { CompetenceIdentityComponent } from './competence-identity/competence-identity.component';
import { CompetenceCvComponent } from './competence-cv/competence-cv.component';
import { CompetenceMatriceComponent } from './competence-matrice/competence-matrice.component';


import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



import { TabbarCompetenceComponent } from './tabbar-competence/tabbar-competence.component';
import { CompetenceService } from './services/competence.service';
import { HeaderCompetenceMobileComponent } from './header-competence-mobile/header-competence-mobile.component';



@NgModule({
  declarations: [
    AppComponent,
    CompetenceSkillComponent,
    CompetenceIdentityComponent,
    CompetenceCvComponent,
    CompetenceMatriceComponent,
    TabbarCompetenceComponent,
    HeaderCompetenceMobileComponent,
  ],
  imports: [
    BrowserModule,
    OnsenModule,
  ],
  providers: [
    CompetenceService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    CompetenceSkillComponent,
    CompetenceIdentityComponent,
    CompetenceCvComponent,
    CompetenceMatriceComponent,
    TabbarCompetenceComponent
  ],
})
export class AppModule { }
