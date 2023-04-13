import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePayoutAmountModalComponent } from './calculate-payout-amount-modal.component';

describe('CalculatePayoutAmountModalComponent', () => {
  let component: CalculatePayoutAmountModalComponent;
  let fixture: ComponentFixture<CalculatePayoutAmountModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatePayoutAmountModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatePayoutAmountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
