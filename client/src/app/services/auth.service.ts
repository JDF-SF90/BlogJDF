import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======
import { JwtResponse } from '../models/jwt-response';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

>>>>>>> new_branch

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  google() {
    return this.http.get(`${this.API_URI}/auth/google`);
  }
=======
  API_URI = 'http://localhost:3000/api/auth';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  register(user: User): Observable<any> {

    return this.http.post<any>(`${this.API_URI}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post<JwtResponse>(`${this.API_URI}/login`, user);
 }

  public logOut(): void {
   this.token = '';
   localStorage.removeItem('ACCESS_TOKEN');
   localStorage.removeItem('EXPIRES_IN');
   localStorage.removeItem('UAL');
   this.router.navigate(['/login']);
 }

  public saveToken(token: string, expiresIn: string, ual: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    localStorage.setItem('UAL', ual);
    this.token = token;
  }

  public loggedIn(): boolean {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }

  public ual(): boolean {
    if (localStorage.getItem('UAL') === '1' && !!localStorage.getItem('ACCESS_TOKEN')) {
      return true;
    } else {
      return false;
    }
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }

    return this.token;
  }

>>>>>>> new_branch
}
