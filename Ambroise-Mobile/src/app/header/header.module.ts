//  MODULES NEEDED
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


//  COMPONENTS
import { MenuBurgerComponent } from './components/menu-burger/menu-burger.component';



@NgModule({
  declarations: [
    MenuBurgerComponent,
  ],
  imports: [
    CommonModule,
    OnsenModule,
  ],
  exports: [
    MenuBurgerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule { }
