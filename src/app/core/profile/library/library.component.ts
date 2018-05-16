import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BookService} from '../../../service/book.service';
import {Book} from '../../../models/Book';
import {AuthService} from '../../../service/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css', '../profile.component.css']
})
export class LibraryComponent implements OnInit {
  private fileToUpload: File;
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.query) {
        const query = JSON.parse(params.query);
        this.bookService.superfind(query).subscribe((books) => {
          this.books = books;
        });
      }
    });
  }

  addBook(form: NgForm) {
    this.bookService.create(this.fileToUpload).subscribe((book) => {
      this.books.push(book[0]);
    });
  }


  fileChangeEvent($event) {
    this.fileToUpload = (<any>event.target).files[0];
  }
}
