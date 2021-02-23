import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../components/header/header.component';
import { ModalComponent } from '../components/modal/modal.component';
import { TranscriptSortModalComponent } from '../components/transcript-sort-modal/transcript-sort-modal.component';
import { TranscriptStatsModalComponent } from '../components/transcript-stats-modal/transcript-stats-modal.component';
import { TranscriptExamModalComponent } from '../components/transcript-exam-modal/transcript-exam-modal.component';
import { TranscriptPrevisionModalComponent } from '../components/transcript-prevision-modal/transcript-prevision-modal.component';
import { RefresherComponent } from '../components/refresher/refresher.component';
import { SlidesControllerComponent } from '../components/slides-controller/slides-controller.component';
import { ExamsSearchModalComponent } from '../agendaweb/components/exams-search-modal/exams-search-modal.component';



@NgModule({
    declarations: [
        HeaderComponent,
        SlidesControllerComponent,
        ModalComponent,
        TranscriptSortModalComponent,
        TranscriptStatsModalComponent,
        TranscriptExamModalComponent,
        TranscriptPrevisionModalComponent,
        ExamsSearchModalComponent,
        RefresherComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        SlidesControllerComponent,
        ModalComponent,
        TranscriptSortModalComponent,
        TranscriptStatsModalComponent,
        TranscriptExamModalComponent,
        TranscriptPrevisionModalComponent,
        ExamsSearchModalComponent,
        RefresherComponent
    ]
})
export class UtilityModule { }
