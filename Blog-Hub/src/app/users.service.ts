import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000';
  private username: string = '';

  constructor(
    private http: HttpClient
  ) { }

  signup(user: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/signup`, user);
  }

  signin(user: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/signin`, user);
  }

  getUsers(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/getusers`);
  }

  setUsername(username: string): void {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }
}
