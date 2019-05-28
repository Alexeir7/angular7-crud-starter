import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { CategoryListsComponent } from './components/categories/category-lists/category-lists.component';
import { UserListsComponent } from './components/users/user-lists/user-lists.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] }
  },
  {
    path: 'edit-post',
    component: EditPostComponent
  },
  {
    path: 'list-categories',
    component: CategoryListsComponent
  },
  {
    path: 'list-users',
    component: UserListsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
