import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base/shared';
import { Customer } from '../../../core/models/customer.model';

@Component({
  selector: 'app-desktop-number-layout',
  templateUrl: './desktop-number-layout.component.html',
  styleUrls: ['./desktop-number-layout.component.scss'],
})
export class DesktopNumberLayoutComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer;
  constructor(private storageService: StorageService, private router: Router) {}
  ngOnInit() {
    this.customerForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      postcode: new FormControl(null, Validators.required),
      phonenumber: new FormControl(null, Validators.required),
      mail: new FormControl(null, Validators.required),
      password: new FormControl(null),
      accept: new FormControl(null, Validators.requiredTrue),
    });
  }
  navToGetNumber() {
    const input = { ...this.customerForm.value, number: 25 };
    this.storageService.save({ customer: input });
    this.router.navigate(['auth/getnumber-desktop/']);
  }
}
