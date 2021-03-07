import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../components/header/header.component';
import { ModalComponent } from '../components/modal/modal.component';
import { RefresherComponent } from '../components/refresher/refresher.component';
import { SearchModalComponent } from '../components/search-modal/search-modal.component';



@NgModule({
    declarations: [
        HeaderComponent,
        ModalComponent,
        SearchModalComponent,
        RefresherComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        ModalComponent,
        SearchModalComponent,
        RefresherComponent
    ]
})
export class UtilityModule { }
