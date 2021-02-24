import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { RoomEvent } from 'src/app/interfaces/room-event';

@Component({
    selector: 'app-event-modal',
    templateUrl: './event-modal.component.html',
    styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent implements OnInit {

    private events: RoomEvent[];

    constructor(
        private navParams: NavParams
    ) {
        this.events = navParams.get('events');
    }

    ngOnInit() { }

}
