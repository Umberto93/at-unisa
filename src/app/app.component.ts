import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform, isPlatform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Account } from './interfaces/account';
import { AuthService } from './services/auth.service';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    private readonly menuItems = {
        'home': {
            name: 'Home',
            icon: 'fa-home'
        },
        'esse3': {
            name: 'Carriera',
            icon: 'fa-user-graduate',
            routes: {
                'transcript': {
                    name: 'Libretto'
                },
                'tax': {
                    name: 'Tasse'
                }
            }
        },
        'settings': {
            name: 'Impostazioni',
            icon: 'fa-cog'
        }
    };

    private isLoginPage: boolean;
    private account: Account;
    private activeItem: string;
    private activeSubItem: string;
    private subMenuOpened: boolean;

    constructor(
        private router: Router,
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private screenOrientation: ScreenOrientation,
        private storage: Storage,
        private menuController: MenuController
    ) {
        this.initializeApp();
        this.isLoginPage = false;
        this.account = {} as Account;
        this.activeItem = '';
        this.activeSubItem = '';
        this.subMenuOpened = false;
    }

    async ngOnInit() {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.isLoginPage = event.urlAfterRedirects === '/login';
                this.getAccount();
                this.setMenuInitailState();
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

    private async getAccount() {
        const user = await this.storage.get('user');

        if (user) {
            this.account.id = user.user.trattiCarriera[0].matricola;
            this.account.firstname = user.user.firstName.toLowerCase();
            this.account.lastname = user.user.lastName.toLowerCase();
            this.account.email = `${user.user.userId.toLowerCase()}@studenti.unisa.it`;
            this.account.avatar = this.account.firstname[0] + this.account.lastname[0];
        }
    }

    private noSort() {
        return 0;
    }

    private setMenuInitailState() {
        const pathParams = this.router.url.split('/');

        this.activeItem = pathParams[1];

        if (pathParams.length > 2) {
            this.activeSubItem = pathParams[2];
            this.subMenuOpened = true;
        }
    }

    private closeMenu() {
        this.menuController.close();
    }

    private toggleSubMenu() {
        this.subMenuOpened = !this.subMenuOpened;
    }

    private navigateForward(item: any, path: string) {
        this.activeItem = path;

        if (!item.routes) {
            this.closeMenu();
            return this.router.navigateByUrl(path);
        }

        this.toggleSubMenu();
    }

    private navigateBack() {
        this.toggleSubMenu();
    }

    private logout() {
        this.storage.clear();
        this.router.navigateByUrl('/login');
    }

}
