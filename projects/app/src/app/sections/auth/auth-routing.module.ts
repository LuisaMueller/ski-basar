import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ForgotPasswordComponent,
  LoginComponent,
  RegisterComponent,
  SetPasswordComponent,
} from '@lenne.tech/ng-base/base-prototype';
import { LoginSmartphonePage2Component } from '../../modules/shared/layouts/login-smartphone-page2/login-smartphone-page2.component';
import {AuthComponent} from "./auth.component";
import { DesktopGetNumberComponent } from 'src/app/modules/shared/layouts/desktop-get-number/desktop-get-number.component';
import { DesktopMainLoginLayoutComponent } from 'src/app/modules/shared/layouts/desktop-main-login-layout/desktop-main-login-layout.component';
import { LoginSmartphoneComponent } from '../../modules/shared/layouts/login-smartphone/login-smartphone.component';

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
        path: 'login-smartphone',
        component: LoginSmartphoneComponent,
      },
      {
        path: 'getnumber-desktop',
        component: DesktopGetNumberComponent,
      },
      {
        path: 'login-smartphone-2',
        component: LoginSmartphonePage2Component,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
