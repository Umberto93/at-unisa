import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, Router } from '@angular/router';
import { Account } from './interfaces/account';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    private isLoginPage: boolean;
    private menuRoute = [
        {
            path: '/home',
            name: 'Home'
        },
        {
            path: '/transcript',
            name: 'Libretto'
        },
        {
            path: '/tax',
            name: 'Tasse'
        }
    ];
    private account: Account;

    constructor(
        private router: Router,
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private storage: Storage
    ) {
        this.initializeApp();
        this.isLoginPage = false;
        this.account = {} as Account;
    }

    ngOnInit() {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.isLoginPage = event.urlAfterRedirects === '/login';
            }
        });

        this.storage.get('user').then(user => {
            this.account.id = user.user.trattiCarriera[0].matricola;
            this.account.firstname = user.user.firstName.toLowerCase();
            this.account.lastname = user.user.lastName.toLowerCase();
            this.account.email = `${user.user.userId.toLowerCase()}@studenti.unisa.it`;
            this.account.avatar = this.account.firstname[0] + this.account.lastname[0];
        });
    }

    async initializeApp() {
        await this.platform.ready();
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    }

}
