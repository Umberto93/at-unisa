import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Exam } from 'src/app/interfaces/exam';
import { TranscriptSortingService } from 'src/app/services/transcript-sorting.service';

@Component({
    selector: 'app-sort-modal',
    templateUrl: './transcript-sort-modal.component.html',
    styleUrls: ['./transcript-sort-modal.component.scss'],
})
export class TranscriptSortModalComponent implements OnInit {

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

    setActiveSorting(event: CustomEvent) {
        this.activeSorting = event.detail.value;
    }

    setAscSorting() {
        this.ascSorting = !this.ascSorting;
    }

    async sort() {
        await this.transcriptSortingService.savePreferences(
            this.activeSorting,
            this.ascSorting
        );
        this.navParams.get('confirmCallback')();
    }

}
