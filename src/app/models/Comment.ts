import {Evaluetable} from './Evaluetable';
import {User} from './User';

export class Comment {

  constructor(
    public _id: string = '',
    public text: string = '',
    public target: Evaluetable = null,
    public author: User = null
  ) {}
}
