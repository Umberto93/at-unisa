import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';

import { Platform, isPlatform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, Router } from '@angular/router';
import { Account } from './interfaces/account';
import { ToastService } from './services/toast/toast.service';


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
                'profile': {
                    name: 'Profilo'
                },
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

    private wasOffline: boolean;

    constructor(
        private menuController: MenuController,
        private network: Network,
        private platform: Platform,
        private router: Router,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private screenOrientation: ScreenOrientation,
        private storage: Storage,
        private toastService: ToastService
    ) {
        this.initializeApp();
        this.isLoginPage = false;
        this.account = {} as Account;
        this.activeItem = 'home';
        this.activeSubItem = '';
        this.subMenuOpened = false;

        this.wasOffline = false;
    }

    async ngOnInit() {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.isLoginPage = event.urlAfterRedirects === '/login';
                this.getAccount();
                this.setMenuInitailState();
            }
        });

        this.network.onConnect().subscribe(() => {
            if (this.network.type === this.network.Connection.CELL ||
                this.network.type === this.network.Connection.CELL_2G ||
                this.network.type === this.network.Connection.CELL_3G ||
                this.network.type === this.network.Connection.CELL_4G
            ) {
                this.wasOffline = false;
                this.toastService.presentWarningToast({
                    header: 'Online',
                    message: 'È attiva la connessione dati.'
                });
            }

            if (this.wasOffline) {
                this.wasOffline = false;
                this.toastService.presentSuccessToast({
                    header: 'Online',
                    message: 'Di nuovo online.'
                });
            }
        });

        this.network.onDisconnect().subscribe(() => {
            setTimeout(() => {
                if (this.network.type === this.network.Connection.NONE) {
                    this.wasOffline = true;
                    this.toastService.presentToastWithIcon('cloud-offline', {
                        header: 'Offline',
                        message: 'Nessuna connessione Internet.'
                    });
                }
            }, 3000);
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

        if (pathParams.length > 3) {
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
