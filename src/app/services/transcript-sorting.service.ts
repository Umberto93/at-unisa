import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Exam } from '../interfaces/exam';

interface Sorting {
    value: number,
    asc: boolean
}

@Injectable({
    providedIn: 'root'
})
export class TranscriptSortingService {

    private readonly SORT_BY_NAME = 0;
    private readonly SORT_BY_DATE = 1;
    private readonly SORT_BY_GRADE = 2;
    private readonly SORT_BY_CREDIT = 3;

    private readonly storageKey = 'transcriptActiveSorting';

    constructor(
        private storage: Storage
    ) { }

    /**
     * Carica le preferenze dell'utente.
     */
    loadPreferences(): Promise<Sorting | null> {
        return this.storage.get(this.storageKey);
    }

    /**
     * Salva le preferenze dell'utente.
     * 
     * @param activeSorting Tipo di ordinamento degli esami nel libretto.
     * @param ascSorting Tipo di ordinamento (crescente | decrescente).
     */
    savePreferences(activeSorting: number, ascSorting: boolean): Promise<any> {
        return this.storage.set(this.storageKey, {
            value: activeSorting,
            asc: ascSorting
        });
    }

    /**
     * Ordina gli esami nella pagina del libretto in relazione alle preferenze dell'utente.
     * 
     * @param examsList La lista degli esami da ordinare.
     * @param sorting Il tipo di ordinamento (nome | data | voto | crediti).
     * @param asc Il tipo di ordinamento (crescente | decrescente).
     */
    sort(examsList: Exam[][], sorting: number, asc: boolean) {
        switch (sorting) {
            case this.SORT_BY_NAME:
                return this.sortByName(examsList, asc);
            case this.SORT_BY_DATE:
                return this.sortByDate(examsList, asc);
            case this.SORT_BY_GRADE:
                return this.sortByGrade(examsList, asc);
            case this.SORT_BY_CREDIT:
                return this.sortByCredits(examsList, asc);
            default:
                this.sortByName(examsList, asc);
        }
    }

    /**
     * Effettua un ordinamento per data.
     * 
     * @param examsList La lista degli esami da ordinare.
     * @param asc Il tipo di ordinamento (crescente | decrescente).
     */
    private sortByDate(examsList: Exam[][], asc: boolean = true) {
        examsList.forEach(exams => {
            exams.sort((e1: Exam, e2: Exam) => {
                return asc
                    ? e1.passedDate.valueOf() - e2.passedDate.valueOf()
                    : e2.passedDate.valueOf() - e1.passedDate.valueOf();
            });
        });
    }

    /**
     * Effettua un ordinamento per voto.
     * 
     * @param examsList La lista degli esami da ordinare.
     * @param asc Il tipo di ordinamento (crescente | decrescente).
     */
    private sortByGrade(examsList: Exam[][], asc: boolean = true) {
        examsList.forEach(exams => {
            exams.sort((e1: Exam, e2: Exam) => {
                const g1 = e1.maxGrade ? (e1.grade + 1) : e1.grade;
                const g2 = e2.maxGrade ? (e2.grade + 1) : e2.grade;

                return asc ? g1 - g2 : g2 - g1;
            });
        });
    }

    /**
     * Effettua un ordinamento per crediti.
     * 
     * @param examsList La lista degli esami da ordinare.
     * @param asc Il tipo di ordinamento (crescente | decrescente).
     */
    private sortByCredits(examsList: Exam[][], asc: boolean = true) {
        examsList.forEach(exams => {
            exams.sort((e1: Exam, e2: Exam) => {
                return asc ? e1.credits - e2.credits : e2.credits - e1.credits;
            });
        });
    }

    /**
     * Effettua un ordinamento per nome.
     * 
     * @param examsList La lista degli esami da ordinare.
     * @param asc Il tipo di ordinamento (crescente | decrescente).
     */
    private sortByName(examsList: Exam[][], asc: boolean = true) {
        examsList.forEach(exams => {
            exams.sort((e1: Exam, e2: Exam) => {
                if (asc) {
                    return e1.name > e2.name ? 1 : -1;
                }

                return e1.name < e2.name ? 1 : -1;
            });
        });
    }
}
