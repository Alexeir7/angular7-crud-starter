import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User;
  title: string;

  constructor(
    private data: DataService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit() {
    this.data.currentTitle.subscribe(title => this.title = title);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
