import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompetenceSkillComponent } from './competence-skill/competence-skill.component';
import { CompetenceIdentityComponent } from './competence-identity/competence-identity.component';
import { CompetenceCvComponent } from './competence-cv/competence-cv.component';
import { CompetenceMatriceComponent } from './competence-matrice/competence-matrice.component';


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
import { UiTemplateComponent } from './ui-template/ui-template.component';

import { HeaderCompetenceMobileComponent } from './header-competence-mobile/header-competence-mobile.component';
import { CompetenceService } from './services/competence.service';
import { TabbarCompetenceComponent } from './tabbar-competence/tabbar-competence.component';
import { TabbarComponent } from './tabbar/tabbar.component';

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
    ForumFormPage5Component,
    UiTemplateComponent,
    CompetenceSkillComponent,
    CompetenceIdentityComponent,
    CompetenceCvComponent,
    CompetenceMatriceComponent,
    TabbarCompetenceComponent,
    HeaderCompetenceMobileComponent,
    TabbarComponent,
  ],
  imports: [
    BrowserModule,
    OnsenModule,
  ],
  providers: [
    CompetenceService,
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
    ForumFormPage5Component,
    CompetenceSkillComponent,
    CompetenceIdentityComponent,
    CompetenceCvComponent,
    CompetenceMatriceComponent,
    TabbarCompetenceComponent
  ],
})
export class AppModule { }
