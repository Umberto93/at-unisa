import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Session } from 'src/app/interfaces/session';

@Component({
    selector: 'app-exam-modal',
    templateUrl: './exam-modal.component.html',
    styleUrls: ['./exam-modal.component.scss'],
})
export class ExamModalComponent implements OnInit {

    private readonly days = [
        'Domenica',
        'Lunedì',
        'Martedì',
        'Mercoledì',
        'Giovedì',
        'Venerdì',
        'Sabato'
    ];

    private readonly months = [
        'Gennaio',
        'Febbraio',
        'Marzo',
        'Aprile',
        'Maggio',
        'Giugno',
        'Luglio',
        'Agosto',
        'Settembre',
        'Ottobre',
        'Novembre',
        'Dicembre'
    ];

    private session: Session;

    constructor(
        private navParams: NavParams
    ) {
        this.session = navParams.get('session');
    }

    ngOnInit() { }

    private zeroPadding(entity: number): String {
        return "0".concat(entity.toString()).slice(-2);
    }

}
