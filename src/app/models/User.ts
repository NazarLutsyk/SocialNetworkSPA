import {Image} from './Image';

export class User {

  public avatarObj: Image = null;
  public thumbObj: Image = null;

  constructor(
    public _id: string = null,
    public name: string = '',
    public surname: string = '',
    public login: string = '',
    public password: string = '',
    public email: string = '',
    public phone: string = '',
    public city: string = '',
    public imagesCount: number = 0,
    public friendsCount: number = 0,
    public booksCount: number = 0,
    public isBanned: boolean = false,
    public isFriend: boolean = false,
    public birthday: Date = new Date(),
    public roles: string[] = [],
    public friends: string[] = [],
    public avatar: string = '',
    public thumb: string = '',
    public friendsObj: User[] = [],
    avatarObj: Image = null,
    thumbObj: Image = null,
  ) {
    this.avatarObj = avatarObj ? avatarObj : new Image(`http://localhost:3000/upload/images/default-avatar.jpg`);
    this.thumbObj = thumbObj ? thumbObj : new Image(`http://localhost:3000/upload/images/default-thumb.jpg`);
  }
}
