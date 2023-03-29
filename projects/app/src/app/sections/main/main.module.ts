import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { BaseComponentsModule } from '@lenne.tech/ng-base/base-components';
import { BasePrototypeModule } from '@lenne.tech/ng-base/base-prototype';
import { SharedModule } from '../../modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, MyProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    BaseComponentsModule,
    BasePrototypeModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class MainModule {}
