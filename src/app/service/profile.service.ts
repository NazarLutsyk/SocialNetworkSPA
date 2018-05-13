import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProfileService {

  user$ = new Subject<User>();

  constructor() {
  }

}
