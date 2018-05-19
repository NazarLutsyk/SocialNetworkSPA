import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
  updateUser = new Subject<User>();

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
  }

  find(id: string): Observable<User> {
    return this.http
      .get<User>(`${this.configService.apiURL}/api/users/${id}`);
  }

  superfind(query: Object): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.configService.apiURL}/api/users?query=${JSON.stringify(query)}`);
  }

  update(id: string, user: Object): Observable<User> {
    return this.http
      .put<User>(`${this.configService.apiURL}/api/users/${id}`, user);
  }
}
