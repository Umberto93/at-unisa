import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxPageRoutingModule } from './tax-routing.module';

import { TaxPage } from './tax.page';
import { UtilityModule } from '../utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxPageRoutingModule,
    UtilityModule
  ],
  declarations: [TaxPage]
})
export class TaxPageModule { }
