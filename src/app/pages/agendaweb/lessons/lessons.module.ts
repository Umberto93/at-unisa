import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonsPageRoutingModule } from './lessons-routing.module';

import { LessonsPage } from './lessons.page';
import { UtilityModule } from '../../utility/utility.module';
import { LessonsCourseComponent } from './components/lessons-course/lessons-course.component';
import { LessonsProfComponent } from './components/lessons-prof/lessons-prof.component';
import { CourseFilterModalComponent } from './components/course-filter-modal/course-filter-modal.component';
import { LessonModalComponent } from './components/lesson-modal/lesson-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LessonsPageRoutingModule,
    UtilityModule
  ],
  declarations: [
    LessonsPage,
    LessonsCourseComponent,
    LessonsProfComponent,
    CourseFilterModalComponent,
    LessonModalComponent
  ],
  exports: [
    LessonsCourseComponent,
    LessonsProfComponent,
    CourseFilterModalComponent,
  ]
})
export class LessonsPageModule { }
