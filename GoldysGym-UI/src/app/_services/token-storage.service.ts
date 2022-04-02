import { Injectable } from '@angular/core';
// const TOKEN_KEY = 'goldysSecret';
const TOKEN_KEY = 'token';
const USER_KEY = 'goldysSecret';

@Injectable({
  providedIn: 'root'
})

//This service is to save logged in users deatils and tokens in session 
export class TokenStorageService {

  constructor() { }

  // Implement saveToken method to save access Token while user is login 
  public saveToken(token: string) {
    // console.log('token',token);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  // Implement getToken method to return the token stored in session storage
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  //Implement saveUser method to save the logged in user details in session storage
  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // Implement getUser method to return the saved user deatils from session storage
  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  
  // Implement signOut method to clear the session
  signOut() {
      window.sessionStorage.clear();
  } 
}
