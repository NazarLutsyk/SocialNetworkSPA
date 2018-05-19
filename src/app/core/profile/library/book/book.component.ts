import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../../models/Book';
import {BookService} from '../../../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../../../../service/config.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css', '../../profile.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() deleteBook = new EventEmitter();

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    public globalConfig: ConfigService
  ) {
  }

  ngOnInit() {
  }

  downloadBook() {
    this.bookService.download(this.book.path);
  }

  removeBook() {
    console.log('yeeeey');
    this.bookService.remove(this.book._id).subscribe(() => {
      this.deleteBook.emit(this.book);
    });
  }

  copyUrl(urlSpan) {
    const url = urlSpan;
    url.select();
    document.execCommand('copy');
  }
}
