import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@lenne.tech/ng-base';
import { TableComponent } from './sections/main/table/table.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sections/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./sections/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
