import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatRootComponent } from './candidat-root.component';

describe('CandidatRootComponent', () => {
  let component: CandidatRootComponent;
  let fixture: ComponentFixture<CandidatRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
