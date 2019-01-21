import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDisplayComponent } from './offre-display.component';

describe('OffreDisplayComponent', () => {
  let component: OffreDisplayComponent;
  let fixture: ComponentFixture<OffreDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
