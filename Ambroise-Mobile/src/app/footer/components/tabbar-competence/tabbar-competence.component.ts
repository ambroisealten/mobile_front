import { Component, OnInit } from '@angular/core';
import { CompetenceSkillComponent } from '../competence-skill/competence-skill.component';
import { CompetenceIdentityComponent } from '../competence-identity/competence-identity.component';
import { CompetenceCvComponent } from '../competence-cv/competence-cv.component';
import { CompetenceMatriceComponent } from '../competence-matrice/competence-matrice.component';

@Component({
  selector: 'ons-page',
  templateUrl: './tabbar-competence.component.html',
  styleUrls: ['./tabbar-competence.component.scss']
})
export class TabbarCompetenceComponent implements OnInit {

  competenceTab1 = CompetenceIdentityComponent;
  competenceTab2 = CompetenceSkillComponent;
  competenceTab3 = CompetenceMatriceComponent;
  competenceTab4 = CompetenceCvComponent;

  constructor() { }

  ngOnInit() {
  }

}
