import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calculate-payout-amount-modal',
  templateUrl: './calculate-payout-amount-modal.component.html',
  styleUrls: ['./calculate-payout-amount-modal.component.scss'],
})
export class CalculatePayoutAmountModalComponent {
  // @Input() content: Good;
  @Input() payoutValue: number;
  constructor(public activeModal: NgbActiveModal) {}

  sendSalesDocument() {
    this.payoutValue = 0.000001;
    this.activeModal.close(this.payoutValue);
    //send mail to customer
  }
}
