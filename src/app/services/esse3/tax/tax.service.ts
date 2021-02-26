import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tax } from 'src/app/interfaces/tax';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TaxService {

    readonly base = `${environment.esse3Api}/tasse-service-v1`;

    constructor(
        private http: HttpClient
    ) { }
    
    /**
     * Manipola la data restituita dal server creando un oggetto Date.
     * 
     * @param str La data in formato stringa.
     */
    private toDate(str: string): Date {
        return new Date(str.split('/').reverse().join('-'));
    }

    /**
     * Recupera le informazioni sulle tasse pagate e da pagare relative allo specifico utente.
     * 
     * @param persId L'id relativo alla specifica persona che viene restituito all'utente dopo 
     * aver effettuato l'autenticazione.
     */
    getTax(persId: number): Observable<Tax[]> {
        return this.http.get<Tax[]>(`${this.base}/lista-fatture`, {
            params: new HttpParams()
                .set('persId', `${persId}`)
        }).pipe(map((res: any) => {
            let taxs: Tax[] = [];

            res.forEach((el: any) => {
                el.importoFattura > 0 && taxs.push({
                    name: el.desMav1,
                    amount: el.importoFattura,
                    paymentDate: this.toDate(el.dataPagamento.split(' ')[0]),
                    expirationDate: this.toDate(el.scadFattura.split(' ')[0]),
                    payed: Boolean(el.pagatoFlg)
                } as Tax);
            });

            return taxs;
        }));
    }

}
