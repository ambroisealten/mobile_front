import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../competence.service';

@Component({
  selector: 'ons-page',
  templateUrl: './competence-identity.component.html',
  styleUrls: ['./competence-identity.component.css']
})
export class CompetenceIdentityComponent implements OnInit {

  ficheCompetence: any[];

  versionID: string;
  version: string;

  constructor(private competenceService: CompetenceService) { }

  setIdentity(id){
    console.log("je viens bien ici");
    this.competenceService.getFicheCompetence(id);
  }

  ngOnInit() {
    this.ficheCompetence = this.competenceService.getFicheCompetence(1);
    //version = 
    this.competenceService.currentSource.subscribe(this.versionID = "1");
    //this.ficheCompetence = this.competenceService.getFicheCompetence(1);
  }

}
