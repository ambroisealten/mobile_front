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
import { InformationPersonComponent } from './components/information-person/information-person.component';

//  FEATURE MODULE NEEDED
import { HeaderModule } from '../header/header.module';
import { CompetenceService } from './services/competence.service';
import { PersonSkillsService } from './services/personSkills.service';
import { SkillsService } from './services/skills.service';
import { SkillsSheetService } from './services/skillsSheet.service';
import { SkillsHomePageComponent } from './components/skills-home-page/skills-home-page.component';

@NgModule({
  declarations: [
    CompetenceCvComponent,
    CompetenceIdentityComponent,
    CompetenceMatriceComponent,
    CompetenceSkillComponent,
    TabbarCompetenceComponent,
    SkillsHomePageComponent,
    InformationPersonComponent
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
    CompetenceService,
    PersonSkillsService,
    SkillsService,
    SkillsSheetService
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompetencesModule { }
