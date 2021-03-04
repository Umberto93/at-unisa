import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeRoomsPageRoutingModule } from './free-rooms-routing.module';

import { FreeRoomsPage } from './free-rooms.page';
import { UtilityModule } from '../../utility/utility.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        FreeRoomsPageRoutingModule,
        UtilityModule
    ],
    declarations: [FreeRoomsPage]
})
export class FreeRoomsPageModule { }
