import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonSegment, IonSlides } from '@ionic/angular';
import { RoomsService } from 'src/app/services/agendaweb/rooms/rooms.service';

@Component({
    selector: 'app-free-rooms',
    templateUrl: './free-rooms.page.html',
    styleUrls: ['./free-rooms.page.scss'],
})
export class FreeRoomsPage implements OnInit {

    @ViewChild(IonSlides) slides: IonSlides;
    @ViewChild(IonSegment) segment: IonSegment;

    private readonly slideOpts: any = {
        autoHeight: true,
        spaceBetween: 20
    };

    private readonly pickerOptions: any = {
        cssClass: 'form-picker'
    };

    private labels: String[];
    private activeIndex: number;
    private roomsForm: FormGroup;
    private buildings: any;

    constructor(
        private formBuilder: FormBuilder,
        private roomsService: RoomsService
    ) {
        this.labels = ['Ricerca', 'Riepilogo'];
        this.activeIndex = 0;
        this.buildings = {};

        this.roomsForm = this.formBuilder.group({
            datefrom: new FormControl('', Validators.required),
            dateto: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
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

    /**
     * Recupera l'elenco delle aule libere dell'ateneo.
     */
    private getFreeRooms() {
        this.roomsService.getFreeRooms(
            new Date(this.roomsForm.value.datefrom),
            new Date(this.roomsForm.value.dateto),
        ).subscribe((res: any) => {
            this.buildings = res;
            setTimeout(() => {
                this.activeIndex++;
                this.slides.slideTo(this.activeIndex);
            }, 300);
        });
    }
}
