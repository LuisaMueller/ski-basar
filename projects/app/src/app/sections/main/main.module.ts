import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BaseComponentsModule } from '@lenne.tech/ng-base/base-components';
import { BasePrototypeModule } from '@lenne.tech/ng-base/base-prototype';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminCreateUserComponent } from '../../modules/shared/layouts/admin-create-user/admin-create-user.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AdminCheckCashComponent } from './pages/admin-check-cash/admin-check-cash.component';
import { DeleteTableModalComponent } from './pages/delete-table-modal/delete-table-modal.component';
import { DesktopGetNumberComponent } from './pages/desktop-get-number/desktop-get-number.component';
import { DesktopMainTabelLayoutComponent } from './pages/desktop-main-tabel-layout/desktop-main-tabel-layout.component';
import { DesktopNumberLayoutComponent } from './pages/desktop-number-layout/desktop-number-layout.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { PayoutAmountModalComponent } from './pages/payout-amount-modal/payout-amount-modal.component';
import { UpdateTableModalComponent } from './pages/update-table-modal/update-table-modal.component';
import { AdminSeeListsComponent } from './pages/admin-see-lists/admin-see-lists.component';
import { AdminSeeArchiveComponent } from './pages/admin-see-archive/admin-see-archive.component';
import { AdminShowStatisticsComponent } from './pages/admin-show-statistics/admin-show-statistics.component';

@NgModule({
  declarations: [
    MainComponent,
    MyProfileComponent,
    DesktopMainTabelLayoutComponent,
    UpdateTableModalComponent,
    DeleteTableModalComponent,
    PayoutAmountModalComponent,
    DesktopGetNumberComponent,
    DesktopNumberLayoutComponent,
    AdminCreateUserComponent,
    AdminCheckCashComponent,
    AdminSeeListsComponent,
    AdminSeeArchiveComponent,
    AdminShowStatisticsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    BaseComponentsModule,
    BasePrototypeModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
  ],
})
export class MainModule {}
