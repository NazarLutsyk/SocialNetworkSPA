import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/auth/local/signup', user);
  }

  signin(login: string, password: string): Observable<User> {
    const credentials = {login, password};
    return this.http.post<User>('http://localhost:3000/auth/local/signin', credentials);
  }

  getPrincipal(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/auth/principal');
  }

  logout(): Observable<any> {
    return this.http.get('http://localhost:3000/auth/logout');
  }

}
