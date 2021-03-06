import { IonSegment, IonSlides } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Tax } from 'src/app/interfaces/tax';
import { TaxService } from 'src/app/services/esse3/tax/tax.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-tax',
    templateUrl: './tax.page.html',
    styleUrls: ['./tax.page.scss'],
})
export class TaxPage implements OnInit {

    @ViewChild(IonSlides) slides: IonSlides;
    @ViewChild(IonSegment) segment: IonSegment;

    private persId: number;
    private isReady: boolean;
    private activeIndex: number;
    private labels: String[];
    private slideOpts: any;
    private taxsList: Tax[][];

    constructor(
        private userService: UserService,
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

        this.getTax = this.getTax.bind(this);
    }

    async ngOnInit() {
        const profile = await this.userService.getUser();

        this.persId = profile.user.persId;
        this.getTax();
    }

    /**
     * Recupera le tasse dello studente.
     */
    private getTax() {
        return this.taxService.getTax(this.persId)
            .subscribe((taxs: Tax[]) => {
                taxs.forEach(tax => {
                    const index = tax.payed ? 0 : 1;
                    this.taxsList[index].push(tax);
                });
                this.isReady = true;
            });
    }

    /**
     * Restituisce la data della tase in base a se la tassa è stata pagata o meno.
     * 
     * @param tax la specifica tassa.
     */
    private getDate(tax: Tax): Date {
        if (tax.payed) {
            return tax.paymentDate;
        }

        return tax.expirationDate;
    }

    /**
     * Aggiorna la slide alla pressione in base allo specifico Segment Button.
     * 
     * @param event L'evento associato al Segment Button.
     */
    private async slideTo(event: CustomEvent) {
        const target = event.target as HTMLIonSegmentButtonElement;
        const value = parseInt(target.value);

        await this.slides.slideTo(value);
        this.activeIndex = value;
    }

    /**
     * Aggiorna il Segment Button sulla base dell'indice corrente della slide.
     */
    private async setActiveIndex() {
        const index = await this.slides.getActiveIndex();

        if (index !== this.activeIndex) {
            const button = this.segment['el'].children[index] as HTMLElement;
            button.click();
        }
    }

}
