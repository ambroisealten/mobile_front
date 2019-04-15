import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CompetenceService } from '../services/competence.service';

@Component({
  selector: 'ons-page',
  templateUrl: './competence-skill.component.html',
  styleUrls: ['./competence-skill.component.scss']
})
export class CompetenceSkillComponent implements OnInit {

  //ficheSkills: ficheSkill;
  skillCompetence: any[];
  softSkillCompetence: any[];

  constructor(private competenceService: CompetenceService, private change:ChangeDetectorRef) { }

  ngOnInit() {
    //this.competenceService.currentSource.subscribe((data) => { this.updateData(data) ;this.change.detectChanges()});
    this.skillCompetence = this.competenceService.getSkillFromService(0);
    this.softSkillCompetence = this.competenceService.getSoftSkillFromService(0);
  }

  updateData(data){
    //this.ficheSkills =  this.competenceService.getFicheCompetence(data);
  }
}
