import {Library} from './Library';
import {Evaluetable} from './Evaluetable';

export class Book extends Evaluetable {

  constructor(
    public path: string = '',
    public author: string,
    public authorObj: Library = null
  ) {
    super();
  }
}
