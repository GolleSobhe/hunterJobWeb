import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseNewComponent } from './entreprise-new.component';

describe('EntrepriseNewComponent', () => {
  let component: EntrepriseNewComponent;
  let fixture: ComponentFixture<EntrepriseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
