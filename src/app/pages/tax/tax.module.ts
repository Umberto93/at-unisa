import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxPageRoutingModule } from './tax-routing.module';

import { TaxPage } from './tax.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxPageRoutingModule
  ],
  declarations: [TaxPage, HeaderComponent],
  exports: [HeaderComponent]
})
export class TaxPageModule {}
