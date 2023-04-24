import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Good } from '../../../core/models/good.model';

@Component({
  selector: 'app-delete-table-modal',
  templateUrl: './delete-table-modal.component.html',
  styleUrls: ['./delete-table-modal.component.scss'],
})
export class DeleteTableModalComponent implements OnInit {
  @Input() content: Good;
  deleteForm: FormGroup;
  isCollapsed: boolean = true;
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}
  ngOnInit() {
    this.deleteForm = new FormGroup({
      delete: new FormControl(null, Validators.required),
      reason: new FormControl(null, Validators.required),
    });
  }
  saveDelete() {
    this.activeModal.close(this.deleteForm.value);
  }
}
