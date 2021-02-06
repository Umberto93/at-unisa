import { Storage } from '@ionic/storage';
import { IonSlides } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Tax } from 'src/app/interfaces/tax';
import { TaxService } from 'src/app/services/esse3/tax.service';

@Component({
    selector: 'app-tax',
    templateUrl: './tax.page.html',
    styleUrls: ['./tax.page.scss'],
})
export class TaxPage implements OnInit {

    @ViewChild(IonSlides) slides: IonSlides;

    private isReady: boolean;
    private activeIndex: number;
    private labels: String[];
    private slideOpts: any;
    private taxsList: Tax[][];

    constructor(
        private storage: Storage,
        private taxService: TaxService
    ) {
        this.taxsList = [[], []];
        this.labels = ['Pagate', 'Da pagare'];
        this.activeIndex = 0;
        this.isReady = false;
        this.slideOpts = {
            autoHeight: true,
            spaceBetween: 20
        }
    }

    ngOnInit() {
        this.storage.get('user').then(user => {
            const persId = user.user.persId;
            this.taxService.getTax(persId)
                .subscribe((taxs: Tax[]) => {
                    taxs.forEach(tax => {
                        const index = tax.payed ? 0 : 1;
                        this.taxsList[index].push(tax);
                    });
                    this.isReady = true;
                });
        });
    }

    getDate(tax: Tax): string {
        if (tax.payed) {
            return tax.paymentDate.split(' ')[0];
        }

        return tax.expirationDate.split(' ')[0];
    }

    slideTo(event: any) {
        this.slides.slideTo(event.target.value).then(() => {
            this.activeIndex = event.target.value;
        });
    }

    setActiveIndex() {
        this.slides.getActiveIndex().then(index => {
            this.activeIndex = index;
        });
    }

}
