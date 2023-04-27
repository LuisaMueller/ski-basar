import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payout-amount-modal',
  templateUrl: './payout-amount-modal.component.html',
  styleUrls: ['./payout-amount-modal.component.scss'],
})
export class PayoutAmountModalComponent {
  @Input() payoutArray: string[];
  constructor(public activeModal: NgbActiveModal) {}

  sendSalesDocument() {
    const result = 'verschickt';
    this.activeModal.close(result);
  }
}
