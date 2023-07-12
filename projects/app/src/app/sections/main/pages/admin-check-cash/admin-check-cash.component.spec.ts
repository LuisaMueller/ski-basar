import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckCashComponent } from './admin-check-cash.component';

describe('AdminCheckCashComponent', () => {
  let component: AdminCheckCashComponent;
  let fixture: ComponentFixture<AdminCheckCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCheckCashComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCheckCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
