import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../services/competence.service';
import { CompetenceIdentityComponent } from '../competence-identity/competence-identity.component';
import { LoggerService, LogLevel } from '../services/logger.service';


@Component({
  selector: 'app-header-competence-mobile',
  templateUrl: './header-competence-mobile.component.html',
  styleUrls: ['./header-competence-mobile.component.scss']
})
// Header class for Mobile app
// @author Maxime Maquinghen
export class HeaderCompetenceMobileComponent implements OnInit  {

  versionsFiche: any[];
  actualVersionfiche: String;
  contenuFiche : String;
  versionId: String;

  constructor(private competenceService : CompetenceService) { }

  // Catch the event for version changement
  // @author Maxime Maquinghen
  onChange(getVersion){
    this.competenceService.changeSource(getVersion);
  }

  // Share button for social media (TODO)
  // @author Maxime Maquinghen
  onPartage(){
    // Appel de la fonction CORDOVA pour le partage
  }

  // LeftGlobalMenu 
  // TODO
  leftMenu() {
    // 
    // Appel de la fonction d'ouverture du menu 
  }

  // Get the list of version from the server
  // @author Maxime Maquinghen
  ngOnInit() {
    this.versionsFiche = this.competenceService.getVersionFromService();
  }
}
