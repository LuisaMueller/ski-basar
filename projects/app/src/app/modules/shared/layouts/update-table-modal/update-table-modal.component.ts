import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Good } from '../../../core/models/good.model';

@Component({
  selector: 'app-modal-basic',

  templateUrl: './update-table-modal.component.html',
  styleUrls: ['./update-table-modal.component.scss'],
})
export class UpdateTableModalComponent implements OnInit {
  @Input() content: Good;
  closeResult = '';
  editForm: FormGroup;
  goodList2: Good[] = [];
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.editForm = new FormGroup({
      classification: new FormControl(this.content.classification, Validators.required),
      brand: new FormControl(this.content.brand, Validators.required),
      size: new FormControl(this.content.size, Validators.required),
      color: new FormControl(this.content.color, Validators.required),
      other: new FormControl(this.content.other),
      max: new FormControl(this.content.max, [Validators.required, Validators.min(1)]),
      min: new FormControl(this.content.min),
      cash: new FormControl(this.content.cash),
    });
  }
  saveEdit() {
    this.content = { number: this.content.number, ...this.editForm.value };
    this.activeModal.close(this.content);
  }
}
