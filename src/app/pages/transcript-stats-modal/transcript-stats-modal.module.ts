import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranscriptStatsModalPageRoutingModule } from './transcript-stats-modal-routing.module';

import { TranscriptStatsModalPage } from './transcript-stats-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranscriptStatsModalPageRoutingModule
  ],
  declarations: [TranscriptStatsModalPage]
})
export class TranscriptStatsModalPageModule {}
