import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-smartphone-page2',
  templateUrl: './login-smartphone-page2.component.html',
  styleUrls: ['./login-smartphone-page2.component.scss'],
})
export class LoginSmartphonePage2Component implements OnInit {
  acceptForm: FormGroup;
  starttime: string = '16:30';
  endtime: string = '17:30';
  pickupdate: string = '04.12.2022';

  constructor(private router: Router) {}

  ngOnInit() {
    this.acceptForm = new FormGroup({
      accept: new FormControl(null, Validators.requiredTrue),
    });
  }

  accept() {
    if (this.acceptForm.value.accept) {
      this.router.navigate(['auth/login-smartphone-3/']);
    }
  }
}
