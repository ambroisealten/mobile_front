import { Component, ViewChild } from '@angular/core';
import { TabbarForumComponent } from './tabbar-forum/tabbar-forum.component';
import { MenuService } from './services/MenuService.service';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideMenu = SideMenuComponent;
  tabBar = TabbarForumComponent;

  title = 'Ambroise-Mobile';
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    this.menuService.menu$.subscribe(() => {
      this.splitter.nativeElement.side.open();
    });
  }
}
