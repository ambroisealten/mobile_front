import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarCompetenceComponent } from './tabbar-competence.component';

describe('TabbarCompetenceComponent', () => {
  let component: TabbarCompetenceComponent;
  let fixture: ComponentFixture<TabbarCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbarCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbarCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
