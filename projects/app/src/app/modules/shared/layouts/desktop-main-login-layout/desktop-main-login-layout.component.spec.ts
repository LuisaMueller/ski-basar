import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMainLoginLayoutComponent } from './desktop-main-login-layout.component';

describe('DesktopMainLoginLayoutComponent', () => {
  let component: DesktopMainLoginLayoutComponent;
  let fixture: ComponentFixture<DesktopMainLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopMainLoginLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopMainLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
