import { Component, ViewChild } from '@angular/core';
import { TabbarComponent } from './tabbar/tabbar.component';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabbar = TabbarComponent;
  title = 'Ambroise-Mobile';
  @ViewChild('splitter') splitAtColon;

}
