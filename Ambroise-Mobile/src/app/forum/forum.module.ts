//  MODULES NEEDED
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  ROUTING MODULE
import { ForumRoutingModule } from './forum-routing.module';

//  COMPONENTS
import { ForumFormPage1Component } from './components/forum-form/forum-form-page1/forum-form-page1.component';
import { ForumFormPage2Component } from './components/forum-form/forum-form-page2/forum-form-page2.component';
import { ForumFormPage3Component } from './components/forum-form/forum-form-page3/forum-form-page3.component';
import { ForumFormPage4Component } from './components/forum-form/forum-form-page4/forum-form-page4.component';
import { ForumFormPage5Component } from './components/forum-form/forum-form-page5/forum-form-page5.component';

//  FEATURE MODULE NEEDED
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    ForumFormPage1Component,
    ForumFormPage2Component,
    ForumFormPage3Component,
    ForumFormPage4Component,
    ForumFormPage5Component
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    HeaderModule,
  ]
})
export class ForumModule { }
