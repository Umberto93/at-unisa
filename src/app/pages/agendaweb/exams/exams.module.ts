import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamsPageRoutingModule } from './exams-routing.module';

import { ExamsPage } from './exams.page';
import { UtilityModule } from '../../utility/utility.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ExamsPageRoutingModule,
        UtilityModule
    ],
    declarations: [ExamsPage]
})
export class ExamsPageModule { }
