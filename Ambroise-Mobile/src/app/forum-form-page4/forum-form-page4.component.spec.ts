import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumFormPage4Component } from './forum-form-page4.component';

describe('ForumFormPage4Component', () => {
  let component: ForumFormPage4Component;
  let fixture: ComponentFixture<ForumFormPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumFormPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumFormPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
