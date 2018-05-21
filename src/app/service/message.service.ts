import {Injectable} from '@angular/core';
import {Message} from '../models/Message';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService {

  constructor(
    private http: HttpClient,
    private globalConfig: ConfigService
  ) {
  }

  create(post: any): Observable<Message> {
    return this.http.post<Message>(`${this.globalConfig.apiURL}/api/messages`, post);
  }

  superfind(query = {}, sort: {}, limit = null, populate: {}): Observable<Message[]> {
    query = JSON.stringify(query);
    sort = JSON.stringify(sort);
    populate = JSON.stringify(populate);
    return this.http
      .get<Message[]>(`${this.globalConfig.apiURL}/api/messages?query=${query}&sort=${sort}&limit=${limit}&populate=${populate}`);
  }

  remove(_id: string): Observable<any> {
    return this.http.delete(`${this.globalConfig.apiURL}/api/messages/${_id}`);
  }

}
