import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExamsService } from 'src/app/services/agendaweb/exams/exams.service';

@Component({
    selector: 'app-exams',
    templateUrl: './exams.page.html',
    styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {

    private readonly customActionSheetOptions: any = {
        cssClass: 'form-select-action-sheet',
        header: 'Seleziona',
        mode: 'md'
    };

    private examsForm: FormGroup;
    private isReady: boolean;
    private searchParams: any[];
    private yearIndex: number;
    private courseIndex: number;
    private courseYearIndex: number;

    constructor(
        private examsService: ExamsService,
        private formBuilder: FormBuilder,
    ) {
        this.isReady = false;
        this.searchParams = [];
        this.yearIndex = -1;
        this.courseIndex = -1;
        this.courseYearIndex = -1;

        this.examsForm = this.formBuilder.group({
            year: new FormControl('', Validators.required),
            course: new FormControl('', Validators.required),
            courseYear: new FormControl('', Validators.required),
            term: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.examsService.getExamsSearchParams()
            .subscribe(res => {
                console.log(res);
                this.isReady = true;
                this.searchParams = res as any[];
            });
    }

    private setYearIndex(event: CustomEvent) {
        this.yearIndex = event.detail.value.index;
    }

    private setCourseIndex(event: CustomEvent) {
        this.courseIndex = event.detail.value.index;
    }

    private setCourseYearIndex(event: CustomEvent) {
        this.courseYearIndex = event.detail.value.index;
    }

    private getCourses(): any {
        if (this.yearIndex === -1) {
            return [];
        }

        return this.searchParams[this.yearIndex].elenco;
    }

    private getCourseYears(): any {
        if (this.courseIndex === -1) {
            return [];
        }

        return this.getCourses()[this.courseIndex].elenco_anni;
    }

    private getTerms(): any {
        if (this.courseYearIndex === -1) {
            return [];
        }

        return this.getCourseYears()[this.courseYearIndex].elenco_sessioni;
    }

}
