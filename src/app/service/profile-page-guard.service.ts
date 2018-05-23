import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class ProfilePageGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth
      .getPrincipal()
      .map((principal) => {
        if (principal) {
          return true;
        } else {
          this.router.navigate(
            ['auth', 'signin']
          );
          return true;
        }
      });

  }

}
