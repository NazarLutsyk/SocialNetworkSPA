import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthPageGuardService implements CanActivate {

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
          this.router.navigate(
            ['profile', principal._id, 'about'],
            {queryParams: {query: JSON.stringify({_id: principal._id})}}
            );
          return false;
        } else {
          return true;
        }
      });
  }

}
