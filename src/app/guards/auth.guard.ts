import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from '../pages/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const currentRoute = state.url;
    const isLogged = localStorage.getItem('isLogging');

    if (currentRoute.includes('/login') && !isLogged) return true;
    if (currentRoute.includes('/login') && isLogged) {
      this.router.navigate(['/sistema']);
      return false;
    }

    if (currentRoute.includes('/sistema') && isLogged) return true;
    if (currentRoute.includes('/sistema') && !isLogged) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
