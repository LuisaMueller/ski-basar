import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutAmountModalComponent } from './payout-amount-modal.component';

describe('PayoutAmountModalComponent', () => {
  let component: PayoutAmountModalComponent;
  let fixture: ComponentFixture<PayoutAmountModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayoutAmountModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PayoutAmountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
