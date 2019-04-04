import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenMatriceComponent } from './competen-matrice.component';

describe('CompetenMatriceComponent', () => {
  let component: CompetenMatriceComponent;
  let fixture: ComponentFixture<CompetenMatriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenMatriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenMatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
