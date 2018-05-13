import {Image} from './Image';
import {ConfigService} from '../service/config.service';

export class User {

  public avatar: Image = null;
  public thumb: Image = null;

  constructor(
    public _id: string = '',
    public name: string = '',
    public surname: string = '',
    public login: string = '',
    public password: string = '',
    public email: string = '',
    public phone: string = '',
    public city: string = '',
    public isBanned: boolean = false,
    public birthday: Date = new Date(),
    public roles: string[] = [],
    public friends: User[] = [],
    avatar: Image = null,
    thumb: Image = null,
  ) {
    this.avatar = avatar ? avatar : new Image(`http://localhost:3000/upload/images/default-avatar.jpg`);
    this.thumb = thumb ? thumb : new Image(`http://localhost:3000/upload/images/default-thumb.jpg`);
  }
}
