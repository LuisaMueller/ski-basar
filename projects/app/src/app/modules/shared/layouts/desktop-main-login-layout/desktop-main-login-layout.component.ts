import { Component } from '@angular/core';
import { LoginConfig } from '@lenne.tech/ng-base/shared';

@Component({
  selector: 'app-desktop-main-login-layout',
  templateUrl: './desktop-main-login-layout.component.html',
  styleUrls: ['./desktop-main-login-layout.component.scss'],
})
export class DesktopMainLoginLayoutComponent {
  config: LoginConfig = { redirectUrl: '/auth/main-desktop/1', showPasswordForget: false, showRegister: false };
  constructor() {}
}
