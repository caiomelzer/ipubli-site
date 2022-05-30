import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.authService.isLoggedIn()){
        alert("Para acessar algumas funcionalidades, você precisa estar logado!")
        this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
      }
      //
      return this.authService.isLoggedIn();
  }
}