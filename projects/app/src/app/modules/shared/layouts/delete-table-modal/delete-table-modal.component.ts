import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Good } from '../../../core/models/good.model';

@Component({
  selector: 'app-delete-table-modal',
  templateUrl: './delete-table-modal.component.html',
  styleUrls: ['./delete-table-modal.component.scss'],
})
export class DeleteTableModalComponent {
  @Input() content: Good;
  constructor(public activeModal: NgbActiveModal) {}

  saveDelete() {
    this.activeModal.close('delete');
  }
}
