import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    private readonly customActionSheetOptions: any = {
        cssClass: 'form-select-action-sheet',
        header: 'Seleziona',
        mode: 'md'
    };

    private studentIds: String[];
    private activeCareer: number;

    constructor(
        private userService: UserService
    ) { }

    async ngOnInit() {
        const profile = await this.userService.getUser();
        const activeCareer = await this.userService.getActiveCareer() || 0;

        this.studentIds = profile.user.trattiCarriera.map((career: any) => {
            return career.matricola;
        });

        this.activeCareer = activeCareer;
    }

    private setCareer(event: CustomEvent) {
        this.userService.setActiveCareer(event.detail.value);
    }

}
