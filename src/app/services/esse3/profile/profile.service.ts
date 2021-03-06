import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileDetails } from 'src/app/interfaces/profile-details';
import { ProfileResidence } from 'src/app/interfaces/profile-residence';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private readonly base = `${environment.esse3Api}/anagrafica-service-v2`;

    constructor(
        private http: HttpClient
    ) { }
    
    /**
     * Preleva le informazioni relative all'anagrafica dell'utente.
     * 
     * @param persId L'id relativo alla specifica persona che viene restituito all'utente dopo 
     * aver effettuato l'autenticazione.
     */
    getProfile(persId: number): Observable<Profile> {
        return this.http.get<Profile>(`${this.base}/persone/${persId}`)
            .pipe(map((res: any) => {

                const details: ProfileDetails = {
                    birthCountry: res.naziNascDes,
                    birthDate: this.getDate(res.dataNascita),
                    birthDistrict: res.comuNascDes,
                    birthProvince: res.provNascDes,
                    citizenship: res.desCittadinanza,
                    gender: res.sesso,
                    firstname: res.nome,
                    fiscalCode: res.codFis,
                    lastname: res.cognome,
                };

                const residence: ProfileResidence = {
                    address: res.viaRes,
                    district: res.comuResDes,
                    nation: res.naziResDes,
                    province: res.comuResSigla,
                    phone: res.telRes,
                    streetNumber: res.numCivRes,
                    zipCode: res.capRes
                };

                const domicile: ProfileResidence = {
                    address: res.viaDom,
                    district: res.comuDomDes,
                    nation: res.naziDomDes,
                    province: res.comuDomSigla,
                    phone: res.telDom,
                    streetNumber: res.numCivDom,
                    zipCode: res.capDom
                }

                const isResEqualDom: boolean = this.isEqual(residence, domicile);


                return {
                    details: details,
                    residence: residence,
                    isResEqualDom: isResEqualDom,
                    ...(!isResEqualDom && { domicile: domicile })
                } as Profile;
            }));
    }

    /**
     * Manipola la data restituita dal server, prelevando solo la porzione di interesse, eliminando
     * l'orario.
     * 
     * @param dateTime La data restituita in risposta dal server.
     */
    private getDate(dateTime: string): String {
        return dateTime.split(' ')[0];
    }

    /**
     * Il metodo ritorna true se la residenza e il domicilio coincidono.
     * 
     * @param resObj L'oggetto residenza.
     * @param domObj L'oggetto domicilio.
     */
    private isEqual(resObj: ProfileResidence, domObj: ProfileResidence): boolean {
        const keysRes = Object.keys(resObj);

        keysRes.forEach((key: any) => {
            if (resObj[key] !== domObj[key]) {
                return false;
            }
        });

        return true;
    }

}
