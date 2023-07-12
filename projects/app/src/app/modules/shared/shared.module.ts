import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BasePrototypeModule } from '@lenne.tech/ng-base/base-prototype';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { AdminCreateUserComponent } from './layouts/admin-create-user/admin-create-user.component';
import { DesktopMainLoginLayoutComponent } from './layouts/desktop-main-login-layout/desktop-main-login-layout.component';
import { LoginSmartphonePage2Component } from './layouts/login-smartphone-page2/login-smartphone-page2.component';
import { LoginSmartphonePage3Component } from './layouts/login-smartphone-page3/login-smartphone-page3.component';
import { LoginSmartphonePage4Component } from './layouts/login-smartphone-page4/login-smartphone-page4.component';
import { LoginSmartphoneComponent } from './layouts/login-smartphone/login-smartphone.component';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    BasePrototypeModule,
  ],
  declarations: [
    DesktopMainLoginLayoutComponent,
    HeaderComponent,
    LoginSmartphoneComponent,
    LoginSmartphonePage2Component,
    LoginSmartphonePage3Component,
    LoginSmartphonePage4Component,
    AdminCreateUserComponent,
  ],

  exports: [HeaderComponent],
})
export class SharedModule {}
