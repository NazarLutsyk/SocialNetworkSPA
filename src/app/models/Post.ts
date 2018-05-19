import {Image} from './Image';
import {Book} from './Book';
import {Evaluetable} from './Evaluetable';

export class Post extends Evaluetable{

  constructor(
    public text: string = '',
    public author: string = '',
    public images: string[] = [],
    public createdAt: string = '',
    public imagesObj: Image[] = [],
    public books: string[] = [],
    public booksObj: Book[] = [],
  ) {
    super();
  }
}
