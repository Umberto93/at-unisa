import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TranscriptService } from '../../services/esse3/transcript.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private exams: any = [];

    constructor(
        private router: Router,
        private storage: Storage,
        private transcripts: TranscriptService
    ) { }

    ngOnInit() {}

    /* Method used only for testing */
    testMethod() {
        this.storage.clear();
        this.router.navigateByUrl('/login');
    }
}
