import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumFormPage5Component } from './forum-form-page5.component';

describe('ForumFormPage5Component', () => {
  let component: ForumFormPage5Component;
  let fixture: ComponentFixture<ForumFormPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumFormPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumFormPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
