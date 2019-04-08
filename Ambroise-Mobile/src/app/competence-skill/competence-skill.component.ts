import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../competence.service';

@Component({
  selector: 'ons-page',
  templateUrl: './competence-skill.component.html',
  styleUrls: ['./competence-skill.component.scss']
})
export class CompetenceSkillComponent implements OnInit {

  SkillCompetence: any[];
  SoftSkillCompetence: any[];

  constructor(private competenceService: CompetenceService) { }

  ngOnInit() {
    this.SkillCompetence = this.competenceService.SkillCompetence;
    this.SoftSkillCompetence = this.competenceService.SoftSkillCompetence;
  }

}
