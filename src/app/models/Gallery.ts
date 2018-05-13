import {User} from './User';

export class Gallery {

  constructor(
    public _id: string = '',
    public author: User = null
  ) {}
}
