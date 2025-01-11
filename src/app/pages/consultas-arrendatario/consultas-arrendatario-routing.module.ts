import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasArrendatarioPage } from './consultas-arrendatario.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasArrendatarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasArrendatarioPageRoutingModule {}
