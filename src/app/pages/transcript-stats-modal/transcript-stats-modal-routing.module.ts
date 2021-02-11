import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranscriptStatsModalPage } from './transcript-stats-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TranscriptStatsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranscriptStatsModalPageRoutingModule {}
