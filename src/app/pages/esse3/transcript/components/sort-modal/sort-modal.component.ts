import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { TranscriptSortingService } from 'src/app/services/transcript-sorting.service';

@Component({
    selector: 'app-sort-modal',
    templateUrl: './sort-modal.component.html',
    styleUrls: ['./sort-modal.component.scss'],
})
export class SortModalComponent implements OnInit {

    private activeSorting: number;
    private ascSorting: boolean;

    private readonly radioOptions = [
        'Nome',
        'Data',
        'Voto',
        'Crediti'
    ] as String[];

    constructor(
        private navParams: NavParams,
        private transcriptSortingService: TranscriptSortingService
    ) {
        this.activeSorting = 0;
        this.ascSorting = true;
        this.sort = this.sort.bind(this);
    }

    async ngOnInit() {
        const activeSorting = await this.transcriptSortingService.loadPreferences();

        if (activeSorting) {
            this.activeSorting = activeSorting.value;
            this.ascSorting = activeSorting.asc;
        }
    }

    /**
     * Imposta la tipologia di ordinamento (nome | voto | crediti | data).
     * 
     * @param event L'evento associato allo Ion Radio.
     */
    setActiveSorting(event: CustomEvent) {
        this.activeSorting = event.detail.value;
    }

    /**
     * Imposta la tipologia di ordinamento (crescente | decrescente).
     */
    setAscSorting() {
        this.ascSorting = !this.ascSorting;
    }

    /**
     * Effettua l'ordinamento del libretto in base all'opzione selezionata.
     */
    async sort() {
        await this.transcriptSortingService.savePreferences(
            this.activeSorting,
            this.ascSorting
        );
        this.navParams.get('confirmCallback')();
    }

}
