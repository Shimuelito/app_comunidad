import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaAdministradorPage } from './vista-administrador.page';

const routes: Routes = [
  {
    path: '',
    component: VistaAdministradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaAdministradorPageRoutingModule {}
