import {Evaluetable} from './Evaluetable';

export class Image extends Evaluetable {

  constructor(
    public path: string = '',
    public author: string = '',
  ) {
    super();
  }
}
