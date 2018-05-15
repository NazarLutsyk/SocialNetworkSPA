import {User} from './User';

export class Gallery {

  constructor(
    public _id: string = '',
    public author: string = '',
    public authorObj: User = null
  ) {}
}
