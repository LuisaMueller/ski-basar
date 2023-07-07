import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@lenne.tech/ng-base';
import { MainComponent } from './main.component';
import { AdminCheckCashComponent } from './pages/admin-check-cash/admin-check-cash.component';
import { AdminSeeArchiveComponent } from './pages/admin-see-archive/admin-see-archive.component';
import { AdminSeeListsComponent } from './pages/admin-see-lists/admin-see-lists.component';
import { AdminShowStatisticsComponent } from './pages/admin-show-statistics/admin-show-statistics.component';
import { DesktopGetNumberComponent } from './pages/desktop-get-number/desktop-get-number.component';
import { DesktopMainTabelLayoutComponent } from './pages/desktop-main-tabel-layout/desktop-main-tabel-layout.component';
import { DesktopNumberLayoutComponent } from './pages/desktop-number-layout/desktop-number-layout.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'profil',
        component: MyProfileComponent,
        pathMatch: 'full',
      },
      {
        path: 'cms',
        loadChildren: () => import('./sections/cms/cms.module').then(m => m.CmsModule),
        canActivateChild: [AuthGuard],
      },
      {
        path: 'main-desktop/:id',
        component: DesktopMainTabelLayoutComponent,
      },
      {
        path: 'number-layout',
        component: DesktopNumberLayoutComponent,
      },
      {
        path: 'getnumber-desktop',
        component: DesktopGetNumberComponent,
      },
      {
        path: 'admin-check-cash',
        component: AdminCheckCashComponent,
      },
      {
        path: 'admin-see-lists',
        component: AdminSeeListsComponent,
      },
      {
        path: 'admin-see-archive',
        component: AdminSeeArchiveComponent,
      },
      {
        path: 'admin-show-statistics',
        component: AdminShowStatisticsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
