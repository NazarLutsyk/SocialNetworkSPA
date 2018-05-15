import {User} from './User';

export class Library {

  constructor(
    public _id: string = '',
    public author: string = '',
    public authorObj: User = null,
  ) {}
}
