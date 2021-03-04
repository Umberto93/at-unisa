import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UserService } from './user/user.service';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    private requests: number;

    constructor(
        private userService: UserService,
        private loadingController: LoadingController
    ) {
        this.requests = 0;
    }

    /**
     * Intercetta le richieste inviate dal client concatenando automaticamente l'header di
     * autenticazione se i dati dell'utente sono presenti nello Ionic Storage. All'inizio viene
     * presentato un loading in attesa di ricevere la risposta da parte del server.
     * 
     * @param req La richiesta da inviare.
     * @param next L'handler per far andare avanti la richiesta.
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.prepareRequest(req, next));
    }

    private async prepareRequest(req: HttpRequest<any>, next: HttpHandler): Promise<any> {
        await this.presentLoading();

        const credentials = await this.userService.getCredentials();

        if (credentials) {
            if (req.url.includes(environment.esse3Api)) {
                req = req.clone({
                    setHeaders: {
                        'Authorization': 'Basic ' + credentials
                    }
                });
            }
        }

        return next.handle(req).pipe(
            finalize(async () => {
                await this.dismissLoading();
            })
        ).toPromise();
    }

    /**
     * Inserisce l'icona di caricamento.
     */
    private async presentLoading() {
        if (++this.requests === 1) {
            const loading = await this.loadingController.create({
                spinner: 'circular',
                mode: 'ios',
                cssClass: 'app-loading'
            });

            await loading.present();
        }
    }

    /**
     * Rimuove l'icona di caricamento.
     */
    private async dismissLoading() {
        if (--this.requests === 0) {
            await this.loadingController.dismiss();
        }
    }

}
