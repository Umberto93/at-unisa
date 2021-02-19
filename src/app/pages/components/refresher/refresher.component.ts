import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-refresher',
    templateUrl: './refresher.component.html',
    styleUrls: ['./refresher.component.scss'],
})
export class RefresherComponent implements OnInit {

    @Input() refreshCallback: Function;

    constructor() { }

    ngOnInit() { }

    refresh(event: any) {
        this.refreshCallback().add(() => {
            event.target.complete();
        });
    }

}
