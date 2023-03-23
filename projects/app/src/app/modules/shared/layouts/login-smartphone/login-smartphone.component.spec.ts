import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSmartphoneComponent } from './login-smartphone.component';

describe('LoginSmartphoneComponent', () => {
  let component: LoginSmartphoneComponent;
  let fixture: ComponentFixture<LoginSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSmartphoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
