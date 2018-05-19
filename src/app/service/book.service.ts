import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../models/Book';
import {ConfigService} from './config.service';
import {Subject} from 'rxjs/Subject';

declare let window;

@Injectable()
export class BookService {

  constructor(
    private http: HttpClient,
    private globalConfig: ConfigService,
  ) {
  }

  createByFile(books: File[]): Observable<Book[]> {
    const formData: FormData = new FormData();
    for (const book of books) {
      formData.append('books', book, book.name);
    }
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post<Book[]>(`${this.globalConfig.apiURL}/api/books`, formData, {headers: headers});
  }

  createByUrl(url: string): Observable<Book[]> {
    return this.http.post<Book[]>(`${this.globalConfig.apiURL}/api/books`, {url});
  }

  superfind(query): Observable<Book[]> {
    query = JSON.stringify(query);
    return this.http.get<Book[]>(`${this.globalConfig.apiURL}/api/books?query=${query}`);
  }

  remove(_id: string): Observable<any> {
    return this.http.delete(`${this.globalConfig.apiURL}/api/books/${_id}`);
  }
}
