import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  loginDoctor(email: string, password: string): Observable<boolean> {
    return this.http.post<{token: string, name: string}>('http://localhost:3000/doctorsLogin', {email: email, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('name', result.name);
          localStorage.setItem('doc', "true");
          return true;
        })
      );
  }

  loginUser(email: string, password: string): Observable<boolean> {
    return this.http.post<{token: string, name: string}>('http://localhost:3000/usersLogin', {email: email, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('name', result.name);
          localStorage.setItem('doc', "false");
          return true;
        })
      );
  }

  

  logout() {
    localStorage.removeItem('access_token');
  }

  logoutDoctor() {
    localStorage.removeItem('access_token');
  }
  public get getName(): string {
    return (localStorage.getItem('name'));
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
  public get isDoctor(): boolean {
    return (localStorage.getItem('doc') == "true");
  }
}