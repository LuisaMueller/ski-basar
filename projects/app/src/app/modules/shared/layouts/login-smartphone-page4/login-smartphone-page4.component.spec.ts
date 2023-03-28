import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSmartphonePage4Component } from './login-smartphone-page4.component';

describe('LoginSmartphonePage4Component', () => {
  let component: LoginSmartphonePage4Component;
  let fixture: ComponentFixture<LoginSmartphonePage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSmartphonePage4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSmartphonePage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
