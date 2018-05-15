import {Gallery} from './Gallery';
import {Evaluetable} from './Evaluetable';

export class Image extends Evaluetable {

  constructor(
    public path: string = '',
    public author: string = '',
    public authorObj: Gallery = null,
  ) {
    super();
  }
}
