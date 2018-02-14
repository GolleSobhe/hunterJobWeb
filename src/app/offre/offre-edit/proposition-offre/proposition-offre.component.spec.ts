import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionOffreComponent } from './proposition-offre.component';

describe('PropositionOffreComponent', () => {
  let component: PropositionOffreComponent;
  let fixture: ComponentFixture<PropositionOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
