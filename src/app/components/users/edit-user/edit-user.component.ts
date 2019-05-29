import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Role } from '../../../models/Role';
import { UserService } from '../../../services/user.service';
import { Category } from 'src/app/models/Category';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId: number;
  editForm: FormGroup;
  roles: Role;
  submitted = false;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.data.changeTitle('Edit User');
    this.editForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.route.queryParams
      .subscribe(params => {
        const userId = params.userId;
        if (!userId) {
          this.router.navigate(['/list-users']);
        }
        this.userId = userId;
        this.userService.getUser(userId).subscribe( (user: User) => {
          this.editForm.patchValue(user);
        });
      });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.editForm.value);

    if (this.editForm.valid) {
      this.userService.updateUser(this.editForm.value).subscribe( data => {
        this.router.navigate(['/list-users']);
      });
    }
  }

  get f() { return this.editForm.controls; }

}
