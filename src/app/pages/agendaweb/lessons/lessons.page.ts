import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-lessons',
    templateUrl: './lessons.page.html',
    styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

    private searchBy: string;

    constructor(
        private route: ActivatedRoute
    ) {
        this.searchBy = 'course';
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['searchBy']) {
                this.searchBy = params['searchBy'];
            }
        });
    }

}
