import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { News } from 'src/app/interfaces/news';
import { Tax } from 'src/app/interfaces/tax';
import { TaxService } from 'src/app/services/esse3/tax/tax.service';
import { NewsService } from 'src/app/services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';
import { NewsModalComponent } from './components/news-modal/news-modal.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private readonly NEWS_TO_SHOW = 3;
    private readonly NEWS_MAX_CONTENT = 100;
    private readonly ONE_DAY = 640000000;

    private readonly months = [
        'Gennaio',
        'Febbraio',
        'Marzo',
        'Aprile',
        'Maggio',
        'Giugno',
        'Luglio',
        'Agosto',
        'Settembre',
        'Ottobre',
        'Novembre',
        'Dicembre'
    ];

    private readonly slideOpts: any = {
        spaceBetween: 20,
        slidesPerView: 'auto'
    };

    private profile: any;
    private news: News[];
    private taxes: Tax[];

    constructor(
        private userService: UserService,
        private newsService: NewsService,
        private taxService: TaxService,
        private modalController: ModalController
    ) {
        this.profile = null;
        this.taxes = [];
    }

    async ngOnInit() {
        this.profile = await this.userService.getUser();
        this.getNews();
        this.getTaxes();
    }

    /**
     * Preleva le news di ateneo.
     */
    private async getNews() {
        this.newsService.getNews()
            .subscribe((res: News[]) => {
                this.news = res.slice(0, this.NEWS_TO_SHOW);
            });
    }

    /**
     * Preleva le tasse da pagare.
     */
    private async getTaxes() {
        this.taxService.getTax(this.profile.user.persId)
            .subscribe((res: Tax[]) => {
                this.taxes = res.filter(tax => !tax.payed)
                    .sort((t1: Tax, t2: Tax) => {
                        return t1.expirationDate.getTime() - t2.expirationDate.getTime();
                    })
            });
    }

    /**
     * Restituisce la data della notizia specificando il giorno e il mese in italiano.
     * 
     * @param news La notizia.
     */
    private getNewsDate(news: News): { date: string, month: string } {
        return {
            date: `0${news.date.getDate().toString()}`.slice(-2),
            month: this.months[news.date.getMonth()].slice(0, 3)
        }
    }

    /**
     * Verifica se una tassa è scaduta.
     * 
     * @param tax La tassa da analizzare.
     */
    private taxIsExpired(tax: Tax) {
        return new Date() > tax.expirationDate;
    }

    /**
     * Restituisce i giorni rimanenti per il pagamento della specifica tassa.
     * 
     * @param tax La tassa da analizzare.
     */
    private getTimeLeft(tax: Tax): number {
        const now = new Date();
        const expirationDate = tax.expirationDate;

        return expirationDate.getDate() - now.getDate();
    }

    /**
     * Mostra i dettagli di una specifica news.
     * 
     * @param news News.
     */
    private async presentNewsModal(news: News) {
        const modal = await this.modalController.create({
            component: NewsModalComponent,
            componentProps: {
                news: news
            },
            cssClass: 'app-modal'
        });

        await modal.present();
    }
}
