import { Component, ContentChildren, Input, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-slides-controller',
    templateUrl: './slides-controller.component.html',
    styleUrls: ['./slides-controller.component.scss'],
})
export class SlidesControllerComponent implements OnInit {

    @Input() labels: String[];
    @Input() slidesRef: IonSlides;

    private activeIndex: number;

    constructor() {
        this.activeIndex = 0;
    }

    ngOnInit() {

    }

    private slideTo(event: CustomEvent) {

    }

}
