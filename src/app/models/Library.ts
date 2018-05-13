import {User} from './User';

export class Library {

  constructor(
    public _id: string = '',
    public author: User = null
  ) {}
}
