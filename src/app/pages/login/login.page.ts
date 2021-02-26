import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private loginForm: FormGroup;
    private loginSubscription: Subscription;
    private showPassword: boolean;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private toastService: ToastService
    ) {
        this.loginForm = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern(/^[a-z]{1}\.[a-z0-9]+$/i)
            ])),
            password: new FormControl('', Validators.required)
        });
        this.showPassword = false;
    }

    ngOnInit() {
    }

    ionViewDidLeave() {
        this.loginForm.reset();
        this.loginSubscription.unsubscribe();
    }

    /**
     * Effettua il login se e solo se i dati inseriti rispettano le condizioni imposte dai
     * Validators.
     */
    private login() {
        if (this.loginForm.valid) {
            this.loginSubscription = this.auth.loginWithCredentials(
                this.loginForm.value.username,
                this.loginForm.value.password
            ).subscribe(
                () => { },
                err => {
                    throw err;
                },
                () => {
                    this.toastService.presentSuccessToast({
                        message: 'Login effettuato con successo!'
                    });
                    this.router.navigateByUrl('/home');
                });
        }
    }

    /**
     * Cambia l'input da password a testuale o viceversa permettendo all'utente di poter vedere la
     * propria password durante la digitazione.
     */
    private togglePassword() {
        this.showPassword = !this.showPassword;
    }

}
