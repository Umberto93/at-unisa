import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SortModalPageRoutingModule } from './sort-modal-routing.module';

import { SortModalPage } from './sort-modal.page';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SortModalPageRoutingModule
  ],
  declarations: [SortModalPage, ModalComponent],
  exports: [SortModalPage]
})
export class SortModalPageModule { }
