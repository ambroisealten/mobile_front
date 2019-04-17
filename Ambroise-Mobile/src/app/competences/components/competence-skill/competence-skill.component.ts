import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CompetenceService } from '../../services/competence.service';

@Component({
  selector: 'ons-page',
  templateUrl: './competence-skill.component.html',
  styleUrls: ['./competence-skill.component.scss']
})

// Skill class recuperation Data 
// @author Maxime Maquinghen
export class CompetenceSkillComponent implements OnInit {

  skillCompetence: any[];
  softSkillCompetence: any[];

  constructor(private competenceService: CompetenceService, private change:ChangeDetectorRef) { }

  // OnInit: get new data from Observable (TODO, with the server link)
  // @author Maxime Maquinghen
  ngOnInit() {
    //this.competenceService.currentSource.subscribe((data) => { this.updateData(data) ;this.change.detectChanges()});
    this.skillCompetence = this.competenceService.getSkillFromService(0);
    this.softSkillCompetence = this.competenceService.getSoftSkillFromService(0);
  }

  // (TODO, updata data class)
  // @author Maxime Maquinghen
  updateData(data){
    //this.ficheSkills =  this.competenceService.getFicheCompetence(data);
  }
}
