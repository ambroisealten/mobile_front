//  MODULES NEEDED
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  ROUTING MODULE
import { CompetencesRoutingModule } from './competences-routing.module';

//  COMPONENTS
import { CompetenceCvComponent } from './components/competence-cv/competence-cv.component';
import { CompetenceIdentityComponent } from './components/competence-identity/competence-identity.component';
import { CompetenceMatriceComponent } from './components/competence-matrice/competence-matrice.component';
import { CompetenceSkillComponent } from './components/competence-skill/competence-skill.component';

//  FEATURE MODULE NEEDED
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    CompetenceCvComponent,
    CompetenceIdentityComponent,
    CompetenceMatriceComponent,
    CompetenceSkillComponent,
  ],
  imports: [
    CommonModule,
    CompetencesRoutingModule,
    HeaderModule,
  ]
})
export class CompetencesModule { }
