import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './common/auth.service';

@Injectable()
export class ValidationGuardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.authService._loginData.subscribe((data) => {
      if (!data['valid'] && (Object.keys(data).length === 0 || data['name'] == '')) {
        if (confirm('You dont have access. Please login first')) {
          this.router.navigate(['/login']);
          return false;
        }
      }
    });

    return true;
  }
}
