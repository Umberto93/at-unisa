import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationStart, Router } from '@angular/router';

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

    constructor(
        private router: Router,
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen
    ) {
        this.initializeApp();
    }

    ngOnInit() {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {
                this.isLoginPage = event.url === '/login';
            }
        });
    }

    async initializeApp() {
        await this.platform.ready();
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.isLoginPage = true;
    }

}
