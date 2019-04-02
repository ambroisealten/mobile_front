import { Component, OnInit } from '@angular/core';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {
  tab1 = Page1Component;
  tab2 = Page2Component;
  tab3 = Page3Component;
  constructor() { }

  ngOnInit() {
  }

}
