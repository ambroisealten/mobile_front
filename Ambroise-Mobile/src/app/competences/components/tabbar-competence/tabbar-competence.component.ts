import { Component, OnInit } from '@angular/core';
import { CompetenceIdentityComponent } from '../../../../app/competences/components/competence-identity/competence-identity.component';
import { CompetenceSkillComponent } from '../../../../app/competences/components/competence-skill/competence-skill.component';
import { CompetenceMatriceComponent } from '../../../../app/competences/components/competence-matrice/competence-matrice.component';
import { CompetenceCvComponent } from '../../../../app/competences/components/competence-cv/competence-cv.component';


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
