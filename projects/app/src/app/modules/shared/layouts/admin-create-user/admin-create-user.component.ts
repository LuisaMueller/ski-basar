import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.scss'],
})
export class AdminCreateUserComponent implements OnInit {
  userForm: FormGroup;

  constructor() {}
  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
    });
  }
  createUser() {
    //TODO: User in Datenbank anlegen
    //TODO: hier Mail mit Passwort für Login verschicken
  }
}
