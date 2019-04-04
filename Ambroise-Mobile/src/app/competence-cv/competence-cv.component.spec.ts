import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceCvComponent } from './competence-cv.component';

describe('CompetenceCvComponent', () => {
  let component: CompetenceCvComponent;
  let fixture: ComponentFixture<CompetenceCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
