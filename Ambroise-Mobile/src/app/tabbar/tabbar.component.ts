import { Component} from '@angular/core';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';
import { MenuService } from '../services/MenuService.service';

@Component({
  selector: 'ons-page',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent{
  tab1 = Page1Component;
  tab2 = Page2Component;
  tab3 = Page3Component;

  constructor(private menuService: MenuService) { }

  openMenu() {
    this.menuService.open();
  }

}
