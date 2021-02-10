import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly base = `${environment.esse3Api}/anagrafica-service-v2`;

  constructor(
    private http: HttpClient
  ) { }
/*
  getProfile(persId: number): Observable<any> {
    return this.http.get(`${this.base}/persone/${persId}`)
      .pipe(map((res: any) => {
        return res;
      })
  }
  */
}
