import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sessions',
    templateUrl: './sessions.page.html',
    styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

    private searchBy: String;

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
