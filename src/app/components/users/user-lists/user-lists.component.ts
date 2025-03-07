import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Category } from 'src/app/models/Category';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.changeTitle('Users');
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  editUser(userId: number){
    this.router.navigate(['/edit-user'], { queryParams: { userId } });
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe( () => {
      const userIndex = this.users.findIndex( (user) => user.id === userId);
      this.users.splice(userIndex, 1);
    });
  }
}
