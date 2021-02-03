import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private loginForm: FormGroup;
    private loginSubscription: Subscription;
    private showPassword: boolean;
    private storeCredentials: boolean;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private auth: AuthService
    ) {
        this.loginForm = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern(/^[a-z]{1}\.[a-z0-9]+$/i)
            ])),
            password: new FormControl('', Validators.required)
        });
        this.showPassword = false;
        this.storeCredentials = false;
    }

    ngOnInit() {
        
    }

    ionViewDidLeave() {
        this.loginSubscription.unsubscribe();
    }

    login() {
        if (this.loginForm.valid) {
            this.loginSubscription = this.auth.loginWithCredentials(
                this.loginForm.value.username,
                this.loginForm.value.password,
                this.storeCredentials
            ).subscribe(
                () => { },
                err => console.log(err),
                () => {
                    this.router.navigateByUrl('/home');
                });
        }
    }

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

}
