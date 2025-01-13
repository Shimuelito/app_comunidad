import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandejaAdminPage } from './bandeja-admin.page';

const routes: Routes = [
  {
    path: '',
    component: BandejaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BandejaAdminPageRoutingModule {}
