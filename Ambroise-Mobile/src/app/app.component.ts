import { Component, ViewChild } from '@angular/core';
import { TabbarCompetenceComponent } from './tabbar-competence/tabbar-competence.component';
import { LoggerService, LogLevel } from './services/logger.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabBar = TabbarCompetenceComponent;
  title = 'Ambroise-Mobile';
  @ViewChild('splitter') splitter;
  constructor() {
    LoggerService.parseLogType(environment.globalLogType);
  }
}
