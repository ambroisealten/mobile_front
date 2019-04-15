import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceMatriceComponent } from './competence-matrice.component';

describe('CompetenceMatriceComponent', () => {
  let component: CompetenceMatriceComponent;
  let fixture: ComponentFixture<CompetenceMatriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceMatriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceMatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
