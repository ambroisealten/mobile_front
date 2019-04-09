import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject  } from 'rxjs';
import { LoggerService, LogLevel } from './logger.service';
import { CompetenceIdentityComponent } from '../competence-identity/competence-identity.component';
import { ficheCompetence } from '../class/ficheCompetence';

@Injectable({
  providedIn: 'root'
})

export class CompetenceService {

  private versionSource = new BehaviorSubject(1);
  currentSource = this.versionSource.asObservable();

  changeSource(version) {
    version = this.getVersionSelectionFromService(version);
    LoggerService.log("this.versionSource Avant  : " + this.versionSource.value, LogLevel.JOKE);
    this.versionSource.next(version);
    LoggerService.log("this.versionSource Après  : " + this.versionSource.value, LogLevel.JOKE);
  }

  ficheCompetence =  [
    {
      id: '1',
      NameOfFiche: "MMA010718MM",
      NomPersonne: "MAQUINGHEN",
      PrenomPersonne: "Maxime",
      StatutPersonne: "consultant",
      DiplomeFiche: "Epitech",
      EmployeurFiche: "Alten",
      metierFiche: "Chef de Projet",
      DisponibiliteFiche: "07/01/2019",
      AnneediplomeFiche: "2019",
      SalaireFiche: "15000€/an",
      AvisFiche: "+++",
      CommentaireFiche: "très correct à engager en urgence",
    },
    {
      id: '2',
      NameOfFiche: "MMA010848MM",
      NomPersonne: "MAQUINGHEM",
      PrenomPersonne: "Maxime",
      StatutPersonne: "Candidat",
      DiplomeFiche: "Epitech",
      EmployeurFiche: "/",
      metierFiche: "Developpeur",
      DisponibiliteFiche: "07/01/2019",
      AnneediplomeFiche: "2019",
      SalaireFiche: "7500/an",
      AvisFiche: "+++",
      CommentaireFiche: "très correct à engager en urgence",
    },
    {
      id: '3',
      NameOfFiche: "MMA01083MM",
      NomPersonne: "MAQUINGHEM",
      PrenomPersonne: "Maxime",
      StatutPersonne: "Candidat",
      DiplomeFiche: "Epitech",
      EmployeurFiche: "/",
      metierFiche: "Developpeur",
      DisponibiliteFiche: "07/01/2019",
      AnneediplomeFiche: "2019",
      SalaireFiche: "7500/an",
      AvisFiche: "+++",
      CommentaireFiche: "très correct à engager en urgence",
    },
  ];

  SkillCompetence = [
    {
      id: '1',
      name: 'python',
      note: "4",
    },
    {
      name: 'c++',
      note: "3",
    },
    {
      name: "Angular",
      note: "3",
    }
  ];

  SoftSkillCompetence = [
    {
      name: 'Gestion de Projet',
      note: "4",
    },
    {
      name: 'Cycle en V',
      note: "4",
    }
  ];

  MatriceCompetence = {

  }; 

  CvCompetence = {

  };

  versionFiche = [
    {
      id: '1',
      name: 'Mars 2019',
      test: 'Bonjour'
    },
    {
      id: '2',
      name: 'Février 2018',
      test : "OSKOUR"
    },
    {
      id: '3',
      name: 'Janvier 2018',
      test : "KYKY"
    }
  ];
  //API_URL: string = "/api/";

  constructor(/*private http: HttpClient*/) {
    //console.log(this.getFicheCompetence(1));
   }

  /*getIdentityFromService(callback){
    this.http
        .get('http://localhost:4200/')
        .subscribe(data => {
          callback(JSON.stringify(data));
        },  error => {
          console.log(error);
        });
      }
    */  
    //this.ficheCompetence = "toto"//requete;

  getFicheCompetence(id){
    var fiche =  new ficheCompetence(this.ficheCompetence[id-1]);
    return fiche;
  }

  getSkillFromService(/*callback   mail, nameOfFiche*/){
    //this.SkillCompetence == this.http.get(this.API_URL + 'skill/' + mail + nameOfFiche);
  }

  getSoftSkillFromService(){

  }

  getMatriceFromService(){

  }

  getCvFromService(){

  }

  getDataFromVersion(version){
    // retourne la data de la fiche.
    return version;
  }

  getVersionSelectionFromService(Version) {
    for(let i = 0; i < this.versionFiche.length;i++){
      if(this.versionFiche[i].name == Version){
        return this.versionFiche[i].id;
        //return this.versionFiche[i].id;
      }
    }
  }

  getVersionFromService() {
    return (this.versionFiche);
  }

  ngOnInit() {
  }
}
