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

    handleError401() {
        this.toastService.presentFailureToast({
            message: 'Utente e/o password non corretti.'
        });
    }

    handleError50X() {
        this.toastService.presentFailureToast({
            message: 'Non è stato possibile recuperare i dati.'
        });
    }
}
