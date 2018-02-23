import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskResetPasswordComponent } from './ask-reset-password.component';

describe('AskResetPasswordComponent', () => {
  let component: AskResetPasswordComponent;
  let fixture: ComponentFixture<AskResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
