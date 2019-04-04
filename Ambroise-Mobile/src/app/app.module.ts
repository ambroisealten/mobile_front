import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { MenuService } from './services/MenuService.service';

import { TabbarForumComponent } from './tabbar-forum/tabbar-forum.component';
import { ForumFormPage1Component } from './forum-form-page1/forum-form-page1.component';
import { ForumFormPage2Component } from './forum-form-page2/forum-form-page2.component';
import { ForumFormPage3Component } from './forum-form-page3/forum-form-page3.component';
import { ForumFormPage4Component } from './forum-form-page4/forum-form-page4.component';
import { ForumFormPage5Component } from './forum-form-page5/forum-form-page5.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MenuBurgerComponent,
    TabbarForumComponent,
    ForumFormPage1Component,
    ForumFormPage2Component,
    ForumFormPage3Component,
    ForumFormPage4Component,
    ForumFormPage5Component
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    SideMenuComponent,
    MenuBurgerComponent,
    TabbarForumComponent,
    ForumFormPage1Component,
    ForumFormPage2Component,
    ForumFormPage3Component,
    ForumFormPage4Component,
    ForumFormPage5Component
  ],
})
export class AppModule { }
