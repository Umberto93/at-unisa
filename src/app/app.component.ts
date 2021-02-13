import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform, isPlatform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
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
        private screenOrientation: ScreenOrientation,
        private storage: Storage
    ) {
        this.initializeApp();
        this.isLoginPage = false;
        this.account = {} as Account;
    }

    async ngOnInit() {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.isLoginPage = event.urlAfterRedirects === '/login';
                this.getAccount();
            }
        });
    }

    async initializeApp() {
        await this.platform.ready();
        this.statusBar.styleDefault();
        this.splashScreen.hide();

        if (isPlatform('android') || isPlatform('ios')) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
    }

    async getAccount() {
        const user = await this.storage.get('user');

        if (user) {
            this.account.id = user.user.trattiCarriera[0].matricola;
            this.account.firstname = user.user.firstName.toLowerCase();
            this.account.lastname = user.user.lastName.toLowerCase();
            this.account.email = `${user.user.userId.toLowerCase()}@studenti.unisa.it`;
            this.account.avatar = this.account.firstname[0] + this.account.lastname[0];
        }
    }

}
