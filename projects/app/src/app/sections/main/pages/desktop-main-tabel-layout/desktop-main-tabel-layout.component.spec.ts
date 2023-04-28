import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMainTabelLayoutComponent } from './desktop-main-tabel-layout.component';

describe('DesktopMainTabelLayoutComponent', () => {
  let component: DesktopMainTabelLayoutComponent;
  let fixture: ComponentFixture<DesktopMainTabelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopMainTabelLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopMainTabelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
