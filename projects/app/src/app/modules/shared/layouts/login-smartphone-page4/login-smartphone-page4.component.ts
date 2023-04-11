import { Component, OnInit } from '@angular/core';
import { StorageService } from '@lenne.tech/ng-base/shared';
import { Customer } from '../../../core/models/customer.model';

@Component({
  selector: 'app-login-smartphone-page4',
  templateUrl: './login-smartphone-page4.component.html',
  styleUrls: ['./login-smartphone-page4.component.scss'],
})
export class LoginSmartphonePage4Component implements OnInit {
  customer: Customer;

  starttime: string = '16:30';
  endtime: string = '17:30';
  constructor(private storageService: StorageService) {}
  ngOnInit() {
    this.customer = this.storageService.load('customer');
    //this.customerNr = this.customer.number;
  }
}
