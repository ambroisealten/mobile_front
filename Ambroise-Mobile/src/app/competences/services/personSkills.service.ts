import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person, PersonRole } from '../models/person';
import { catchError, timeout } from 'rxjs/operators';
import { LoggerService, LogLevel } from 'src/app/services/logger.service';
import { ErrorService } from 'src/app/services/error.service';

@Injectable()
/**
* Service to handle person creation and update in skills module
*/
export class PersonSkillsService {

  constructor(private httpClient: HttpClient,
    private errorService: ErrorService) { }

  token = window.sessionStorage.getItem("bearerToken");
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token != "" ? this.token : '' // TO-DO : En attente du WebService Login pour la récuperation du token
  });
  options = { headers: this.headers };
  
  /**
   * HTTP Get request to get a Person given its mail
   * @param  mail Person's mail
   */
  getPersonByMail(mail: String) {
    return this.httpClient
      .get<Person>(environment.serverAddress + '/person/' + mail, this.options)
      .pipe(timeout(5000), catchError(error => this.errorService.handleError(error)));
  }

}
