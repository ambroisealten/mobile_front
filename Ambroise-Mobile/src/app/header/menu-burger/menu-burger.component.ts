import { Component } from '@angular/core';
import { MenuService } from '../../services/MenuService.service';

@Component({
  selector: 'ons-page',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent {

  constructor(private menuService: MenuService) { }

  openMenu() {
    this.menuService.open();
  }
  
}
