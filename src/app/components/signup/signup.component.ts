import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Role } from '../../models/Role';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  addForm: FormGroup;
  roles: Role;

  submitted = false;

  constructor(
    private data: DataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.data.changeTitle('SignUp');
    this.addForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.addForm.value);

    if (this.addForm.valid) {
      this.userService.signUp(this.addForm.value).subscribe( () => {
        this.router.navigate(['/login']);
      });
    }
  }

  get f() { return this.addForm.controls; }
}
