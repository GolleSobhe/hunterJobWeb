import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmailMessageComponent } from './confirm-email-message.component';

describe('ConfirmEmailMessageComponent', () => {
  let component: ConfirmEmailMessageComponent;
  let fixture: ComponentFixture<ConfirmEmailMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmEmailMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEmailMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
