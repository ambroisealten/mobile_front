import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CompetenceService } from '../services/competence.service';
import { LoggerService, LogLevel } from '../services/logger.service';
import { ficheCompetence } from '../class/ficheCompetence';

@Component({
  selector: 'ons-page',
  templateUrl: './competence-identity.component.html',
  styleUrls: ['./competence-identity.component.css']
})
// Récupération des données pour l'affichage de la fiche d'identité 
// @author Maxime Maquinghen
export class CompetenceIdentityComponent implements OnInit {

  ficheCompetence: ficheCompetence;
  versionID: string;
  version: string;

  constructor(private competenceService: CompetenceService, private change:ChangeDetectorRef) { 
  }

  // OnInit: get the lastest version of the identity data compétence. 
  // @author Maxime Maquinghen
  ngOnInit() {
    this.competenceService.currentSource.subscribe((data) => { this.updateData(data) ;this.change.detectChanges()});
  }

  // OnInit: Update the ficheCompetence class with the new data received
  // @author Maxime Maquinghen
  updateData(data){
    this.ficheCompetence =  this.competenceService.getFicheCompetence(data);
  }

}
