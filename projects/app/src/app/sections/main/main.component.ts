import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  submitForm: FormGroup;

  ngOnInit() {
    this.submitForm = new FormGroup({
      type: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      extra: new FormControl(null, Validators.required),
      maxPrize: new FormControl(null, Validators.required),
      minPrize: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log('submit ', this.submitForm.value);
  }
}
