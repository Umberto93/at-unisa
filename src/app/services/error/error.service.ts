import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ToastService } from '../toast/toast.service';

@Injectable({
    providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

    constructor(
        private toastService: ToastService
    ) { }

    /**
     * Riconosce il tipo di errore che si è verificato e chiama l'opportuno handler per la gestione.
     * 
     * @param error L'errore che si è verificato.
     */
    handleError(error: HttpErrorResponse) {
        switch (true) {
            case (error.status === 401):
                this.handleError401();
                break;
            case (error.status >= 500 && error.status <= 599):
                this.handleError50X();
                break;
        }

        console.log(error);
    }

    /**
     * Handler per la gestione di errori 401 (Unauthorized).
     */
    handleError401() {
        this.toastService.presentFailureToast({
            message: 'Utente e/o password non corretti.'
        });
    }

    /**
     * Handler per la gestione di errori lato server.
     */
    handleError50X() {
        this.toastService.presentFailureToast({
            message: 'Non è stato possibile recuperare i dati.'
        });
    }
}
