import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreRootComponent } from './offre-root.component';

describe('OffreRootComponent', () => {
  let component: OffreRootComponent;
  let fixture: ComponentFixture<OffreRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
