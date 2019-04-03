import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumFormPage3Component } from './forum-form-page3.component';

describe('ForumFormPage3Component', () => {
  let component: ForumFormPage3Component;
  let fixture: ComponentFixture<ForumFormPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumFormPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumFormPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
