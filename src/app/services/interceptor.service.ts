import { Observable, from, EMPTY } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { Network } from '@capacitor/core';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    private hasLoading: boolean;
    private requests: number;

    constructor(
        private storage: Storage,
        private loadingController: LoadingController
    ) {
        this.hasLoading = false;
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
        const credentials = await this.storage.get('credentials');

        if (credentials) {
            req = req.clone({
                setHeaders: {
                    'Authorization': 'Basic ' + credentials
                }
            });
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
