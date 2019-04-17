import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceSkillComponent } from './competence-skill.component';

describe('CompetenceSkillComponent', () => {
  let component: CompetenceSkillComponent;
  let fixture: ComponentFixture<CompetenceSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
