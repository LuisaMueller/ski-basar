import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { DesktopMainLoginLayoutComponent } from './layouts/desktop-main-login-layout/desktop-main-login-layout.component';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, DesktopMainLoginLayoutComponent],
  exports: [HeaderComponent],
})
export class SharedModule {}
