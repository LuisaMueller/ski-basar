import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Good } from '../../../../modules/core/models/good.model';

@Component({
  selector: 'app-update-table-modal',

  templateUrl: './update-table-modal.component.html',
  styleUrls: ['./update-table-modal.component.scss'],
})
export class UpdateTableModalComponent implements OnInit {
  @Input() content: Good;
  editForm: FormGroup;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.editForm = new FormGroup({
      classification: new FormControl(this.content.classification, Validators.required),
      brand: new FormControl(this.content.brand, Validators.required),
      size: new FormControl(this.content.size, Validators.required),
      color: new FormControl(this.content.color, Validators.required),
      other: new FormControl(this.content.other),
      prize: new FormControl(this.content.prize, [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^(?:[1-9]{1}[0-9]*)(?:,[0-9]{1,2})?$'),
      ]),
      vb: new FormControl(this.content.vb, Validators.pattern('^(?:[1-9]{1}[0-9]*)(?:,[0-9]{1,2})?$')),
      cash: new FormControl(this.content.cash, Validators.pattern('^(?:[1-9]{1}[0-9]*)(?:,[0-9]{1,2})?$')),
    });
  }
  saveEdit() {
    this.content = { number: this.content.number, ...this.editForm.value };
    this.activeModal.close(this.content);
  }
}
