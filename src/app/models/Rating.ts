import {Evaluetable} from './Evaluetable';
import {User} from './User';

export class Rating {

  constructor(
    public _id: string = '',
    public value: boolean = false,
    public target: string = '',
    public targetObj: Evaluetable = null,
    public author: string = '',
    public authorObj: User = null,
  ) {}
}
