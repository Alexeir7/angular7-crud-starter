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
import { PostsListsComponent } from './components/posts/posts-lists/posts-lists.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list-posts',
    component: PostsListsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.EDITOR] }
  },
  {
    path: 'edit-post',
    component: EditPostComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.EDITOR] }
  },
  {
    path: 'list-categories',
    component: CategoryListsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.EDITOR] }
  },
  {
    path: 'edit-category',
    component: EditCategoryComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.EDITOR] }
  },
  {
    path: 'list-users',
    component: UserListsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] }
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
