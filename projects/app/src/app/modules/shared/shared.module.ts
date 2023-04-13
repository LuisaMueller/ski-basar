import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { DeleteTableModalComponent } from './layouts/delete-table-modal/delete-table-modal.component';
import { DesktopGetNumberComponent } from './layouts/desktop-get-number/desktop-get-number.component';
import { DesktopMainLoginLayoutComponent } from './layouts/desktop-main-login-layout/desktop-main-login-layout.component';
import { DesktopMainTabelLayoutComponent } from './layouts/desktop-main-tabel-layout/desktop-main-tabel-layout.component';
import { DesktopNumberLayoutComponent } from './layouts/desktop-number-layout/desktop-number-layout.component';
import { LoginSmartphonePage2Component } from './layouts/login-smartphone-page2/login-smartphone-page2.component';
import { LoginSmartphonePage3Component } from './layouts/login-smartphone-page3/login-smartphone-page3.component';
import { LoginSmartphonePage4Component } from './layouts/login-smartphone-page4/login-smartphone-page4.component';
import { LoginSmartphoneComponent } from './layouts/login-smartphone/login-smartphone.component';
import { UpdateTableModalComponent } from './layouts/update-table-modal/update-table-modal.component';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
  ],
  declarations: [
    DesktopMainLoginLayoutComponent,
    DesktopGetNumberComponent,
    HeaderComponent,
    LoginSmartphoneComponent,
    LoginSmartphonePage2Component,
    LoginSmartphonePage3Component,
    DesktopMainTabelLayoutComponent,
    LoginSmartphonePage4Component,
    UpdateTableModalComponent,
    DeleteTableModalComponent,
    DesktopNumberLayoutComponent,
  ],

  exports: [HeaderComponent],
})
export class SharedModule {}
