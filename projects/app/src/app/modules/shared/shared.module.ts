import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DesktopMainLoginLayoutComponent } from './layouts/desktop-main-login-layout/desktop-main-login-layout.component';
import { LoginSmartphoneComponent } from './layouts/login-smartphone/login-smartphone.component';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
  ],
  declarations: [DesktopMainLoginLayoutComponent, LoginSmartphoneComponent, HeaderComponent],

  exports: [HeaderComponent],
})
export class SharedModule {}
