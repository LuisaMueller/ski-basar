import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base/shared';
import { Customer } from '../../../../modules/core/models/customer.model';

@Component({
  selector: 'app-desktop-get-number',
  templateUrl: './desktop-get-number.component.html',
  styleUrls: ['./desktop-get-number.component.scss'],
})
export class DesktopGetNumberComponent implements OnInit {
  customer: Customer;

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {
    this.customer = this.storageService.load('customer');
  }
  navToGoodList() {
    this.router.navigate(['/main-desktop/' + this.customer.number]);
  }
}
