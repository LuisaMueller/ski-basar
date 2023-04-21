import { Component, OnInit } from '@angular/core';
import { StorageService } from '@lenne.tech/ng-base/shared';
import { Customer } from '../../../core/models/customer.model';
import { ChangeableVariablesService } from '../../../core/services/changeable-variables.service';

@Component({
  selector: 'app-login-smartphone-page4',
  templateUrl: './login-smartphone-page4.component.html',
  styleUrls: ['./login-smartphone-page4.component.scss'],
})
export class LoginSmartphonePage4Component implements OnInit {
  customer: Customer;

  constructor(
    private storageService: StorageService,
    protected changeableVariablesService: ChangeableVariablesService
  ) {}
  ngOnInit() {
    this.customer = this.storageService.load('customer');
    //this.customerNr = this.customer.number;
  }
}
