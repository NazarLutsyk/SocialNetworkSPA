import {User} from './User';

export class Wall {

  constructor(
    public _id: string = '',
    public author: User = null
  ) {}
}