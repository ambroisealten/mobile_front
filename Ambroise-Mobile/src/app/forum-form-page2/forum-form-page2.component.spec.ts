import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumFormPage2Component } from './forum-form-page2.component';

describe('ForumFormPage2Component', () => {
  let component: ForumFormPage2Component;
  let fixture: ComponentFixture<ForumFormPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumFormPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumFormPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
