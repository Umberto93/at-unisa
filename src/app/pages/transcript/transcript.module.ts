import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranscriptPageRoutingModule } from './transcript-routing.module';

import { TranscriptPage } from './transcript.page';
import { HeaderComponent } from '../components/header/header.component';
import { SortModalPageModule } from '../sort-modal/sort-modal.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranscriptPageRoutingModule,
        SortModalPageModule
    ],
    declarations: [TranscriptPage, HeaderComponent],
    exports: [HeaderComponent]
})
export class TranscriptPageModule { }
