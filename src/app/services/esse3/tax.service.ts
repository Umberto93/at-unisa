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

    readonly base = `${environment.esse3Api}/tasse-service-v1/`;

    constructor(
        private http: HttpClient
    ) { }

    getTax(persId: number): Observable<Tax[]> {
        return this.http.get<Tax[]>(`${this.base}/lista-fatture`, {
            params: new HttpParams()
                .set('persId', `${persId}`)
        }).pipe(map((res: any) => {
            return res.map((tax: any) => {
                return {
                    name: tax.desMav1,
                    paymentDate: tax.dataPagamento,
                    expirationDate: tax.scadFattura,
                    payed: Boolean(tax.pagatoFlg)
                } as Tax;
            });
        }));
    }

}
