import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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

  constructor(private competenceService: CompetenceService, private change:ChangeDetectorRef) { 
  }

  ngOnInit() {
    this.competenceService.currentSource.subscribe((data) => { this.updateData(data) ;this.change.detectChanges()});
  }

  updateData(data){
    this.ficheCompetence =  this.competenceService.getFicheCompetence(data);
  }

}
