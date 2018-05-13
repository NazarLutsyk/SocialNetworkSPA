import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
  }

  find(id: string): Observable<User> {
    return this.http
      .get<User>(`${this.configService.apiURL}/api/users/${id}`);
  }

}
