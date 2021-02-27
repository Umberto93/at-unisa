import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
    selector: 'app-course-filter-modal',
    templateUrl: './course-filter-modal.component.html',
    styleUrls: ['./course-filter-modal.component.scss'],
})
export class CourseFilterModalComponent implements OnInit {

    private courses: any;
    private checkedSet: Set<string>;
    private lessonsSet: Set<string>;
    private confirmCallback: Function;

    constructor(
        private navParams: NavParams
    ) {
        this.courses = this.navParams.get('courses');

        /* Set contenente i codici dei corsi di cui l'utente sta attualmente visualizzando 
         * le lezioni.
         */
        this.checkedSet = this.navParams.get('checkedSet');

        /* Nuovo Set contenente i nuovi codici dei corsi di cui l'utente vorrà visualizzare
         * le lezioni
         */
        this.lessonsSet = new Set(this.checkedSet);
        this.confirmCallback = this.navParams.get('confirmCallback');

        this.filterCallback = this.filterCallback.bind(this);
    }

    ngOnInit() { }

    /**
     * Effettua l'ordinamento crescente delle opzioni mostrate nel modale.
     * 
     * @param a E' la prima coppia <chiave, valore>. La chiave è una stringa che 
     * rappresenta il codice di un corso mentre il valore ne rappresenta il nome. 
     * @param b E' la seconda coppia <chiave, valore>. La chiave è una stringa che 
     * rappresenta il codice di un corso mentre il valore ne rappresenta il nome.
     */
    private ascSort(
        a: KeyValue<string, string>,
        b: KeyValue<string, string>) {
        return a.value.localeCompare(b.value);
    }

    /**
     * Permette di verificare se l'opzione in esame è associata a un corso di cui
     * l'utente desidera visualizzare le lezioni.
     * Il metodo verifica la presenza del codice del corso, passato come parametro
     * di input, all'interno del checkedSet (parametro passato come input al componente).
     * 
     * @param key Indica il codice dell'esame. 
     */
    private isChecked(key: string) {
        return this.checkedSet.has(key);
    }

    /**
     * Permette di aggiornare il lessonsSet (nuovo Set) sulla base dell'opzione
     * selezionata/deselezionata.
     *  
     * @param event L'evento di change della Ion Checkbox. 
     */
    private handleChange(event: CustomEvent) {
        const detail = event.detail;
        const checked = detail.checked;
        const value = detail.value;

        if (!checked) {
            this.lessonsSet.delete(value);
        } else {
            this.lessonsSet.add(value);
        }
    }

    /**
     * Callback per effettuare il filtraggio delle lezioni sulla base del lessonsSet
     * (nuovo Set).
     */
    private filterCallback() {
        this.confirmCallback(this.lessonsSet);
    }

}
