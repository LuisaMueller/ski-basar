import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeableVariablesService } from '../../../core/services/changeable-variables.service';

@Component({
  selector: 'app-login-smartphone-page2',
  templateUrl: './login-smartphone-page2.component.html',
  styleUrls: ['./login-smartphone-page2.component.scss'],
})
export class LoginSmartphonePage2Component implements OnInit {
  acceptForm: FormGroup;

  constructor(private router: Router, protected changeableVariablesService: ChangeableVariablesService) {}

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
