import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotAdminPageRoutingModule } from './not-admin-routing.module';

import { NotAdminPage } from './not-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotAdminPageRoutingModule
  ],
  declarations: [NotAdminPage]
})
export class NotAdminPageModule {}
