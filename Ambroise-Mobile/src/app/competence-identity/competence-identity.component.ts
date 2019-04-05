import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../competence.service';

@Component({
  selector: 'ons-page',
  templateUrl: './competence-identity.component.html',
  styleUrls: ['./competence-identity.component.css']
})
export class CompetenceIdentityComponent implements OnInit {

  ficheCompetence: any[];

  constructor(private competenceService: CompetenceService) { }

  ngOnInit() {
    this.ficheCompetence = this.competenceService.ficheCompetence;
  }

}
