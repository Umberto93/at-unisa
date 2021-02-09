import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranscriptPageRoutingModule } from './transcript-routing.module';

import { TranscriptPage } from './transcript.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranscriptPageRoutingModule
    ],
    declarations: [TranscriptPage, HeaderComponent],
    exports: [
        HeaderComponent
    ]
})
export class TranscriptPageModule { }
