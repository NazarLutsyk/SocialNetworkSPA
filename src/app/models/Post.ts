import {Image} from './Image';
import {Book} from './Book';
import {Wall} from './Wall';
import {Evaluetable} from './Evaluetable';

export class Post extends Evaluetable{

  constructor(
    public text: string = '',
    public author: Wall = null,
    public images: Image[] = [],
    public books: Book[] = [],
  ) {
    super();
  }
}
