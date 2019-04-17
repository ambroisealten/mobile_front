import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumFormPage1Component } from './forum-form-page1.component';

describe('ForumFormPage1Component', () => {
  let component: ForumFormPage1Component;
  let fixture: ComponentFixture<ForumFormPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumFormPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumFormPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
