import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base/shared';
import { Customer } from '../../../core/models/customer.model';
import { ApiService } from '../../../core/services/api.service';
@Component({
  selector: 'app-login-smartphone-page3',
  templateUrl: './login-smartphone-page3.component.html',
  styleUrls: ['./login-smartphone-page3.component.scss'],
})
export class LoginSmartphonePage3Component implements OnInit {
  customer: Customer;
  changeForm: FormGroup;
  constructor(private storageService: StorageService, private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.customer = this.storageService.load('customer');
    this.changeForm = new FormGroup({
      phonenumber: new FormControl(this.customer.phonenumber, Validators.required),
      email: new FormControl(this.customer.email, Validators.required),
    });
  }

  add() {
    const input = { ...this.customer, ...this.changeForm.value };

    //Warenzettel erstellen
    this.apiService.createList({ note: '', fee: 0, customer: input }).subscribe(value => {
      //Nummer zurückgeben
      this.storageService.save({ customer: { ...input, number: value.number } });
      this.router.navigate(['auth/login-smartphone-4/']);
    });
  }
}
