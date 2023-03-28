import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSmartphonePage3Component } from './login-smartphone-page3.component';

describe('LoginSmartphonePage3Component', () => {
  let component: LoginSmartphonePage3Component;
  let fixture: ComponentFixture<LoginSmartphonePage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSmartphonePage3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSmartphonePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
