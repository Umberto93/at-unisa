import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.authService.isAuthenticated().then((credentials) => {
      return !credentials || this.router.navigateByUrl('/home');
    });
  }
  
}
