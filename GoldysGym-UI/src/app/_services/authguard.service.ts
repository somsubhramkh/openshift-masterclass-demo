import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
@Injectable({
  providedIn: 'root'
})

// This the implementation of routes guards
// Write logic to implement canActivate interface
// write code to check if user is logged or not and allow to see the routes
export class AuthguardService implements CanActivate{

  constructor(public tokenStorageService:TokenStorageService,public router: Router) {
   }
   canActivate(){
    if (!!!this.tokenStorageService.getToken()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
   }
}
