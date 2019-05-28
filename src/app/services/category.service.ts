import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.apiUrl;

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  getCategories() {
    return this.http.get(`${this.apiUrl}/category`);
  }

  getCategory(categoryId: number){
    return this.http.get<Category>(`${this.apiUrl}/category/${categoryId}`);
  }

  addCategory(data: any) {
    return this.http.post(`${this.apiUrl}/category`, data);
  }

  editPost(data: { id: number; }){
    return this.http.put(`${this.apiUrl}/category/${data.id}`, data);
  }

  deleteCategory(categoryId: number){
    return this.http.delete(`${this.apiUrl}/category/${categoryId}`);
  }
}
