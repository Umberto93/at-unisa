import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileDetails } from 'src/app/interfaces/profile-details';
import { ProfileService } from 'src/app/services/esse3/profile/profile.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    @ViewChild(IonSlides) slides: IonSlides;
    @ViewChild(IonSegment) segment: IonSegment;

    private persId: number;
    private isReady: boolean;
    private activeIndex: number;
    private labels: String[];
    private slideOpts: any;
    private profile: Profile;
    private detailsTranslation: any;
    private homeTranslation: any;

    constructor(
        private userService: UserService,
        private profileService: ProfileService
    ) {
        this.labels = ['Anagrafica', 'Abitazione'];
        this.activeIndex = 0;
        this.isReady = false;
        this.slideOpts = {
            autoHeight: true,
            spaceBetween: 20
        };

        this.detailsTranslation = {
            firstname: 'nome',
            lastname: 'cognome',
            gender: 'sesso',
            birthDate: 'data di nascita',
            citizenship: 'cittadinanza',
            birthCountry: 'nazione di nascita',
            birthProvince: 'provincia di nascita',
            birthDistrict: 'comune/città di nascita',
            fiscalCode: 'codice fiscale'
        };

        this.homeTranslation = {
            nation: 'nazione',
            province: 'provincia',
            district: 'comune/città',
            zipCode: 'CAP',
            address: 'indirizzo',
            streetNumber: 'n° civico',
            phone: 'telefono'
        };

        this.getProfile = this.getProfile.bind(this);
    }

    async ngOnInit() {
        const profile = await this.userService.getUser();

        this.persId = profile.user.persId;
        this.getProfile();
    }

    /**
     * Recupera i dati dell'utenti relativi all'anagrafica e alla residenza / domicilio.
     */
    private getProfile() {
        return this.profileService.getProfile(this.persId)
            .subscribe((profile: Profile) => {
                this.isReady = true;
                this.profile = profile;
            })
    }

    /**
     * Non imposta alcun tipo di ordinamento sull'oggetto.
     */
    private noSort() {
        return 0;
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
