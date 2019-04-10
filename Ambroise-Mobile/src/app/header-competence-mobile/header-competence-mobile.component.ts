import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../services/competence.service';
import { CompetenceIdentityComponent } from '../competence-identity/competence-identity.component';
import { LoggerService, LogLevel } from '../services/logger.service';


@Component({
  selector: 'app-header-competence-mobile',
  templateUrl: './header-competence-mobile.component.html',
  styleUrls: ['./header-competence-mobile.component.scss']
})
export class HeaderCompetenceMobileComponent implements OnInit  {

  versionsFiche: any[];
  actualVersionfiche: String;
  contenuFiche : String;
  versionId: String;

  constructor(private competenceService : CompetenceService) { }

  onChange(getVersion){
    this.competenceService.changeSource(getVersion);
  }

  onPartage(){
    // Appel de la fonction CORDOVA pour le partage
  }

  leftMenu() {
    // 
    // Appel de la fonction d'ouverture du menu 
  }

  ngOnInit() {
    this.versionsFiche = this.competenceService.getVersionFromService();
  }
}
