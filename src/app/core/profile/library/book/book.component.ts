import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../../models/Book';
import {BookService} from '../../../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css', '../../profile.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

  downloadBook() {
    this.bookService.download(this.book.path);
  }

  removeBook() {
    this.bookService.remove(this.book._id).subscribe(() => {
      this.route.parent.params.subscribe((params) => {
        this.router.navigate(
          ['profile', params.id, 'library'],
          {queryParams: {query: JSON.stringify({author: params.id})}}
        );
      });
    });
  }
}
