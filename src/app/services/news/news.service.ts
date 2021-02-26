import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from 'src/app/interfaces/news';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private readonly base = 'https://www.unisa.it/proxy-test/rss/news/';

    constructor(
        private http: HttpClient
    ) { }
    
    /**
     * Effettua il parsinga di una stringa HTML.
     * 
     * @param html La stringa HTML da parsare.
     */
    private parseHTML(html: string): string {
        const div = document.createElement('DIV');
        div.innerHTML = html;
        return div.textContent.trim();
    }

    /**
     * Preleva le news di ateneo sfruttando il servizio RSS messo a disposizione dall'Università.
     * La risposta restituita è in formato XML, quindi si vede necessario manipolarla opportunamente
     * al fine di restituire i dati di interesse in maniera pulita.
     */
    getNews(): Observable<News[]> {
        return this.http.get(this.base, {
            responseType: 'text'
        }).pipe(
            map((res: any) => {
                const doc = new DOMParser().parseFromString(res, 'text/xml');
                const items = doc.querySelectorAll('item');
                const news = [] as News[];

                Array.from(items).forEach(item => {
                    const title = item.querySelector('title');
                    const date = item.querySelector('pubDate');
                    const content = item.querySelector('encoded');

                    news.push({
                        title: title.textContent,
                        date: new Date(date.textContent),
                        content: this.parseHTML(content.textContent)
                    })
                });

                return news;
            })
        );
    }
}
