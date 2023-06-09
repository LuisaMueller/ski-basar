import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ForgotPasswordComponent,
  LoginComponent,
  RegisterComponent,
  SetPasswordComponent,
} from '@lenne.tech/ng-base/base-prototype';
import { DesktopMainLoginLayoutComponent } from 'src/app/modules/shared/layouts/desktop-main-login-layout/desktop-main-login-layout.component';
import { LoginSmartphonePage2Component } from '../../modules/shared/layouts/login-smartphone-page2/login-smartphone-page2.component';
import { LoginSmartphonePage3Component } from '../../modules/shared/layouts/login-smartphone-page3/login-smartphone-page3.component';
import { LoginSmartphonePage4Component } from '../../modules/shared/layouts/login-smartphone-page4/login-smartphone-page4.component';
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
            redirectUrl: '../main-desktop/1',
            showPasswordForget: false,
            showRegister: false,
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
        path: 'login-smartphone-2',
        component: LoginSmartphonePage2Component,
      },
      {
        path: 'login-smartphone-3',
        component: LoginSmartphonePage3Component,
      },
      {
        path: 'login-smartphone-4',
        component: LoginSmartphonePage4Component,
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
