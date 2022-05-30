import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  public signIn(userData: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    this.router.navigate(['/profile']);
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}