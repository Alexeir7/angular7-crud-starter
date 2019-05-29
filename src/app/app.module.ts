import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PostService } from './services/post.service';
import { PostsListsComponent } from './components/posts/posts-lists/posts-lists.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { CategoryListsComponent } from './components/categories/category-lists/category-lists.component';
import { UserListsComponent } from './components/users/user-lists/user-lists.component';
import { LoginComponent } from './components/login/login.component';
import { JwtInterceptor } from './helpers';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostsListsComponent,
    AddPostComponent,
    EditPostComponent,
    CategoryListsComponent,
    UserListsComponent,
    LoginComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    SignupComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
