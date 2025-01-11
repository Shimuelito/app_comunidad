import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasArrendatarioPageRoutingModule } from './consultas-arrendatario-routing.module';

import { ConsultasArrendatarioPage } from './consultas-arrendatario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasArrendatarioPageRoutingModule
  ],
  declarations: [ConsultasArrendatarioPage]
})
export class ConsultasArrendatarioPageModule {}
