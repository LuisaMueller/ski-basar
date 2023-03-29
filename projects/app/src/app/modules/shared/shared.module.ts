import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DesktopMainLoginLayoutComponent } from './layouts/desktop-main-login-layout/desktop-main-login-layout.component';
import { DesktopGetNumberComponent } from './layouts/desktop-get-number/desktop-get-number.component';
import { LoginSmartphonePage2Component } from './layouts/login-smartphone-page2/login-smartphone-page2.component';
import { LoginSmartphonePage3Component } from './layouts/login-smartphone-page3/login-smartphone-page3.component';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DesktopMainLoginLayoutComponent,
    DesktopGetNumberComponent,
    HeaderComponent,
    LoginSmartphonePage2Component,
    LoginSmartphonePage3Component,
  ],
  exports: [HeaderComponent],
})
export class SharedModule {}
