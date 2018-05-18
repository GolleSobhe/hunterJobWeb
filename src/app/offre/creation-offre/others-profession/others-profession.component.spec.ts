import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersProfessionComponent } from './others-profession.component';

describe('OthersProfessionComponent', () => {
  let component: OthersProfessionComponent;
  let fixture: ComponentFixture<OthersProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
