import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatNewComponent } from './candidat-new.component';

describe('CandidatNewComponent', () => {
  let component: CandidatNewComponent;
  let fixture: ComponentFixture<CandidatNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
