import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSmartphonePage2Component } from './login-smartphone-page2.component';

describe('LoginSmartphonePage2Component', () => {
  let component: LoginSmartphonePage2Component;
  let fixture: ComponentFixture<LoginSmartphonePage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSmartphonePage2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSmartphonePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
