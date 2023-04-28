import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopGetNumberComponent } from './desktop-get-number.component';

describe('DesktopGetNumberComponent', () => {
  let component: DesktopGetNumberComponent;
  let fixture: ComponentFixture<DesktopGetNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopGetNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopGetNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
