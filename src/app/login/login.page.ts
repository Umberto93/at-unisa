import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
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
            console.log(this.loginForm.value.username);
            console.log(this.loginForm.value.password);
        }
    }

}
