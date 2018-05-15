import {Evaluetable} from './Evaluetable';
import {User} from './User';

export class Comment {

  constructor(
    public _id: string = '',
    public text: string = '',
    public target: string = '',
    public targetObj: Evaluetable = null,
    public author: string = '',
    public authorObj: User = null
  ) {}
}
