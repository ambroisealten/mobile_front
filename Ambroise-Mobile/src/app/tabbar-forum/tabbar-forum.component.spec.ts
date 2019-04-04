import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarForumComponent } from './tabbar-forum.component';

describe('TabbarForumComponent', () => {
  let component: TabbarForumComponent;
  let fixture: ComponentFixture<TabbarForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbarForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbarForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
