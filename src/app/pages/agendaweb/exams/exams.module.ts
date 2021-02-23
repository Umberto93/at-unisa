import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExamsPage } from './exams.page';
import { UtilityModule } from '../../utility/utility.module';
import { ExamsPageRoutingModule } from './exams-routing.module';
import { ExamModalComponent } from './components/exam-modal/exam-modal.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ExamsPageRoutingModule,
        UtilityModule
    ],
    declarations: [
        ExamsPage,
        ExamModalComponent
    ],
    exports: [
        ExamModalComponent
    ]
})
export class ExamsPageModule { }
