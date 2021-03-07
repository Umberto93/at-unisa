import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
    selector: 'app-search-modal',
    templateUrl: './search-modal.component.html',
    styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {

    private title: string;
    private options: any[];
    private results: any[];

    constructor(
        private navParams: NavParams,
        private modalController: ModalController
    ) {
        this.title = this.navParams.get('title') || 'Cerca';
        this.options = this.navParams.get('options');
        this.results = [];
    }

    ngOnInit() { }

    /**
     * Avvia l'operazione di ricerca.
     * 
     * @param event Lo specifico evento.
     */
    private search(event: CustomEvent) {
        const value = event.target['value'].toLowerCase();

        if (value.length > 2) {
            this.results = this.options.filter((item: any) => {
                return item.label.toLowerCase().includes(value);
            });
        } else {
            this.results = [];
        }
    }

    /**
     * Emette il valore al dismiss del modale.
     * 
     * @param event Lo specifico evento.
     */
    private emitValue(event: CustomEvent) {
        this.modalController.dismiss(event.detail.value);
    }

}
