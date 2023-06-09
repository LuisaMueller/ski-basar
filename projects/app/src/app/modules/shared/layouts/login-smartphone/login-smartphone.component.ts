import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base/shared';
import { ChangeableVariablesService } from '../../../core/services/changeable-variables.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-smartphone.component.html',
  styleUrls: ['./login-smartphone.component.scss'],
})
export class LoginSmartphoneComponent implements OnInit {
  defaultNr = 1;
  dataForm: FormGroup;
  isCollapsed: boolean = true;
  constructor(
    private storageService: StorageService,
    private router: Router,
    protected changeableVariablesService: ChangeableVariablesService
  ) {}
  ngOnInit() {
    this.dataForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      postcode: new FormControl(null, Validators.required),
      phonenumber: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      helper: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.pattern(this.changeableVariablesService.helperPassword)),
    });
  }

  add() {
    const input = { ...this.dataForm.value };
    let clone = (({ password, ...x }) => x)(input);
    if (input.password === this.changeableVariablesService.helperPassword) {
      clone.isHelper = true;
    } else {
      clone.isHelper = false;
    }

    this.storageService.save({ customer: clone });
    this.router.navigate(['auth/login-smartphone-2/']);
  }
}
