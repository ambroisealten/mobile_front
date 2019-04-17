//  MODULES NEEDED
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//  ROUTING MODULE
import { CompetencesRoutingModule } from './competences-routing.module';

//  COMPONENTS
import { CompetenceCvComponent } from './components/competence-cv/competence-cv.component';
import { CompetenceIdentityComponent } from './components/competence-identity/competence-identity.component';
import { CompetenceMatriceComponent } from './components/competence-matrice/competence-matrice.component';
import { CompetenceSkillComponent } from './components/competence-skill/competence-skill.component';
import { TabbarCompetenceComponent } from './components/tabbar-competence/tabbar-competence.component';

//  FEATURE MODULE NEEDED
import { HeaderModule } from '../header/header.module';
import { CompetenceService } from './services/competence.service';

@NgModule({
  declarations: [
    CompetenceCvComponent,
    CompetenceIdentityComponent,
    CompetenceMatriceComponent,
    CompetenceSkillComponent,
    TabbarCompetenceComponent
  ],
  imports: [
    CommonModule,
    CompetencesRoutingModule,
    HeaderModule,
    OnsenModule
  ],
  exports: [
  ],
  providers: [
    CompetenceService
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompetencesModule { }
