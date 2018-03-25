import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOffreComponent } from './creation-offre.component';

describe('CreationOffreComponent', () => {
  let component: CreationOffreComponent;
  let fixture: ComponentFixture<CreationOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
