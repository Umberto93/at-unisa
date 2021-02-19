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

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.prepareRequest(req, next));
    }

    private async prepareRequest(req: HttpRequest<any>, next: HttpHandler): Promise<any> {
        await this.presentLoading();
        const credentials = await this.storage.get('credentials');

        console.log(req);

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

    private async dismissLoading() {
        if (--this.requests === 0) {
            await this.loadingController.dismiss();
        }
    }

}
