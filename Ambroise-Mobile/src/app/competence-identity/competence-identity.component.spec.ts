import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceIdentityComponent } from './competence-identity.component';

describe('CompetenceIdentityComponent', () => {
  let component: CompetenceIdentityComponent;
  let fixture: ComponentFixture<CompetenceIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
