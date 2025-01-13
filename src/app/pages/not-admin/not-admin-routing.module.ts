import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotAdminPage } from './not-admin.page';

const routes: Routes = [
  {
    path: '',
    component: NotAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotAdminPageRoutingModule {}
