import { Component} from '@angular/core';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';
import { MenuService } from '../services/MenuService.service';

export class TabLink{
  name : string;
  typeIcon : string;
  page : any;

  constructor(name : string, typeIcon : string, page){
    this.name = name;
    this.typeIcon = typeIcon;
    this.page = page;
  }
}

@Component({
  selector: 'ons-page',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent{
  tab1 = Page1Component;
  tab2 = Page2Component;
  tab3 = Page3Component;
  test : string = "Bonjour";
  tabLinkList = {
    "mission" : [
      new TabLink("Missions","ion-home",this.tab1),
      new TabLink("Clients","ion-home",this.tab2),
      new TabLink("Consultants","ion-home",this.tab3)
    ]
  };

  constructor(private menuService: MenuService) { }

  openMenu() {
    this.menuService.open();
  }

}
