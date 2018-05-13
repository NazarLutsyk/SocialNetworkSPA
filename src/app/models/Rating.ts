import {Evaluetable} from './Evaluetable';
import {User} from './User';

export class Rating {

  constructor(
    public _id: string = '',
    public value: boolean = false,
    public target: Evaluetable = null,
    public author: User = null
  ) {}
}
