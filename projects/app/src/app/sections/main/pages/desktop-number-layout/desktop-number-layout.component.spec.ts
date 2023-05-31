import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopNumberLayoutComponent } from './desktop-number-layout.component';

describe('DesktopNumberLayoutComponent', () => {
  let component: DesktopNumberLayoutComponent;
  let fixture: ComponentFixture<DesktopNumberLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopNumberLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopNumberLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
