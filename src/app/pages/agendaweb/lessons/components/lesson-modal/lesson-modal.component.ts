import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/interfaces/lesson';

@Component({
    selector: 'app-lesson-modal',
    templateUrl: './lesson-modal.component.html',
    styleUrls: ['./lesson-modal.component.scss'],
})
export class LessonModalComponent implements OnInit {

    private lesson: Lesson;

    private readonly daysLabels: any = {
        0: 'Lunedì',
        1: 'Martedì',
        2: 'Mercoledì',
        3: 'Giovedì',
        4: 'Venerdì'
    };

    constructor(
        private navParams: NavParams
    ) {
        this.lesson = this.navParams.get('lesson');
    }

    ngOnInit() { }

    private getDay() {
        return this.daysLabels[this.lesson.day];
    }

}
