import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SessionsPage } from './sessions.page';
import { UtilityModule } from '../../utility/utility.module';
import { SessionsPageRoutingModule } from './sessions-routing.module';
import { SessionModalComponent } from './components/session-modal/session-modal.component';
import { SessionsCourseComponent } from './components/sessions-course/sessions-course.component';
import { SessionsProfComponent } from './components/sessions-prof/sessions-prof.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        SessionsPageRoutingModule,
        UtilityModule
    ],
    declarations: [
        SessionsPage,
        SessionsCourseComponent,
        SessionsProfComponent,
        SessionModalComponent
    ],
    exports: [
        SessionsCourseComponent,
        SessionsProfComponent,
        SessionModalComponent
    ]
})
export class SessionsPageModule { }
