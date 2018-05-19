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
  private filesToUpload: File[];
  books: Book[] = [];
  isPrincipalLibrary = false;

  constructor(
    private bookService: BookService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      this.auth.getPrincipal().subscribe((principal) => {
        this.isPrincipalLibrary = principal._id === params.id;
      });
    });
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
    this.bookService.create(this.filesToUpload).subscribe((books) => {
      this.books.push(...books);
    });
  }


  fileChangeEvent($event) {
    this.filesToUpload = (<any>event.target).files;
  }

  deleteBook($event) {
    this.books.splice(this.books.indexOf($event), 1);
  }
}
