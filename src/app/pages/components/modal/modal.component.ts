import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

    @Input() title: string;
    @Input() confirmButton: boolean;
    @Input() confirmCallback: any;

    constructor(
        private modalController: ModalController
    ) {
        this.confirmButton = false;
    }

    ngOnInit() { }

    async handleConfirm() {
        this.confirmCallback();
        await this.dismiss();
    }

    async dismiss() {
        await this.modalController.dismiss();
    }
}
