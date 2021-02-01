import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm: FormGroup;

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
    }

    ngOnInit() {
    }

    login() {
        if (this.loginForm.valid) {
            this.auth.loginWithCredentials(
                this.loginForm.value.username,
                this.loginForm.value.password)
                .subscribe(
                    () => { },
                    err => console.log(err),
                    () => {
                        this.router.navigateByUrl('/home');
                    });
        }
    }

}
