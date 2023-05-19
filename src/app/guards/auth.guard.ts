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

    if (currentRoute === '/login' && !isLogged) return true;
    if (currentRoute === '/login' && isLogged) {
      this.router.navigate(['/sistema']);
      return false;
    }

    if (currentRoute === '/sistema' && isLogged) return true;
    if (currentRoute === '/sistema' && !isLogged) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
