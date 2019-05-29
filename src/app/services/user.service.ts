import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }

  updateUser(data: { id: number; }) {
    return this.http.put<User>(`${this.apiUrl}/user/${data.id}`, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }

  signUp(data: any) {
    return this.http.post(`${this.apiUrl}/signup`, data, {responseType: 'text'});
  }
}
