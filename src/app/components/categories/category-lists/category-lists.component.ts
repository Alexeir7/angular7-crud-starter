import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-category-lists',
  templateUrl: './category-lists.component.html',
  styleUrls: ['./category-lists.component.scss']
})
export class CategoryListsComponent implements OnInit {
  categories: Category[];
  currentUser: User;

  constructor(
    private categoryService: CategoryService,
    private data: DataService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    this.data.changeTitle('Categories');
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

  get isEditor() {
    return this.currentUser && this.currentUser.role === Role.EDITOR;
  }

  editCategory(categoryId: number) {
    this.router.navigate(['/edit-category'], { queryParams: { categoryId } });
  }

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe( () => {
      const categoryIndex = this.categories.findIndex( (category) => category.id === categoryId);
      this.categories.splice(categoryIndex, 1);
    });
  }

}
