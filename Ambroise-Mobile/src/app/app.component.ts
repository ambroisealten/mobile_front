import { Component, ViewChild } from '@angular/core';
import { TabbarForumComponent } from './tabbar-forum/tabbar-forum.component';
import { TabbarCompetenceComponent } from './tabbar-competence/tabbar-competence.component';
import { MenuService } from './services/MenuService.service';
import { ContentPageComponent } from './content-page/content-page.component';
import { LoggerService, LogLevel } from './services/logger.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabBar = TabbarCompetenceComponent;
  sidePage = ContentPageComponent;
  title = 'Ambroise-Mobile';
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    LoggerService.parseLogType(environment.globalLogType);
    this.menuService.menu$.subscribe(() => {
      this.splitter.nativeElement.side.open();
    });
  }
}
