import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    private isLoginPage: boolean;
    private menuRoute = [
        {
            path: '/home',
            name: 'Home'
        },
        {
            path: '/transcript',
            name: 'Libretto'
        }
    ];

    constructor(
        private router: Router,
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen
    ) {
        this.initializeApp();
        this.isLoginPage = false;
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {
                this.isLoginPage = event.url === '/login';
            }
        })
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

}
