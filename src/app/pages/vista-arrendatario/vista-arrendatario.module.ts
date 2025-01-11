import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaArrendatarioPageRoutingModule } from './vista-arrendatario-routing.module';

import { VistaArrendatarioPage } from './vista-arrendatario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaArrendatarioPageRoutingModule
  ],
  declarations: [VistaArrendatarioPage]
})
export class VistaArrendatarioPageModule {}
