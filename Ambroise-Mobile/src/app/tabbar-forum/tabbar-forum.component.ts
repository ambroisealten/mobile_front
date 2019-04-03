import { Component } from '@angular/core';
import { ForumFormPage1Component } from '../forum-form-page1/forum-form-page1.component';
import { ForumFormPage2Component } from '../forum-form-page2/forum-form-page2.component';
import { ForumFormPage3Component } from '../forum-form-page3/forum-form-page3.component';
import { ForumFormPage4Component } from '../forum-form-page4/forum-form-page4.component';
import { ForumFormPage5Component } from '../forum-form-page5/forum-form-page5.component';

@Component({
  selector: 'ons-page',
  templateUrl: './tabbar-forum.component.html',
  styleUrls: ['./tabbar-forum.component.scss']
})
export class TabbarForumComponent {
  forumTab1 = ForumFormPage1Component;
  forumTab2 = ForumFormPage2Component;
  forumTab3 = ForumFormPage3Component;
  forumTab4 = ForumFormPage4Component;
  forumTab5 = ForumFormPage5Component;
  
  constructor() { }
}
