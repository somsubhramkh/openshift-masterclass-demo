import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment} from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

// This service is responsible for the login and regisration of user
export class AuthService {

  constructor(private http: HttpClient) { }


  //Implement register method using HttpClient to register a user 
  register(user): Observable<any> {
    return this.http.post(environment.AUTH_API ,{
      email: user.email,
      password: user.password,
      role:user.role
    }, httpOptions);
  }

  //Implement login method using HttpClient for a user to login
  login(credentials): Observable<any> {
    return this.http.post(environment.AUTH_LOGIN_API, {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }



}
