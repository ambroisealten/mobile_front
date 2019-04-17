import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';
import { ficheCompetence } from '../../class/ficheCompetence';
//import { ficheSkill } from '../class/ficheSkill';


@Injectable({
  providedIn: 'root'
})

export class CompetenceService {

  private versionSource = new BehaviorSubject(1);
  currentSource = this.versionSource.asObservable();

  changeSource(version) {
    version = this.getVersionSelectionFromService(version);
    this.versionSource.next(version);
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
      StatutPersonne: "MDR",
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
    },
    {
      name: 'PHP',
      note: "3",
    },
    {
      name: 'JavaEE',
      note: "2",
    },
    {
      name: "MongoDB",
      note: "1",
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

  constructor() {
   }


  getFicheCompetence(id){
    for(let i = 0; i<this.ficheCompetence.length;i++){
      if(this.ficheCompetence[i].id == id){
        return new ficheCompetence(this.ficheCompetence[i]);
      }
    }
    return null;
  }

  getSkillFromService(id){
    return this.SkillCompetence;
  }

  getSoftSkillFromService(id){
    return this.SoftSkillCompetence;
  }

  getMatriceFromService(){

  }

  getCvFromService(){

  }

  getDataFromVersion(version){
    return version;
  }

  getVersionSelectionFromService(Version) {
    for(let i = 0; i < this.versionFiche.length;i++){
      if(this.versionFiche[i].name == Version){
        return this.versionFiche[i].id;
      }
    }
  }

  getVersionFromService() {
    return (this.versionFiche);
  }

  ngOnInit() {
  }
}
