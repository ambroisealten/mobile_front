import { Component, ViewChild } from '@angular/core';
import { TabbarComponent } from './tabbar/tabbar.component';
import { MenuService } from './services/MenuService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabBar = TabbarComponent;
  title = 'Ambroise-Mobile';
  @ViewChild('splitter') splitter;
  constructor(private menuService: MenuService) {
    this.menuService.menu$.subscribe(() => {
      this.splitter.nativeElement.side.open();
    });
  }
}
