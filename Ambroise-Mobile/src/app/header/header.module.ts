//  MODULES NEEDED
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  COMPONENTS
import { MenuBurgerComponent } from './components/menu-burger/menu-burger.component';


@NgModule({
  declarations: [
    MenuBurgerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuBurgerComponent,
  ]
})
export class HeaderModule { }
