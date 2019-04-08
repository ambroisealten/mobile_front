import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../competence.service';

@Component({
  selector: 'app-header-competence-mobile',
  templateUrl: './header-competence-mobile.component.html',
  styleUrls: ['./header-competence-mobile.component.scss']
})
export class HeaderCompetenceMobileComponent implements OnInit {

  versionFiche: any[];

  constructor(private competenceService : CompetenceService) { }

  onChange(getVersion){
    this.getVersionFiche(getVersion);
  }

  onPartage(){
    // Appel de la fonction CORDOVA pour le partage
  }

  leftMenu() {
    // 
    // Appel de la fonction d'ouverture du menu 
  }

  getVersionFiche(Version) {
    this.competenceService.getVersionFromService(Version);
  }

  
  ngOnInit() {
    this.versionFiche = this.competenceService.versionFiche;
  }
}
