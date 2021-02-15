import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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
    }

    ngOnInit() {
    }

    ionViewDidLeave() {
        this.loginForm.reset();
        this.loginSubscription.unsubscribe();
    }

    private login() {
        if (this.loginForm.valid) {
            this.loginSubscription = this.auth.loginWithCredentials(
                this.loginForm.value.username,
                this.loginForm.value.password
            ).subscribe(
                () => { },
                err => console.log(err),
                () => {
                    this.router.navigateByUrl('/home');
                });
        }
    }

    private togglePassword() {
        this.showPassword = !this.showPassword;
    }

}
