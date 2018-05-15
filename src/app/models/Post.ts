import {Image} from './Image';
import {Book} from './Book';
import {Wall} from './Wall';
import {Evaluetable} from './Evaluetable';

export class Post extends Evaluetable{

  constructor(
    public text: string = '',
    public author: string = '',
    public authorObj: Wall = null,
    public images: string[] = [],
    public imagesObj: Image[] = [],
    public books: string[] = [],
    public booksObj: Book[] = [],
  ) {
    super();
  }
}
