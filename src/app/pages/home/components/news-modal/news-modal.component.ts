import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { News } from 'src/app/interfaces/news';

@Component({
    selector: 'app-news-modal',
    templateUrl: './news-modal.component.html',
    styleUrls: ['./news-modal.component.scss'],
})
export class NewsModalComponent implements OnInit {

    private news: News;

    constructor(
        private navParams: NavParams
    ) {
        this.news = navParams.get('news');
    }

    ngOnInit() { }

}
