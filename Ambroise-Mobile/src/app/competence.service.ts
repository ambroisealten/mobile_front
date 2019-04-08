import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*
  Class d'envois et de réception de données depuis le serveur 
*/
export class CompetenceService {

  ficheCompetence =  [
    {
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
      /*
      {
      name: 'Nom de la fiche ',
      data: "010718MM",
    }, ...
      */
    }
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
      name: 'Mars 2019',
    },
    {
      name: 'Février 2018',
    },
    {
      name: 'Janvier 2018',
    }
  ];
  //API_URL: string = "/api/";

  constructor(/*private http: HttpClient*/) { }

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

  getSkillFromService(/*callback   mail, nameOfFiche*/){
    //this.SkillCompetence == this.http.get(this.API_URL + 'skill/' + mail + nameOfFiche);
  }

  getSoftSkillFromService(){

  }

  getMatriceFromService(){

  }

  getCvFromService(){

  }

  getVersionSelectionFromService() {

  }

  getVersionFromService(Version) {
    console.log(Version);
  }

}
