import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranscriptPageRoutingModule } from './transcript-routing.module';

import { TranscriptPage } from './transcript.page';
import { UtilityModule } from '../../utility/utility.module';
import { ExamModalComponent } from './components/exam-modal/exam-modal.component';
import { PrevisionModalComponent } from './components/prevision-modal/prevision-modal.component';
import { SortModalComponent } from './components/sort-modal/sort-modal.component';
import { StatsModalComponent } from './components/stats-modal/stats-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranscriptPageRoutingModule,
        UtilityModule
    ],
    declarations: [
        TranscriptPage,
        SortModalComponent,
        StatsModalComponent,
        ExamModalComponent,
        PrevisionModalComponent

    ],
    exports: [
        SortModalComponent,
        StatsModalComponent,
        ExamModalComponent,
        PrevisionModalComponent
    ]
})
export class TranscriptPageModule { }
