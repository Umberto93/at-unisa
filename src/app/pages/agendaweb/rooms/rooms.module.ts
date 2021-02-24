import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomsPageRoutingModule } from './rooms-routing.module';

import { RoomsPage } from './rooms.page';
import { UtilityModule } from '../../utility/utility.module';
import { EventModalComponent } from './components/event-modal/event-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RoomsPageRoutingModule,
        UtilityModule,
    ],
    declarations: [
        RoomsPage,
        EventModalComponent
    ],
    exports: [
        EventModalComponent
    ]
})
export class RoomsPageModule { }
