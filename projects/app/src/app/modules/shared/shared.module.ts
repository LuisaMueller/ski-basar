import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DesktopMainLoginLayoutComponent } from './layouts/desktop-main-login-layout/desktop-main-login-layout.component';
import { LoginSmartphoneComponent } from './layouts/login-smartphone/login-smartphone.component';
import { DesktopGetNumberComponent } from './layouts/desktop-get-number/desktop-get-number.component';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
  ],
  declarations: [DesktopMainLoginLayoutComponent, LoginSmartphoneComponent, HeaderComponent, DesktopGetNumberComponent],

  exports: [HeaderComponent],
})
export class SharedModule {}
