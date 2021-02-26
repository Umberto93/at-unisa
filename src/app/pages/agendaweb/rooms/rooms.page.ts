import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonSegment, IonSlides, ModalController } from '@ionic/angular';
import { Room } from 'src/app/interfaces/room';
import { RoomEvent } from 'src/app/interfaces/room-event';
import { RoomsService } from 'src/app/services/agendaweb/rooms/rooms.service';
import { EventModalComponent } from './components/event-modal/event-modal.component';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.page.html',
    styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

    @ViewChild(IonSlides) slides: IonSlides;
    @ViewChild(IonSegment) segment: IonSegment;

    private readonly customActionSheetOptions: any = {
        cssClass: 'form-select-action-sheet',
        header: 'Seleziona',
        mode: 'md'
    };

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
    private isReady: boolean;
    private buildings: any[];
    private rooms: { [id: string]: Room };

    constructor(
        private formBuilder: FormBuilder,
        private roomsService: RoomsService,
        private modalController: ModalController
    ) {
        this.labels = ['Ricerca', 'Riepilogo'];
        this.activeIndex = 0;
        this.isReady = false;
        this.buildings = [];
        this.rooms = {} as { [id: string]: Room };

        this.roomsForm = this.formBuilder.group({
            building: new FormControl('', Validators.required),
            date: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.getRoomsFilter();
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
     * Trasforma la data nel formato locale (italiano DD/MM/YYYY).
     * 
     * @param date La data da manipolare.
     */
    private toLocalDateString(date: string) {
        return new Date(date).toLocaleDateString().replace(/\//g, '-');
    }

    /**
     * Verifica se l'oggetto rooms è vuoto.
     */
    private roomsIsEmpty() {
        return !Object.keys(this.rooms).length;
    }

    /**
     * Recupera le combo di filtraggio.
     */
    private getRoomsFilter() {
        return this.roomsService.getRoomsFilter()
            .subscribe((res: any) => {
                this.isReady = true;
                this.buildings = res;
            });
    }

    /**
     * Recupera l'elenco delle aule e dei relativi eventi ad esse associati.
     */
    private getRooms() {
        this.roomsService.getRooms(
            this.roomsForm.value.building,
            this.toLocalDateString(this.roomsForm.value.date)
        ).subscribe((res: { [id: string]: Room }) => {
            this.rooms = res;
            setTimeout(() => {
                this.activeIndex++;
                this.slides.slideTo(this.activeIndex);
            }, 300);
        })
    }

    /**
     * Mostra un modale contenente gli eventi relativi ad una specifica aula.
     * 
     * @param events La lista degli eventi.
     */
    private async getRoomEvents(events: RoomEvent[]) {
        const modal = await this.modalController.create({
            component: EventModalComponent,
            componentProps: {
                events: events
            },
            cssClass: 'app-modal'
        });

        return await modal.present();
    }

}
