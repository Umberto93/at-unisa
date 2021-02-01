import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(
        private storage: Storage
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.storage.get('credentials')).pipe(
            switchMap(credentials => {
                if (credentials) {
                    req = req.clone({
                        setHeaders: {
                            'Authorization': `Basic ${credentials}`
                        }
                    });
                }

                return next.handle(req).pipe(
                    catchError(error => {
                        if (error.status === 401) {
                            this.storage.remove('user');
                            this.storage.remove('credentials');
                        }

                        throw error;
                    })
                );
            }));
    }
}
