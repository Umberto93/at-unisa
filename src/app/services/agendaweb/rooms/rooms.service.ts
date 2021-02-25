import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from 'src/app/interfaces/room';

@Injectable({
    providedIn: 'root'
})
export class RoomsService {

    private readonly base = 'http://localhost/aw/';

    constructor(
        private http: HttpClient
    ) { }

    private parseResponse(res: any): String {
        return JSON.parse(res.split(';')[0].split('=')[1]);
    }

    getRoomsFilter(): Observable<any> {
        return this.http.get(`${this.base}/combo_call_new.php`, {
            params: new HttpParams()
                .set('sw', 'rooms_'),
            responseType: 'text'
        }).pipe(
            map((res: any) => {
                return this.parseResponse(res);
            })
        );
    }

    getRooms(building: string, date: string): Observable<{ [id: string]: Room }> {
        return this.http.get(`${this.base}/rooms_call_new.php`, {
            params: new HttpParams()
                .set('view', 'rooms')
                .set('include', 'rooms')
                .set('sede', building)
                .set('date', date)
        }).pipe(
            map((res: any) => {
                const events = res.events;
                const rooms = {} as { [id: string]: Room };

                events.forEach((event: any) => {
                    if (!(event.CodiceAula in rooms)) {
                        const room = {} as Room;

                        room.name = event.NomeAula;
                        room.code = event.CodiceAula;
                        room.timeSlots = [{
                            from: new Date(event.timestamp_from * 1000),
                            to: new Date(event.timestamp_to * 1000)
                        }];
                        room.events = [{
                            name: event.nome.replace('<i class="fa fa-asterisk" aria-hidden title="*"></i>', '').trim(),
                            type: event.tipo,
                            profs: event.Utenti.map((user: any) => ({
                                firstname: user.Nome,
                                lastname: user.Cognome,
                                mail: user.Mail
                            })),
                            from: new Date(event.timestamp_from * 1000),
                            to: new Date(event.timestamp_to * 1000)
                        }];

                        rooms[event.CodiceAula] = room;
                    } else {
                        rooms[event.CodiceAula].timeSlots.push({
                            from: new Date(event.timestamp_from * 1000),
                            to: new Date(event.timestamp_to * 1000)
                        });

                        rooms[event.CodiceAula].events.push({
                            name: event.nome.replace('<i class="fa fa-asterisk" aria-hidden title="*"></i>', '').trim(),
                            type: event.tipo,
                            profs: event.Utenti.map((user: any) => ({
                                firstname: user.Nome,
                                lastname: user.Cognome,
                                mail: user.Mail
                            })),
                            from: new Date(event.timestamp_from * 1000),
                            to: new Date(event.timestamp_to * 1000)
                        });
                    }
                });

                return rooms;
            })
        );
    }
}