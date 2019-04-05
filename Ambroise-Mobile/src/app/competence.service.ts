import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
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

  
  constructor(/*private httpClient: HttpClient*/) { }

  /*getIdentityFromService(callback){
    this.httpClient
        .get('http://localhost:4200/')
        .subscribe(data => {
          callback(JSON.stringify(data));
        },  error => {
          console.log(error);
        });
      }
      
    //this.ficheCompetence = "toto"//requete;
*/
  getSkillFromService(){

  }

  getSoftSkillFromService(){

  }

  getMatriceFromService(){

  }

  getCvfromService(){

  }
}
