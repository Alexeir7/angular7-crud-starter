import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { CategoryListsComponent } from './components/categories/category-lists/category-lists.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'edit-post',
    component: EditPostComponent
  },
  {
    path: 'list-categories',
    component: CategoryListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
