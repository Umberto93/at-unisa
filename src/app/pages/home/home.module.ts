import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { UtilityModule } from '../utility/utility.module';
import { NewsModalComponent } from './components/news-modal/news-modal.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        UtilityModule
    ],
    declarations: [
        HomePage,
        NewsModalComponent
    ],
    exports: [
        NewsModalComponent
    ]
})
export class HomePageModule { }
