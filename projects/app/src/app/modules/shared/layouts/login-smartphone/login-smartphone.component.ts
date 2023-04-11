import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base/shared';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-smartphone.component.html',
  styleUrls: ['./login-smartphone.component.scss'],
})
export class LoginSmartphoneComponent implements OnInit {
  defaultNr = 1;
  dataForm: FormGroup;
  constructor(private storageService: StorageService, private router: Router) {}
  ngOnInit() {
    this.dataForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      postcode: new FormControl(null, Validators.required),
      phonenumber: new FormControl(null, Validators.required),
      mail: new FormControl(null, Validators.required),
      password: new FormControl(null),
    });
  }

  add() {
    const input = { ...this.dataForm.value };
    this.storageService.save({ customer: input });
    this.router.navigate(['auth/login-smartphone-2/']);
  }
}
