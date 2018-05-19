import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Image} from '../models/Image';
import {Book} from '../models/Book';

@Injectable()
export class ImagesService {

  constructor(
    private httpClient: HttpClient,
    private globalConfig: ConfigService,
    private http: HttpClient
  ) {
  }

  count(query: string): Observable<any> {
    query = JSON.stringify(query);
    console.log(query);
    return this.httpClient.get<any>(`${this.globalConfig.apiURL}/api/images?aggregate=${query}`);
  }

  superfind(query: any): Observable<Image[]> {
    query = JSON.stringify(query);
    return this.http.get<Image[]>(`${this.globalConfig.apiURL}/api/images?query=${query}`);

  }

  create(images: File[]): Observable<Image[]> {
    const formData: FormData = new FormData();
    for (const image of images) {
      formData.append('images', image, image.name);
    }
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post<Image[]>(`${this.globalConfig.apiURL}/api/images`, formData, {headers: headers});

  }

  remove(_id: string): Observable<any> {
    return this.http.delete(`${this.globalConfig.apiURL}/api/images/${_id}`);
  }
}
