import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BasePrototypeModule } from '@lenne.tech/ng-base/base-prototype';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DesktopGetNumberComponent } from '../../sections/main/pages/desktop-get-number/desktop-get-number.component';
import { DesktopNumberLayoutComponent } from '../../sections/main/pages/desktop-number-layout/desktop-number-layout.component';
import { HeaderComponent } from './components/header/header.component';
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
  ],

  exports: [HeaderComponent],
})
export class SharedModule {}
