import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaArrendatarioPage } from './vista-arrendatario.page';

const routes: Routes = [
  {
    path: '',
    component: VistaArrendatarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaArrendatarioPageRoutingModule {}
