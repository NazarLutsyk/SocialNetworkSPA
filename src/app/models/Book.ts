import {Evaluetable} from './Evaluetable';

export class Book extends Evaluetable {

  constructor(
    public _id: string = '',
    public name: string = '',
    public path: string = '',
    public url: string = '',
    public author: string,
    public isOwnBook: boolean = false,
  ) {
    super();
  }
}
