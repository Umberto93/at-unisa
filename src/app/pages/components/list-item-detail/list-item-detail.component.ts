import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-item-detail',
    templateUrl: './list-item-detail.component.html',
    styleUrls: ['./list-item-detail.component.scss'],
})
export class ListItemDetailComponent implements OnInit {

    @Input() regular: boolean = false;
    @Input() icon: string;
    @Input() value: string;

    constructor() { }

    ngOnInit() { }

}
