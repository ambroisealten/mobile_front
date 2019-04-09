import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../services/competence.service';
import { LoggerService, LogLevel } from '../services/logger.service';
import { ficheCompetence } from '../class/ficheCompetence';

@Component({
  selector: 'ons-page',
  templateUrl: './competence-identity.component.html',
  styleUrls: ['./competence-identity.component.css']
})
export class CompetenceIdentityComponent implements OnInit {

  ficheCompetence: ficheCompetence;
  versionID: string;
  version: string;

  constructor(private competenceService: CompetenceService) { }

  setIdentity(id){
    LoggerService.log("ça passe ici", LogLevel.JOKE);
    this.competenceService.getFicheCompetence(id);
  }

  ngOnInit() {
    //this.ficheCompetence = this.competenceService.getFicheCompetence(1);
    //version = 
    console.log("ok");

    this.competenceService.currentSource.subscribe(data => {var tmp = Object.assign(ficheCompetence,this.competenceService.getFicheCompetence(data)); this.ficheCompetence = new ficheCompetence(tmp);});
    console.log(this.ficheCompetence);
    //this.ficheCompetence = this.competenceService.getFicheCompetence(1);
  }

}
