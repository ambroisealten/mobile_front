import { LoggerService, LogLevel } from './login/services/logger.service';
import { environment } from 'src/environments/environment';
import { Component, ViewChild } from '@angular/core';
import { MenuService } from './services/MenuService.service';
import { SideMenuComponent } from './side-menu/components/side-menu.component';
import { MenuBurgerComponent } from './header/components/menu-burger/menu-burger.component';
import { FooterComponent } from './footer/components/footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideMenu = SideMenuComponent;
  burgerMenu = MenuBurgerComponent;
  tabBar = FooterComponent;

  title = 'Ambroise-Mobile';
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    //LoggerService.parseLogType(environment.globalLogType);
    this.menuService.menu$.subscribe(() => {
      this.splitter.nativeElement.side.open();
    });
  }
}
