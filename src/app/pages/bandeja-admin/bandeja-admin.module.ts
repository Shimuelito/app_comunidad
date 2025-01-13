import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BandejaAdminPageRoutingModule } from './bandeja-admin-routing.module';

import { BandejaAdminPage } from './bandeja-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BandejaAdminPageRoutingModule
  ],
  declarations: [BandejaAdminPage]
})
export class BandejaAdminPageModule {}
