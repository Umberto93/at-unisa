import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../components/header/header.component';
import { ModalComponent } from '../components/modal/modal.component';
import { TranscriptSortModalComponent } from '../components/transcript-sort-modal/transcript-sort-modal.component';
import { TranscriptStatsModalComponent } from '../components/transcript-stats-modal/transcript-stats-modal.component';



@NgModule({
    declarations: [
        HeaderComponent,
        ModalComponent,
        TranscriptSortModalComponent,
        TranscriptStatsModalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        ModalComponent,
        TranscriptSortModalComponent,
        TranscriptStatsModalComponent
    ]
})
export class UtilityModule { }
