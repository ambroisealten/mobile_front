import { Component, OnInit } from '@angular/core';
import { ForumFormPage1Component } from '../forum-form-page1/forum-form-page1.component';
import { ForumFormPage2Component } from '../forum-form-page2/forum-form-page2.component';
import { ForumFormPage3Component } from '../forum-form-page3/forum-form-page3.component';
import { ForumFormPage4Component } from '../forum-form-page4/forum-form-page4.component';
import { ForumFormPage5Component } from '../forum-form-page5/forum-form-page5.component';

export class TabLink {
  name : string;
  typeIcon : string;
  page : any;

  constructor (name : string, typeIcon : string, page) {
    this.name = name;
    this.typeIcon = typeIcon;
    this.page = page;
  }
}

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent {
  forumTab1 = ForumFormPage1Component;
  forumTab2 = ForumFormPage2Component;
  forumTab3 = ForumFormPage3Component;
  forumTab4 = ForumFormPage4Component;
  forumTab5 = ForumFormPage5Component;
  
  constructor() { }
  tabLinkList = {
    "mission" : [
      new TabLink("Mobilité", "assets/images/téléchargement.png", this.forumTab1),
      new TabLink("Contrat", "assets/images/téléchargement.png", this.forumTab2),
      new TabLink("Formations", "assets/images/téléchargement.png", this.forumTab3),
      new TabLink("Compétences", "assets/images/téléchargement.png", this.forumTab4),
      new TabLink("Compléments", "assets/images/téléchargement.png", this.forumTab5),
    ]
  }
}
