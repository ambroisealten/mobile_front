import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPersonComponent } from './information-person.component';

describe('InformationPersonComponent', () => {
  let component: InformationPersonComponent;
  let fixture: ComponentFixture<InformationPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
