import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ForgotPasswordComponent,
  LoginComponent,
  RegisterComponent,
  SetPasswordComponent,
} from '@lenne.tech/ng-base/base-prototype';
import { DesktopGetNumberComponent } from 'src/app/modules/shared/layouts/desktop-get-number/desktop-get-number.component';
import { DesktopMainLoginLayoutComponent } from 'src/app/modules/shared/layouts/desktop-main-login-layout/desktop-main-login-layout.component';
import { DesktopMainTabelLayoutComponent } from 'src/app/modules/shared/layouts/desktop-main-tabel-layout/desktop-main-tabel-layout.component';
import { DesktopNumberLayoutComponent } from 'src/app/modules/shared/layouts/desktop-number-layout/desktop-number-layout.component';
import { LoginSmartphonePage2Component } from '../../modules/shared/layouts/login-smartphone-page2/login-smartphone-page2.component';
import { LoginSmartphonePage3Component } from '../../modules/shared/layouts/login-smartphone-page3/login-smartphone-page3.component';
import { LoginSmartphoneComponent } from '../../modules/shared/layouts/login-smartphone/login-smartphone.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          config: {
            redirectUrl: '/main',
            showPasswordForget: true,
            showRegister: true,
            logoUrl: '',
          },
        },
      },
      {
        path: 'registrieren',
        component: RegisterComponent,
      },
      {
        path: 'passwort-vergessen',
        component: ForgotPasswordComponent,
      },
      {
        path: 'passwort-setzen/:token',
        component: SetPasswordComponent,
      },
      {
        path: 'login-desktop',
        component: DesktopMainLoginLayoutComponent,
      },
      {
        path: 'getnumber-desktop',
        component: DesktopGetNumberComponent,
      },
      {
        path: 'login-smartphone',
        component: LoginSmartphoneComponent,
      },
      {
        path: 'login-smartphone-2',
        component: LoginSmartphonePage2Component,
      },
      {
        path: 'login-smartphone-3',
        component: LoginSmartphonePage3Component,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'number-layout',
        component: DesktopNumberLayoutComponent,
      },
      {
        path: 'main-desktop',
        component: DesktopMainTabelLayoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
