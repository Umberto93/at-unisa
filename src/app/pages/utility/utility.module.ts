import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../components/header/header.component';
import { ModalComponent } from '../components/modal/modal.component';
import { RefresherComponent } from '../components/refresher/refresher.component';
import { SlidesControllerComponent } from '../components/slides-controller/slides-controller.component';



@NgModule({
    declarations: [
        HeaderComponent,
        SlidesControllerComponent,
        ModalComponent,
        RefresherComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        SlidesControllerComponent,
        ModalComponent,
        RefresherComponent
    ]
})
export class UtilityModule { }
