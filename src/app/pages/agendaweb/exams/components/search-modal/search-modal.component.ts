import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ExamsService } from 'src/app/services/agendaweb/exams/exams.service';

@Component({
    selector: 'app-search-modal',
    templateUrl: './search-modal.component.html',
    styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {

    private readonly customAlertOptions = {
        cssClass: 'form-select-alert',
        showBackdrop: false
    } as any;

    private isReady: boolean;
    private searchParams: any;
    private yearIndex: number;

    constructor(
        private examsService: ExamsService,
        private popoverController: PopoverController
    ) {
        this.isReady = false;
        this.searchParams = [];
        this.yearIndex = 0;
    }

    ngOnInit() {
        this.examsService.getExamsSearchParams()
            .subscribe(res => {
                this.isReady = true;
                this.searchParams = res;
            });
    }

    private setYearIndex(index: number) {
        this.yearIndex = index;
    }

    private getCourses(): any {
        return this.searchParams[this.yearIndex].elenco;
    }

    private async test() {
        const popover = await this.popoverController.getTop();
        console.log(popover);
    }

}
