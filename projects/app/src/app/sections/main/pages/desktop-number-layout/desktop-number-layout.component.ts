import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base/shared';
import { Customer } from '../../../../modules/core/models/customer.model';
import { ApiService } from '../../../../modules/core/services/api.service';
import { ChangeableVariablesService } from '../../../../modules/core/services/changeable-variables.service';

@Component({
  selector: 'app-desktop-number-layout',
  templateUrl: './desktop-number-layout.component.html',
  styleUrls: ['./desktop-number-layout.component.scss'],
})
export class DesktopNumberLayoutComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer;
  isCollapsed: boolean = true;
  constructor(
    private storageService: StorageService,
    private router: Router,
    private apiService: ApiService,
    protected changeableVariablesService: ChangeableVariablesService
  ) {}
  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      postcode: new FormControl(null, Validators.required),
      phonenumber: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      helper: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.pattern(this.changeableVariablesService.helperPassword)),
      accept: new FormControl(null, Validators.required),
    });
  }
  navToGetNumber() {
    const input = { ...this.customerForm.value };
    let clone = (({ password, accept, ...x }) => x)(input); //clonen mit Ausnahme von password und accept
    if (input.password === this.changeableVariablesService.helperPassword) {
      clone.isHelper = true;
    } else {
      clone.isHelper = false;
    }

    //Warenzettel erstellen
    this.apiService
      .createList({
        note: '',
        fee: 0,
        isMailStartSend: false,
        isMailEndSend: false,
        customer: clone,
      })
      .subscribe(value => {
        //Nummer zurückgeben
        this.storageService.save({ customer: { ...input, number: value.number } });
        this.router.navigate(['/getnumber-desktop/']);
      });
  }
}
