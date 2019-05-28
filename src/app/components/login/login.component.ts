import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Role } from '../../models/Role';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    role: Role;

    submitted = false;

    constructor(
        private data: DataService,
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.data.changeTitle('Login');

        this.loginForm = this.formBuilder.group({
            id: [],
            username: ['', Validators.required],
            password: ['', Validators.required],
          });
    }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.valid) {
            this.authenticationService.login(this.loginForm.value)
            .subscribe( data => {
              this.router.navigate(['']);
            });
          }
    }

    get f() { return this.loginForm.controls; }
}
