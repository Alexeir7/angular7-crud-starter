import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { User } from '../../models/User';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  userFromApi: User;

  constructor(
    private data: DataService,
    private userService: UserService,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
    this.data.changeTitle('Posts');

    this.userService.getUser(this.currentUser.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
    });
  }

}
