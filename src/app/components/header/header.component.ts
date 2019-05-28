import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../models/User';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(
    private data: DataService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

  get isEditor() {
    return this.currentUser && this.currentUser.role === Role.EDITOR;
  }

  ngOnInit() {}
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
