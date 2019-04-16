import { LoggerService, LogLevel } from './services/logger.service';
import { environment } from 'src/environments/environment';
import { Component, ViewChild } from '@angular/core';
import { MenuService } from './services/MenuService.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { TabbarForumComponent } from './tabbar-forum/tabbar-forum.component';
import { TabbarCompetenceComponent } from './tabbar-competence/tabbar-competence.component';
import { TabbarComponent } from './tabbar/tabbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideMenu = SideMenuComponent;
  burgerMenu = MenuBurgerComponent;
  tabBar = TabbarComponent;

  title = 'Ambroise-Mobile';
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    //LoggerService.parseLogType(environment.globalLogType);
    this.menuService.menu$.subscribe(() => {
      this.splitter.nativeElement.side.open();
    });
  }
}
