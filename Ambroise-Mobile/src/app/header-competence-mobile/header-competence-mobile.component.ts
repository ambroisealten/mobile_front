import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../services/competence.service';
import { CompetenceIdentityComponent } from '../competence-identity/competence-identity.component';


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
    this.getVersionFiche(getVersion);
    this.versionId = this.competenceService.getVersionSelectionFromService(getVersion);

    //this.competenceService.currentSource.subscribe(versionId => this.versionId = this.versionId);
    this.competenceService.changeSource(getVersion);
  }

  onPartage(){
    // Appel de la fonction CORDOVA pour le partage
  }

  leftMenu() {
    // 
    // Appel de la fonction d'ouverture du menu 
  }

  getVersionFiche(Version) {
    this.versionId = this.competenceService.getVersionSelectionFromService(Version);
    this.competenceService.getFicheCompetence(this.versionId);
    
    //this.setFiche.setIdentity(this.versionId);

    //this.actualVersionfiche = this.competenceService.getVersionSelectionFromService(this.actualVersionfiche);
    //console.log(this.actualVersionfiche);
    //console.log(this.competenceService.getVersionFromService());
  }

  ngOnInit() {
    //this.competenceService.currentSource.subscribe(versionId => this.versionId = "1");

    this.versionsFiche = this.competenceService.getVersionFromService();
    this.actualVersionfiche = this.competenceService.getDataFromVersion('1');
  }
}
