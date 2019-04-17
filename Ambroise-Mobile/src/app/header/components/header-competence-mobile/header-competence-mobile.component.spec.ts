import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompetenceMobileComponent } from './header-competence-mobile.component';

describe('HeaderCompetenceMobileComponent', () => {
  let component: HeaderCompetenceMobileComponent;
  let fixture: ComponentFixture<HeaderCompetenceMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCompetenceMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCompetenceMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
