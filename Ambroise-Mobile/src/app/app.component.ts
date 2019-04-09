import { Component } from '@angular/core';
import { LoggerService, LogLevel } from './services/logger.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    LoggerService.parseLogType(environment.globalLogType);
    LoggerService.log("PROD", LogLevel.PROD);
    LoggerService.log("JOKE", LogLevel.JOKE);
  }
}
