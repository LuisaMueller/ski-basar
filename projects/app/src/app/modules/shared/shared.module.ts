import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { DesktopMainLoginLayoutComponent } from './layouts/desktop-main-login-layout/desktop-main-login-layout.component';
import { LoginSmartphoneComponent } from './layouts/login-smartphone/login-smartphone.component';
import { LoginUserComponent } from './layouts/login-user/login-user.component';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, DesktopMainLoginLayoutComponent, LoginSmartphoneComponent, LoginUserComponent],
 
  exports: [HeaderComponent],
})
export class SharedModule {}
