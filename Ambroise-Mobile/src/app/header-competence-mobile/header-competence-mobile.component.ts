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
    console.log("lol");
  }

  leftMenu() {
    console.log("ok");
  }

  getVersionFiche(Version) {
    this.competenceService.getVersionFromService(Version);
  }

  ngOnInit() {
    this.versionFiche = this.competenceService.versionFiche;
  }

}
