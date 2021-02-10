import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Exam } from 'src/app/interfaces/exam';

@Component({
    selector: 'app-sort-modal',
    templateUrl: './sort-modal.page.html',
    styleUrls: ['./sort-modal.page.scss']
})
export class SortModalPage implements OnInit {

    private examsList: Exam[][];
    private activeSort: number;

    private readonly radioOptions = [
        {
            label: 'Data (crescente)',
            handler: () => this.sortByDate()
        },
        {
            label: 'Data (decrescente)',
            handler: () => this.sortByDate(false)
        },
        {
            label: 'Voto (crescente)',
            handler: () => this.sortByGrade()
        },
        {
            label: 'Voto (decrescente)',
            handler: () => this.sortByGrade(false)
        },
        {
            label: 'Crediti (crescente)',
            handler: () => this.sortByCredits()
        },
        {
            label: 'Crediti (decrescente)',
            handler: () => this.sortByCredits(false)
        },
        {
            label: 'Nome (crescente)',
            handler: () => this.sortByName()
        },
        {
            label: 'Nome (decrescente)',
            handler: () => this.sortByName(false)
        },
    ] as {
        label: string,
        handler: () => {}
    }[];

    constructor(
        private navParams: NavParams,
    ) {
        this.activeSort = 0;
        this.examsList = this.navParams.get('examsList');

        this.sort = this.sort.bind(this);
    }

    ngOnInit() { }

    async handleChange(event: CustomEvent) {
        this.activeSort = event.detail.value;
    }

    sort() {
        this.radioOptions[this.activeSort].handler();
    }

    private sortByDate(asc: boolean = true) {
        this.examsList.forEach(exams => {
            exams.sort((e1: Exam, e2: Exam) => {
                return asc
                    ? e1.passedDate.valueOf() - e2.passedDate.valueOf()
                    : e2.passedDate.valueOf() - e1.passedDate.valueOf();
            });
        });
    }

    private sortByGrade(asc: boolean = true) {
        this.examsList.forEach(exams => {
            exams.sort((e1: Exam, e2: Exam) => {
                const g1 = e1.maxGrade ? (e1.grade + 1) : e1.grade;
                const g2 = e2.maxGrade ? (e2.grade + 1) : e2.grade;

                return asc ? g1 - g2 : g2 - g1;
            });
        });
    }

    private sortByCredits(asc: boolean = true) {
        this.examsList.forEach(exams => {
            exams.sort((e1: Exam, e2: Exam) => {
                return asc ? e1.credits - e2.credits : e2.credits - e1.credits;
            });
        });
    }

    private sortByName(asc: boolean = true) {
        this.examsList.forEach(exams => {
            exams.sort((e1: Exam, e2: Exam) => {
                if (asc) {
                    return e1.name > e2.name ? -1 : 1;
                }

                return e1.name < e2.name ? -1 : 1;
            });
        });
    }

}
