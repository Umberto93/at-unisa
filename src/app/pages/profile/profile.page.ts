import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileDetails } from 'src/app/interfaces/profile-details';
import { ProfileService } from 'src/app/services/esse3/profile/profile.service';

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
        private storage: Storage,
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
        const user = await this.storage.get('user');
        this.persId = user.user.persId;
        this.getProfile();
    }

    private getProfile() {
        return this.profileService.getProfile(this.persId)
            .subscribe((profile: Profile) => {
                this.isReady = true;
                this.profile = profile;
            })
    }

    private noSort() {
        return 0;
    }

    private async slideTo(event: CustomEvent) {
        const target = event.target as HTMLIonSegmentButtonElement;
        const value = parseInt(target.value);

        await this.slides.slideTo(value);
        this.activeIndex = value;
    }

    private async setActiveIndex() {
        const index = await this.slides.getActiveIndex();

        if (index !== this.activeIndex) {
            const button = this.segment['el'].children[index] as HTMLElement;
            button.click();
        }
    }

}
