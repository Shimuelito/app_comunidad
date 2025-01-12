import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaAdministradorPageRoutingModule } from './vista-administrador-routing.module';

import { VistaAdministradorPage } from './vista-administrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaAdministradorPageRoutingModule
  ],
  declarations: [VistaAdministradorPage]
})
export class VistaAdministradorPageModule {}
